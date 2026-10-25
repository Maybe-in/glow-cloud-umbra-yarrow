import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { _ as symbolLabel, i as fallbackForecast } from "./report-DD22mn2v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/weather.functions-CK76A7v3.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function round1(n) {
	return Math.round(n * 10) / 10;
}
function fromSnapshot(note) {
	return {
		source: "snapshot",
		updatedAt: `2026-10-26 03:17 北京时间快照（${note}）`,
		days: fallbackForecast.map((d) => ({
			...d,
			label: symbolLabel(d.symbol)
		}))
	};
}
var getLuxiWeather_createServerFn_handler = createServerRpc({
	id: "f54b2166578898e7fd6009980102ce3bfb90fa40945bdba0bb89ee414bb14e76",
	name: "getLuxiWeather",
	filename: "src/lib/weather.functions.ts"
}, (opts) => getLuxiWeather.__executeServer(opts));
var getLuxiWeather = createServerFn({ method: "GET" }).handler(getLuxiWeather_createServerFn_handler, async () => {
	try {
		const res = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=24.532&lon=103.766", {
			headers: { "User-Agent": "luxi-scallion-brief/1.0 github.com/grok-app agricultural-dashboard" },
			signal: AbortSignal.timeout(8e3)
		});
		if (!res.ok) return fromSnapshot(`预报接口 HTTP ${res.status}`);
		const body = await res.json();
		const series = body.properties?.timeseries ?? [];
		if (series.length === 0) return fromSnapshot("预报为空");
		const days = /* @__PURE__ */ new Map();
		for (const step of series) {
			const utc = new Date(step.time);
			if (Number.isNaN(utc.getTime())) continue;
			const date = new Date(utc.getTime() + 288e5).toISOString().slice(0, 10);
			const bucket = days.get(date) ?? {
				temps: [],
				hums: [],
				winds: [],
				precip: 0,
				symbols: []
			};
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
		const out = [];
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
				label: symbolLabel(symbol)
			});
			if (out.length >= 10) break;
		}
		if (out.length < 7) return fromSnapshot("有效预报不足 7 天");
		const updated = body.properties?.meta?.updated_at;
		return {
			source: "live",
			updatedAt: updated ? `${new Date(updated).toLocaleString("zh-CN", {
				timeZone: "Asia/Shanghai",
				hour12: false
			})} 起报` : "刚刚更新",
			days: out
		};
	} catch {
		return fromSnapshot("网络不可用");
	}
});
//#endregion
export { getLuxiWeather_createServerFn_handler };
