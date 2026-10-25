import { useEffect, useState, type ReactNode } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  areas,
  climateMonths,
  forecast,
  gaps,
  luxiFacts,
  luxiScale,
  markets,
  overallRisk,
  paired,
  priceStats,
  regionBars,
  REPORT,
  risks,
  seasonalIndex,
  sources,
  summary,
  timeline,
  varieties,
  type RiskLevel,
} from "@/data/report";
import type { WeatherResult } from "@/lib/weather.functions";

const NAV = [
  ["summary", "摘要"],
  ["weather", "天气"],
  ["price", "行情"],
  ["outlook", "预测"],
  ["map", "产区"],
  ["luxi", "泸西"],
  ["sources", "来源"],
] as const;

type PriceView = "region" | "span" | "origin" | "season";

function riskClass(level: RiskLevel) {
  if (level === "高") return "bg-soil text-paper";
  if (level === "中") return "bg-soil-soft text-soil";
  return "bg-onion-soft text-onion";
}

function ChartFrame({ children, height = "h-72" }: { children: ReactNode; height?: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) {
    return <div className={`${height} w-full animate-pulse rounded-2xl bg-onion-soft/60`} />;
  }
  return <div className={`${height} w-full min-w-0`}>{children}</div>;
}

const axis = { stroke: "var(--color-muted)", fontSize: 12 };
const grid = { stroke: "var(--color-line)" };

