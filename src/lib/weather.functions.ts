import { createServerFn } from "@tanstack/react-start";
import { fallbackForecast, symbolLabel } from "@/data/report";

export type ForecastDay = {
  date: string;
  tMin: number;
  tMax: number;
  precipMm: number;
  humidity: number;
  wind: number;
  symbol: string;
  label: string;
};

export type WeatherResult = {
  source: "live" | "snapshot";
  updatedAt: string;
  days: ForecastDay[];
};

type Bucket = {
  temps: number[];
  hums: number[];
  winds: number[];
  precip: number;
  symbols: string[];
};

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

function fromSnapshot(note: string): WeatherResult {
  return {
    source: "snapshot",
    updatedAt: `2026-10-26 03:17 北京时间快照（${note}）`,
    days: fallbackForecast.map((d) => ({ ...d, label: symbolLabel(d.symbol) })),
  };
}

export const getLuxiWeather = createServerFn({ method: "GET" }).handler(async (): Promise<WeatherResult> => {
  try {
    const res = await fetch(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=24.532&lon=103.766",
      {
        headers: {
          "User-Agent": "luxi-scallion-brief/1.0 github.com/grok-app agricultural-dashboard",
        },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!res.ok) return fromSnapshot(`预报接口 HTTP ${res.status}`);
    const body = (await res.json()) as {
      properties?: {
        meta?: { updated_at?: string };
        timeseries?: {
          time: string;
          data: {
            instant?: { details?: { air_temperature?: number; relative_humidity?: number; wind_speed?: number } };
            next_1_hours?: { details?: { precipitation_amount?: number }; summary?: { symbol_code?: string } };
            next_6_hours?: { details?: { precipitation_amount?: number }; summary?: { symbol_code?: string } };
          };
        }[];
      };
    };
    const series = body.properties?.timeseries ?? [];
    if (series.length === 0) return fromSnapshot("预报为空");

    const days = new Map<string, Bucket>();
    for (const step of series) {
      const utc = new Date(step.time);
      if (Number.isNaN(utc.getTime())) continue;
      const local = new Date(utc.getTime() + 8 * 60 * 60 * 1000);
      const date = local.toISOString().slice(0, 10);
      const bucket = days.get(date) ?? { temps: [], hums: [], winds: [], precip: 0, symbols: [] };
      const inst = step.data.instant?.details;
      if (typeof inst?.air_temperature === "number") bucket.temps.push(inst.air_temperature);
      if (typeof inst?.relative_humidity === "number") bucket.hums.push(inst.relative_humidity);
      if (typeof inst?.wind_speed === "number") bucket.winds.push(inst.wind_speed);
      const hour = step.data.next_1_hours;
      const block = step.data.next_6_hours;
      const picked = hour ?? block;
      if (picked) {
        bucket.precip += picked.details?.precipitation_amount ?? 0;
        if (picked.summary?.symbol_code) bucket.symbols.push(picked.summary.symbol_code);
      }
      days.set(date, bucket);
    }

    const out: ForecastDay[] = [];
    for (const [date, bucket] of days) {
      if (bucket.temps.length === 0) continue;
      const symbol = bucket.symbols[Math.floor(bucket.symbols.length / 2)] ?? "cloudy";
      const hum = bucket.hums.reduce((a, b) => a + b, 0) / Math.max(bucket.hums.length, 1);
      out.push({
        date,
        tMin: round1(Math.min(...bucket.temps)),
        tMax: round1(Math.max(...bucket.temps)),
        precipMm: round1(bucket.precip),
        humidity: Math.round(hum),
        wind: round1(Math.max(...bucket.winds, 0)),
        symbol,
        label: symbolLabel(symbol),
      });
      if (out.length >= 10) break;
    }
    if (out.length < 7) return fromSnapshot("有效预报不足 7 天");

    const updated = body.properties?.meta?.updated_at;
    const updatedAt = updated
      ? `${new Date(updated).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false })} 起报`
      : "刚刚更新";

    return { source: "live", updatedAt, days: out };
  } catch {
    return fromSnapshot("网络不可用");
  }
});