export function ReportView({ weather }: { weather: WeatherResult }) {
  const [view, setView] = useState<PriceView>("region");
  const [side, setSide] = useState<"wholesale" | "origin">("wholesale");

  const fan = forecast.map((row) =>
    side === "wholesale"
      ? { label: row.label, low: row.low, base: row.base, high: row.high, band: row.high - row.low }
      : { label: row.label, low: row.oLow, base: row.oBase, high: row.oHigh, band: row.oHigh - row.oLow },
  );

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:px-8 md:py-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-wide text-onion">香葱行情与风险监控 · 每日简报</p>
              <h1 className="mt-1 text-3xl text-ink md:text-5xl">泸西香葱日报</h1>
              <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
                {REPORT.id} · {REPORT.focus} · 编制 {REPORT.compiledAt} {REPORT.timezone}
              </p>
            </div>
            <div className={`rounded-full px-4 py-2 text-sm font-medium ${riskClass(overallRisk)}`}>
              综合风险 {overallRisk}
            </div>
          </div>
          <p className="max-w-3xl font-serif text-xl text-ink md:text-2xl">{REPORT.headline}</p>
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {NAV.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="shrink-0 rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink hover:border-onion hover:text-onion"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 md:px-8 md:py-10">
        <section id="summary" className="scroll-mt-6">
          <h2 className="text-2xl">今日核心摘要</h2>
          <ol className="mt-4 flex flex-col gap-3">
            {summary.map((line, i) => (
              <li key={line.slice(0, 12)} className="flex gap-3 rounded-2xl border border-line bg-card p-4">
                <span className="font-serif text-lg text-onion">{i + 1}</span>
                <p className="text-sm md:text-base">{line}</p>
              </li>
            ))}
          </ol>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Stat k="全国中位数" v={`${priceStats.median.toFixed(2)} 元/公斤`} d={`小葱批发 · ${priceStats.asOf}`} />
            <Stat k="昆明王旗营" v={`${priceStats.kunming.toFixed(2)} 元`} d="10月1日为 6.00，升 1.00" />
            <Stat k="泸西综合实现价" v="3.05 元/公斤" d="产值÷产量，非今日牌价" />
            <Stat k="日发运" v=">2000 吨" d="基地 13–13.5 万亩" />
          </div>
        </section>

        <section id="weather" className="scroll-mt-6">
          <SectionTitle kicker="天气与灾害" title="泸西温和，全国本周无针对香葱的极端事件" />
          <p className="mt-2 text-sm text-muted">
            预报来源：{weather.source === "live" ? "挪威气象局实时" : "内置快照"} · {weather.updatedAt}
            。点位 24.53°N、103.77°E，代表县城附近，不是乡镇实况。
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {weather.days.map((day) => (
              <article key={day.date} className="rounded-2xl border border-line bg-card p-3">
                <p className="text-xs text-muted">{day.date.slice(5)}</p>
                <p className="mt-1 font-medium text-onion">{day.label}</p>
                <p className="mt-2 font-serif text-xl">
                  {Math.round(day.tMin)}–{Math.round(day.tMax)}°
                </p>
                <p className="text-xs text-muted">降水 {day.precipMm.toFixed(1)} mm</p>
                <p className="text-xs text-muted">湿度 {day.humidity}% · 风 {day.wind.toFixed(0)} m/s</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-5">
            <div className="rounded-2xl border border-line bg-card p-4 lg:col-span-3">
              <h3 className="text-lg">过去 13 个月：降水与气温</h3>
              <p className="mb-3 text-xs text-muted">Open-Meteo 再分析月合计。2026 年 10 月只到 25 日。</p>
              <ChartFrame>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={climateMonths} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={grid.stroke} vertical={false} />
                    <XAxis dataKey="month" tick={axis} tickFormatter={(v: string) => v.slice(2)} interval={1} />
                    <YAxis yAxisId="p" tick={axis} width={36} />
                    <YAxis yAxisId="t" orientation="right" tick={axis} width={32} />
                    <Tooltip contentStyle={tipStyle} formatter={(value, name) => [value ?? "", String(name)]} />
                    <Bar yAxisId="p" dataKey="precip" name="降水 mm" fill="var(--color-onion)" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="t" dataKey="tmax" name="最高°C" stroke="var(--color-soil)" strokeWidth={2} dot={false} />
                    <Line yAxisId="t" dataKey="tmin" name="最低°C" stroke="var(--color-ink)" strokeWidth={1.5} dot={false} />
                    <Legend />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartFrame>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-2">
              <article className="rounded-2xl border border-line bg-card p-4">
                <h3 className="text-lg">近 30 天</h3>
                <p className="mt-2 text-sm">降水约 59 毫米，22 个雨日。最高平均 24.6°C，最低平均 14.8°C。没有 ≥30°C 的高温日，也没有 ≤5°C 的冷日。</p>
              </article>
              <article className="rounded-2xl border border-line bg-card p-4">
                <h3 className="text-lg">近 90 天</h3>
                <p className="mt-2 text-sm">7 月 28 日至 10 月 25 日降水约 318 毫米。达到 25 毫米的只有 8 月 3 日。雨日多、雨强大不。</p>
              </article>
              <article className="rounded-2xl border border-line bg-onion-soft p-4">
                <h3 className="text-lg text-onion">对产量和品质</h3>
                <p className="mt-2 text-sm">雨季已过，当前是拔葱窗口。短时小雨只影响带泥和洗葱节奏，不改一周产量。11 月 2 日降温有利于葱白，不必防冻。</p>
              </article>
            </div>
          </div>

          <h3 className="mt-8 text-lg">灾害与农事时间线</h3>
          <ol className="mt-3 border-l border-line">
            {timeline.map((item) => (
              <li key={item.when} className="ml-4 border-b border-line py-3 pl-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-medium">{item.when}</span>
                  <span className="rounded-full bg-soil-soft px-2 py-0.5 text-xs text-soil">{item.tag}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-8 text-lg">风险清单</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {risks.map((risk) => (
              <article key={risk.name} className="rounded-2xl border border-line bg-card p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg">{risk.name}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${riskClass(risk.level)}`}>{risk.level}</span>
                </div>
                <p className="mt-2 text-sm">{risk.why}</p>
                <p className="mt-2 text-sm text-onion">{risk.action}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="price" className="scroll-mt-6">
          <SectionTitle kicker="价格" title="有截面、有五年产地价，没有编造的十年月线" />
          <p className="mt-2 max-w-3xl text-sm text-muted">
            全国批发中位数 {priceStats.median.toFixed(2)} 元/公斤，25 分位 {priceStats.p25.toFixed(2)}，75 分位 {priceStats.p75.toFixed(2)}，
            简单均价 {priceStats.mean.toFixed(2)}。最低怀来 2.00，最高拉萨 14.50（运费，不代表产区）。
            可比的 24 个市场从 5 月末到 10 月初中位数 {priceStats.pairedMayMedian.toFixed(2)} → {priceStats.pairedOctMedian.toFixed(2)}，
            约 +{priceStats.pairedChangePct}%。这不是严格同比，因为没有去年 10 月的同样截面。
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {(
              [
                ["region", "分区均价"],
                ["span", "5月对10月"],
                ["origin", "五年产地实现价"],
                ["season", "季节形态"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setView(id)}
                className={`rounded-full px-4 py-2 text-sm ${view === id ? "bg-onion text-paper" : "border border-line bg-card text-ink"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-line bg-card p-4">
            {view === "region" && (
              <>
                <h3 className="text-lg">2026-10-04 各大区简单均价</h3>
                <p className="mb-3 text-xs text-muted">华东含凌家塘、马鞍山两个 12 元报价，拉高了均值。西南均价 7.27，昆明单市场 7.00。</p>
                <ChartFrame>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={regionBars} layout="vertical" margin={{ left: 12, right: 12 }}>
                      <CartesianGrid stroke={grid.stroke} horizontal={false} />
                      <XAxis type="number" tick={axis} unit=" 元" />
                      <YAxis type="category" dataKey="region" tick={axis} width={48} />
                      <Tooltip contentStyle={tipStyle} formatter={(value, name) => [`${value ?? ""} 元/公斤`, String(name)]} />
                      <Bar dataKey="avg" name="区域均价" fill="var(--color-onion)" radius={[0, 4, 4, 0]} barSize={18} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartFrame>
              </>
            )}
            {view === "span" && (
              <>
                <h3 className="text-lg">同一市场：5月29日与10月4日</h3>
                <p className="mb-3 text-xs text-muted">17 家上涨、3 家下跌、4 家基本持平。黄商维持 11.60。凌家塘、马鞍山、合肥跳升，先核对是不是精品规格。</p>
                <ChartFrame height="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={paired} margin={{ bottom: 48, right: 8, left: 0 }}>
                      <CartesianGrid stroke={grid.stroke} vertical={false} />
                      <XAxis dataKey="name" tick={axis} interval={0} angle={-50} textAnchor="end" height={70} />
                      <YAxis tick={axis} width={36} />
                      <Tooltip contentStyle={tipStyle} />
                      <Bar dataKey="may" name="5月29日" fill="var(--color-soil)" radius={[3, 3, 0, 0]} />
                      <Bar dataKey="oct" name="10月4日" fill="var(--color-onion)" radius={[3, 3, 0, 0]} />
                      <Legend />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartFrame>
              </>
            )}
            {view === "origin" && (
              <>
                <h3 className="text-lg">泸西综合实现价与产量</h3>
                <p className="mb-3 text-xs text-muted">单价 = 公开产值 / 公开产量。2022、2023 没有同时给出的产值和产量，留空，不插值。2020 只有产值。</p>
                <ChartFrame>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={luxiScale}>
                      <CartesianGrid stroke={grid.stroke} vertical={false} />
                      <XAxis dataKey="year" tick={axis} />
                      <YAxis yAxisId="o" tick={axis} width={36} />
                      <YAxis yAxisId="p" orientation="right" tick={axis} width={36} domain={[2.5, 3.5]} />
                      <Tooltip contentStyle={tipStyle} />
                      <Bar yAxisId="o" dataKey="output" name="产量 万吨" fill="var(--color-onion)" radius={[4, 4, 0, 0]} />
                      <Line yAxisId="p" dataKey="unitPrice" name="实现价 元/公斤" stroke="var(--color-soil)" strokeWidth={2} connectNulls={false} />
                      <Legend />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartFrame>
              </>
            )}
            {view === "season" && (
              <>
                <h3 className="text-lg">年内季节形态（指数，不是历史成交）</h3>
                <p className="mb-3 text-xs text-muted">100 = 10 月上旬全国中位数。深色点是 2026 年真实锚定，其余月份是农事推演，不能当成 12 个月行情。</p>
                <ChartFrame>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={seasonalIndex}>
                      <CartesianGrid stroke={grid.stroke} vertical={false} />
                      <XAxis dataKey="month" tick={axis} />
                      <YAxis tick={axis} width={36} domain={[60, 140]} />
                      <Tooltip contentStyle={tipStyle} formatter={(value, name) => [value ?? "", String(name)]} />
                      <Area dataKey="index" name="季节指数" stroke="var(--color-onion)" fill="var(--color-onion-soft)" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartFrame>
              </>
            )}
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="bg-onion-soft text-ink">
                <tr>
                  <th className="px-3 py-3 font-medium">市场</th>
                  <th className="px-3 py-3 font-medium">区域</th>
                  <th className="px-3 py-3 font-medium">10月4日</th>
                  <th className="px-3 py-3 font-medium">和中位数</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((row) => {
                  const diff = row.price - priceStats.median;
                  return (
                    <tr key={row.name} className="border-t border-line bg-card">
                      <td className="px-3 py-2">{row.name}</td>
                      <td className="px-3 py-2 text-muted">{row.region}</td>
                      <td className="px-3 py-2 font-medium">{row.price.toFixed(2)}</td>
                      <td className={`px-3 py-2 ${diff >= 0 ? "text-soil" : "text-onion"}`}>
                        {diff >= 0 ? "+" : ""}
                        {diff.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-muted">单位元/公斤。来源：农业农村部信息中心，2026-10-04。拉萨不进入区域均价。</p>
        </section>

        <section id="outlook" className="scroll-mt-6">
          <SectionTitle kicker="预测" title="中枢慢抬，春节前才有比较像样的上沿" />
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setSide("wholesale")}
              className={`rounded-full px-4 py-2 text-sm ${side === "wholesale" ? "bg-onion text-paper" : "border border-line bg-card"}`}
            >
              全国批发中位数
            </button>
            <button
              type="button"
              onClick={() => setSide("origin")}
              className={`rounded-full px-4 py-2 text-sm ${side === "origin" ? "bg-onion text-paper" : "border border-line bg-card"}`}
            >
              泸西综合实现价
            </button>
          </div>
          <div className="mt-4 rounded-2xl border border-line bg-card p-4">
            <ChartFrame>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={fan}>
                  <CartesianGrid stroke={grid.stroke} vertical={false} />
                  <XAxis dataKey="label" tick={axis} />
                  <YAxis tick={axis} width={36} domain={side === "wholesale" ? [5, 10] : [2, 5]} />
                  <Tooltip contentStyle={tipStyle} formatter={(value, name) => [`${value ?? ""} 元`, String(name)]} />
                  <Line dataKey="high" name="乐观" stroke="var(--color-soil)" strokeWidth={1.5} dot={false} />
                  <Line dataKey="base" name="中性" stroke="var(--color-onion)" strokeWidth={2.5} dot />
                  <Line dataKey="low" name="悲观" stroke="var(--color-ink)" strokeDasharray="4 4" dot={false} />
                  <Legend />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartFrame>
            <p className="mt-2 text-xs text-muted">
              三条线分别是乐观、中性和悲观情景，不是统计置信区间。单位元/公斤。
            </p>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="bg-onion-soft">
                <tr>
                  <th className="px-3 py-3 font-medium">时段</th>
                  <th className="px-3 py-3 font-medium">批发 悲观/中性/乐观</th>
                  <th className="px-3 py-3 font-medium">泸西 悲观/中性/乐观</th>
                  <th className="px-3 py-3 font-medium">置信度</th>
                  <th className="px-3 py-3 font-medium">依据</th>
                </tr>
              </thead>
              <tbody>
                {forecast.map((row) => (
                  <tr key={row.label} className="border-t border-line bg-card">
                    <td className="px-3 py-2 font-medium">{row.label}</td>
                    <td className="px-3 py-2">{row.low.toFixed(1)} / {row.base.toFixed(1)} / {row.high.toFixed(1)}</td>
                    <td className="px-3 py-2">{row.oLow.toFixed(1)} / {row.oBase.toFixed(1)} / {row.oHigh.toFixed(1)}</td>
                    <td className="px-3 py-2">{row.confidence}</td>
                    <td className="px-3 py-2 text-muted">{row.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">
            预测不是模型外推的成交价。约束只有四条：日发运约 2000 吨、产地五年实现价粘在 3 元、热区 6–10 月让位给泸西、2027 年 2 月 6 日春节。没有香葱期货，3 个月以后的数字只适合做计划区间。
          </p>
        </section>

        <section id="map" className="scroll-mt-6">
          <SectionTitle kicker="品种与产区" title="先分清小香葱和大葱，再看泸西在链条上的位置" />
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="bg-onion-soft">
                <tr>
                  <th className="px-3 py-3 font-medium">类型</th>
                  <th className="px-3 py-3 font-medium">特征</th>
                  <th className="px-3 py-3 font-medium">主产</th>
                  <th className="px-3 py-3 font-medium">和泸西的关系</th>
                </tr>
              </thead>
              <tbody>
                {varieties.map((row) => (
                  <tr key={row.name} className="border-t border-line bg-card align-top">
                    <td className="px-3 py-3 font-medium">{row.name}</td>
                    <td className="px-3 py-3">{row.trait}</td>
                    <td className="px-3 py-3">{row.where}</td>
                    <td className="px-3 py-3 text-muted">{row.luxi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="bg-onion-soft">
                <tr>
                  <th className="px-3 py-3 font-medium">产区</th>
                  <th className="px-3 py-3 font-medium">角色</th>
                  <th className="px-3 py-3 font-medium">上市</th>
                  <th className="px-3 py-3 font-medium">备注</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((row) => (
                  <tr key={row.place} className="border-t border-line bg-card align-top">
                    <td className="px-3 py-3 font-medium">{row.place}</td>
                    <td className="px-3 py-3">{row.role}</td>
                    <td className="px-3 py-3">{row.season}</td>
                    <td className="px-3 py-3 text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="luxi" className="scroll-mt-6">
          <SectionTitle kicker="泸西专项" title="量已经很大，价格靠加工和标准稳住，不靠减产炒作" />
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {luxiFacts.map((fact) => (
              <article key={fact.k} className="rounded-2xl border border-line bg-card p-4">
                <p className="text-xs text-muted">{fact.k}</p>
                <p className="mt-1 font-serif text-2xl">{fact.v}</p>
                <p className="mt-2 text-xs text-muted">{fact.s}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-line bg-card p-5">
              <h3 className="text-xl">和全国价怎么比</h3>
              <p className="mt-3 text-sm">
                昆明批发 7.00 元，全国中位数 6.50 元，新发地 5.80 元，泸西年度综合实现价 3.05 元。价差大约 3.5–4 元，主要是清洗、打冰、泡沫箱、集并和批发加价，不是“泸西葱卖不出价”。精品葱白如果走到黄商、鄂州那种 11 元市场，要单独核规格，不能用全县均价去对。
              </p>
              <p className="mt-3 text-sm">
                10 月 1 日到 4 日，昆明从 6 元升到 7 元，新发地停在 5.80。近端亮点在西南销地，不在北京。蔬菜 200 指数 10 月 23 日 111.58、日环比下降 0.15，大盘是稳的。
              </p>
            </article>
            <article className="rounded-2xl bg-ink p-5 text-paper">
              <h3 className="text-xl text-paper">未来 1–3 个月怎么做</h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                <li>种植：按正常茬口拔。11 月 2 日降温不用防冻。雨后看霜霉和软腐，连作田优先轮作。</li>
                <li>收购：中性情景地头综合价 3.0–3.5 元。低于 2.6 元再考虑转烘干，不要追 10 元以上的个别销地。</li>
                <li>外销：上海方向维持订单。华东高价市场先确认是不是小香葱、葱白长度和是否打冰。</li>
                <li>加工：尾菜、次级品继续进烘干。白水车间日处理鲜葱约 35 吨，是跌价时的缓冲，不是主通道。</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="sources" className="scroll-mt-6">
          <SectionTitle kicker="可追溯" title="数据从哪来，哪里是空的" />
          <ul className="mt-4 flex flex-col gap-3">
            {sources.map((item) => (
              <li key={item.name} className="rounded-2xl border border-line bg-card p-4">
                <p className="font-medium">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-lg">明确缺失</h3>
          <ul className="mt-2 flex flex-col gap-2">
            {gaps.map((gap) => (
              <li key={gap} className="rounded-2xl bg-soil-soft px-4 py-3 text-sm text-ink">
                {gap}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted">
            本报可独立阅读。和前一次完整截面（10 月 4 日）相比，没有更新的全国小葱表；相对 10 月 1 日，昆明是唯一超过 0.5 元的主销地变化。下次更新以农业农村部新的小葱报价日为准。
          </p>
        </section>
      </main>
    </div>
  );
}

function Stat({ k, v, d }: { k: string; v: string; d: string }) {
  return (
    <article className="rounded-2xl border border-line bg-card p-4">
      <p className="text-xs text-muted">{k}</p>
      <p className="mt-1 font-serif text-2xl">{v}</p>
      <p className="mt-1 text-xs text-muted">{d}</p>
    </article>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-onion">{kicker}</p>
      <h2 className="mt-1 text-2xl md:text-3xl">{title}</h2>
    </div>
  );
}

const tipStyle = {
  background: "var(--color-card)",
  border: "1px solid var(--color-line)",
  borderRadius: 12,
  color: "var(--color-ink)",
  fontSize: 12,
};
