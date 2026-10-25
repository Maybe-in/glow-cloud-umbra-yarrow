import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-IGvlBgh0.mjs";
import { a as forecast, c as luxiScale, d as priceStats, f as regionBars, g as summary, h as sources, l as markets, m as seasonalIndex, n as areas, o as gaps, p as risks, r as climateMonths, s as luxiFacts, t as REPORT, u as paired, v as timeline, y as varieties } from "./report-DD22mn2v.mjs";
import { a as Line, c as ResponsiveContainer, i as Area, l as Tooltip, n as YAxis, o as CartesianGrid, r as XAxis, s as Bar, t as ComposedChart, u as Legend } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DALLtMXP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	["summary", "摘要"],
	["weather", "天气"],
	["price", "行情"],
	["outlook", "预测"],
	["map", "产区"],
	["luxi", "泸西"],
	["sources", "来源"]
];
function riskClass(level) {
	if (level === "高") return "bg-soil text-paper";
	if (level === "中") return "bg-soil-soft text-soil";
	return "bg-onion-soft text-onion";
}
function ChartFrame({ children, height = "h-72" }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${height} w-full animate-pulse rounded-2xl bg-onion-soft/60` });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${height} w-full min-w-0`,
		children
	});
}
var axis = {
	stroke: "var(--color-muted)",
	fontSize: 12
};
var grid = { stroke: "var(--color-line)" };
function ReportView({ weather }) {
	const [view, setView] = (0, import_react.useState)("region");
	const [side, setSide] = (0, import_react.useState)("wholesale");
	const fan = forecast.map((row) => side === "wholesale" ? {
		label: row.label,
		low: row.low,
		base: row.base,
		high: row.high,
		band: row.high - row.low
	} : {
		label: row.label,
		low: row.oLow,
		base: row.oBase,
		high: row.oHigh,
		band: row.oHigh - row.oLow
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:px-8 md:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium tracking-wide text-onion",
								children: "香葱行情与风险监控 · 每日简报"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 text-3xl text-ink md:text-5xl",
								children: "泸西香葱日报"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 max-w-2xl text-sm text-muted md:text-base",
								children: [
									REPORT.id,
									" · ",
									REPORT.focus,
									" · 编制 ",
									REPORT.compiledAt,
									" ",
									REPORT.timezone
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-full px-4 py-2 text-sm font-medium ${riskClass("低")}`,
							children: ["综合风险 ", "低"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-3xl font-serif text-xl text-ink md:text-2xl",
						children: REPORT.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex gap-2 overflow-x-auto pb-1",
						children: NAV.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${id}`,
							className: "shrink-0 rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink hover:border-onion hover:text-onion",
							children: label
						}, id))
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 md:px-8 md:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "summary",
					className: "scroll-mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl",
							children: "今日核心摘要"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 flex flex-col gap-3",
							children: summary.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 rounded-2xl border border-line bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-lg text-onion",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm md:text-base",
									children: line
								})]
							}, line.slice(0, 12)))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-2 gap-3 md:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "全国中位数",
									v: `${priceStats.median.toFixed(2)} 元/公斤`,
									d: `小葱批发 · ${priceStats.asOf}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "昆明王旗营",
									v: `${priceStats.kunming.toFixed(2)} 元`,
									d: "10月1日为 6.00，升 1.00"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "泸西综合实现价",
									v: "3.05 元/公斤",
									d: "产值÷产量，非今日牌价"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									k: "日发运",
									v: ">2000 吨",
									d: "基地 13–13.5 万亩"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "weather",
					className: "scroll-mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "天气与灾害",
							title: "泸西温和，全国本周无针对香葱的极端事件"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								"预报来源：",
								weather.source === "live" ? "挪威气象局实时" : "内置快照",
								" · ",
								weather.updatedAt,
								"。点位 24.53°N、103.77°E，代表县城附近，不是乡镇实况。"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5",
							children: weather.days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-line bg-card p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: day.date.slice(5)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-medium text-onion",
										children: day.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 font-serif text-xl",
										children: [
											Math.round(day.tMin),
											"–",
											Math.round(day.tMax),
											"°"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											"降水 ",
											day.precipMm.toFixed(1),
											" mm"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											"湿度 ",
											day.humidity,
											"% · 风 ",
											day.wind.toFixed(0),
											" m/s"
										]
									})
								]
							}, day.date))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 lg:grid-cols-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-line bg-card p-4 lg:col-span-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: "过去 13 个月：降水与气温"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-3 text-xs text-muted",
										children: "Open-Meteo 再分析月合计。2026 年 10 月只到 25 日。"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
											data: climateMonths,
											margin: {
												top: 8,
												right: 8,
												left: 0,
												bottom: 0
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													stroke: grid.stroke,
													vertical: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "month",
													tick: axis,
													tickFormatter: (v) => v.slice(2),
													interval: 1
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													yAxisId: "p",
													tick: axis,
													width: 36
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													yAxisId: "t",
													orientation: "right",
													tick: axis,
													width: 32
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													contentStyle: tipStyle,
													formatter: (value, name) => [value ?? "", String(name)]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
													yAxisId: "p",
													dataKey: "precip",
													name: "降水 mm",
													fill: "var(--color-onion)",
													radius: [
														4,
														4,
														0,
														0
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													yAxisId: "t",
													dataKey: "tmax",
													name: "最高°C",
													stroke: "var(--color-soil)",
													strokeWidth: 2,
													dot: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													yAxisId: "t",
													dataKey: "tmin",
													name: "最低°C",
													stroke: "var(--color-ink)",
													strokeWidth: 1.5,
													dot: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {})
											]
										})
									}) })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 lg:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl border border-line bg-card p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg",
											children: "近 30 天"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm",
											children: "降水约 59 毫米，22 个雨日。最高平均 24.6°C，最低平均 14.8°C。没有 ≥30°C 的高温日，也没有 ≤5°C 的冷日。"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl border border-line bg-card p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg",
											children: "近 90 天"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm",
											children: "7 月 28 日至 10 月 25 日降水约 318 毫米。达到 25 毫米的只有 8 月 3 日。雨日多、雨强大不。"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl border border-line bg-onion-soft p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg text-onion",
											children: "对产量和品质"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm",
											children: "雨季已过，当前是拔葱窗口。短时小雨只影响带泥和洗葱节奏，不改一周产量。11 月 2 日降温有利于葱白，不必防冻。"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-lg",
							children: "灾害与农事时间线"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 border-l border-line",
							children: timeline.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "ml-4 border-b border-line py-3 pl-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: item.when
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-soil-soft px-2 py-0.5 text-xs text-soil",
										children: item.tag
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: item.text
								})]
							}, item.when))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-lg",
							children: "风险清单"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-3 md:grid-cols-2",
							children: risks.map((risk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-line bg-card p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg",
											children: risk.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-3 py-1 text-xs font-medium ${riskClass(risk.level)}`,
											children: risk.level
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm",
										children: risk.why
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-onion",
										children: risk.action
									})
								]
							}, risk.name))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "price",
					className: "scroll-mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "价格",
							title: "有截面、有五年产地价，没有编造的十年月线"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-3xl text-sm text-muted",
							children: [
								"全国批发中位数 ",
								priceStats.median.toFixed(2),
								" 元/公斤，25 分位 ",
								priceStats.p25.toFixed(2),
								"，75 分位 ",
								priceStats.p75.toFixed(2),
								"， 简单均价 ",
								priceStats.mean.toFixed(2),
								"。最低怀来 2.00，最高拉萨 14.50（运费，不代表产区）。 可比的 24 个市场从 5 月末到 10 月初中位数 ",
								priceStats.pairedMayMedian.toFixed(2),
								" → ",
								priceStats.pairedOctMedian.toFixed(2),
								"， 约 +",
								priceStats.pairedChangePct,
								"%。这不是严格同比，因为没有去年 10 月的同样截面。"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [
								["region", "分区均价"],
								["span", "5月对10月"],
								["origin", "五年产地实现价"],
								["season", "季节形态"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setView(id),
								className: `rounded-full px-4 py-2 text-sm ${view === id ? "bg-onion text-paper" : "border border-line bg-card text-ink"}`,
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-2xl border border-line bg-card p-4",
							children: [
								view === "region" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: "2026-10-04 各大区简单均价"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-3 text-xs text-muted",
										children: "华东含凌家塘、马鞍山两个 12 元报价，拉高了均值。西南均价 7.27，昆明单市场 7.00。"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
											data: regionBars,
											layout: "vertical",
											margin: {
												left: 12,
												right: 12
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													stroke: grid.stroke,
													horizontal: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													type: "number",
													tick: axis,
													unit: " 元"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													type: "category",
													dataKey: "region",
													tick: axis,
													width: 48
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													contentStyle: tipStyle,
													formatter: (value, name) => [`${value ?? ""} 元/公斤`, String(name)]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
													dataKey: "avg",
													name: "区域均价",
													fill: "var(--color-onion)",
													radius: [
														0,
														4,
														4,
														0
													],
													barSize: 18
												})
											]
										})
									}) })
								] }),
								view === "span" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: "同一市场：5月29日与10月4日"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-3 text-xs text-muted",
										children: "17 家上涨、3 家下跌、4 家基本持平。黄商维持 11.60。凌家塘、马鞍山、合肥跳升，先核对是不是精品规格。"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, {
										height: "h-96",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
											width: "100%",
											height: "100%",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
												data: paired,
												margin: {
													bottom: 48,
													right: 8,
													left: 0
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
														stroke: grid.stroke,
														vertical: false
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
														dataKey: "name",
														tick: axis,
														interval: 0,
														angle: -50,
														textAnchor: "end",
														height: 70
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
														tick: axis,
														width: 36
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tipStyle }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
														dataKey: "may",
														name: "5月29日",
														fill: "var(--color-soil)",
														radius: [
															3,
															3,
															0,
															0
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
														dataKey: "oct",
														name: "10月4日",
														fill: "var(--color-onion)",
														radius: [
															3,
															3,
															0,
															0
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {})
												]
											})
										})
									})
								] }),
								view === "origin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: "泸西综合实现价与产量"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-3 text-xs text-muted",
										children: "单价 = 公开产值 / 公开产量。2022、2023 没有同时给出的产值和产量，留空，不插值。2020 只有产值。"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
											data: luxiScale,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													stroke: grid.stroke,
													vertical: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "year",
													tick: axis
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													yAxisId: "o",
													tick: axis,
													width: 36
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													yAxisId: "p",
													orientation: "right",
													tick: axis,
													width: 36,
													domain: [2.5, 3.5]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tipStyle }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
													yAxisId: "o",
													dataKey: "output",
													name: "产量 万吨",
													fill: "var(--color-onion)",
													radius: [
														4,
														4,
														0,
														0
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
													yAxisId: "p",
													dataKey: "unitPrice",
													name: "实现价 元/公斤",
													stroke: "var(--color-soil)",
													strokeWidth: 2,
													connectNulls: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {})
											]
										})
									}) })
								] }),
								view === "season" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: "年内季节形态（指数，不是历史成交）"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-3 text-xs text-muted",
										children: "100 = 10 月上旬全国中位数。深色点是 2026 年真实锚定，其余月份是农事推演，不能当成 12 个月行情。"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
											data: seasonalIndex,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													stroke: grid.stroke,
													vertical: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "month",
													tick: axis
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													tick: axis,
													width: 36,
													domain: [60, 140]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													contentStyle: tipStyle,
													formatter: (value, name) => [value ?? "", String(name)]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
													dataKey: "index",
													name: "季节指数",
													stroke: "var(--color-onion)",
													fill: "var(--color-onion-soft)"
												})
											]
										})
									}) })
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 overflow-x-auto rounded-2xl border border-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[36rem] text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-onion-soft text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "市场"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "区域"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "10月4日"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "和中位数"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: markets.map((row) => {
									const diff = row.price - priceStats.median;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-line bg-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2",
												children: row.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 text-muted",
												children: row.region
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 font-medium",
												children: row.price.toFixed(2)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: `px-3 py-2 ${diff >= 0 ? "text-soil" : "text-onion"}`,
												children: [diff >= 0 ? "+" : "", diff.toFixed(2)]
											})
										]
									}, row.name);
								}) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: "单位元/公斤。来源：农业农村部信息中心，2026-10-04。拉萨不进入区域均价。"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "outlook",
					className: "scroll-mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "预测",
							title: "中枢慢抬，春节前才有比较像样的上沿"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSide("wholesale"),
								className: `rounded-full px-4 py-2 text-sm ${side === "wholesale" ? "bg-onion text-paper" : "border border-line bg-card"}`,
								children: "全国批发中位数"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSide("origin"),
								className: `rounded-full px-4 py-2 text-sm ${side === "origin" ? "bg-onion text-paper" : "border border-line bg-card"}`,
								children: "泸西综合实现价"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-2xl border border-line bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
									data: fan,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: grid.stroke,
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "label",
											tick: axis
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tick: axis,
											width: 36,
											domain: side === "wholesale" ? [5, 10] : [2, 5]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: tipStyle,
											formatter: (value, name) => [`${value ?? ""} 元`, String(name)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											dataKey: "high",
											name: "乐观",
											stroke: "var(--color-soil)",
											strokeWidth: 1.5,
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											dataKey: "base",
											name: "中性",
											stroke: "var(--color-onion)",
											strokeWidth: 2.5,
											dot: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											dataKey: "low",
											name: "悲观",
											stroke: "var(--color-ink)",
											strokeDasharray: "4 4",
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {})
									]
								})
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted",
								children: "三条线分别是乐观、中性和悲观情景，不是统计置信区间。单位元/公斤。"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 overflow-x-auto rounded-2xl border border-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[40rem] text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-onion-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "时段"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "批发 悲观/中性/乐观"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "泸西 悲观/中性/乐观"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "置信度"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "依据"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: forecast.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-line bg-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-medium",
											children: row.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-3 py-2",
											children: [
												row.low.toFixed(1),
												" / ",
												row.base.toFixed(1),
												" / ",
												row.high.toFixed(1)
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-3 py-2",
											children: [
												row.oLow.toFixed(1),
												" / ",
												row.oBase.toFixed(1),
												" / ",
												row.oHigh.toFixed(1)
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: row.confidence
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 text-muted",
											children: row.basis
										})
									]
								}, row.label)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "预测不是模型外推的成交价。约束只有四条：日发运约 2000 吨、产地五年实现价粘在 3 元、热区 6–10 月让位给泸西、2027 年 2 月 6 日春节。没有香葱期货，3 个月以后的数字只适合做计划区间。"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "map",
					className: "scroll-mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "品种与产区",
							title: "先分清小香葱和大葱，再看泸西在链条上的位置"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 overflow-x-auto rounded-2xl border border-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[40rem] text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-onion-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "类型"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "特征"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "主产"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "和泸西的关系"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: varieties.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-line bg-card align-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3 font-medium",
											children: row.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3",
											children: row.trait
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3",
											children: row.where
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3 text-muted",
											children: row.luxi
										})
									]
								}, row.name)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 overflow-x-auto rounded-2xl border border-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[40rem] text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-onion-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "产区"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "角色"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "上市"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-3 font-medium",
											children: "备注"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: areas.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-line bg-card align-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3 font-medium",
											children: row.place
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3",
											children: row.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3",
											children: row.season
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3 text-muted",
											children: row.note
										})
									]
								}, row.place)) })]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "luxi",
					className: "scroll-mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "泸西专项",
							title: "量已经很大，价格靠加工和标准稳住，不靠减产炒作"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: luxiFacts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-line bg-card p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: fact.k
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-serif text-2xl",
										children: fact.v
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted",
										children: fact.s
									})
								]
							}, fact.k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-line bg-card p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl",
										children: "和全国价怎么比"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm",
										children: "昆明批发 7.00 元，全国中位数 6.50 元，新发地 5.80 元，泸西年度综合实现价 3.05 元。价差大约 3.5–4 元，主要是清洗、打冰、泡沫箱、集并和批发加价，不是“泸西葱卖不出价”。精品葱白如果走到黄商、鄂州那种 11 元市场，要单独核规格，不能用全县均价去对。"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm",
										children: "10 月 1 日到 4 日，昆明从 6 元升到 7 元，新发地停在 5.80。近端亮点在西南销地，不在北京。蔬菜 200 指数 10 月 23 日 111.58、日环比下降 0.15，大盘是稳的。"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl bg-ink p-5 text-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl text-paper",
									children: "未来 1–3 个月怎么做"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-3 flex flex-col gap-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "种植：按正常茬口拔。11 月 2 日降温不用防冻。雨后看霜霉和软腐，连作田优先轮作。" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "收购：中性情景地头综合价 3.0–3.5 元。低于 2.6 元再考虑转烘干，不要追 10 元以上的个别销地。" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "外销：上海方向维持订单。华东高价市场先确认是不是小香葱、葱白长度和是否打冰。" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "加工：尾菜、次级品继续进烘干。白水车间日处理鲜葱约 35 吨，是跌价时的缓冲，不是主通道。" })
									]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "sources",
					className: "scroll-mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "可追溯",
							title: "数据从哪来，哪里是空的"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-col gap-3",
							children: sources.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-line bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: item.detail
								})]
							}, item.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-lg",
							children: "明确缺失"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-col gap-2",
							children: gaps.map((gap) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-2xl bg-soil-soft px-4 py-3 text-sm text-ink",
								children: gap
							}, gap))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs text-muted",
							children: "本报可独立阅读。和前一次完整截面（10 月 4 日）相比，没有更新的全国小葱表；相对 10 月 1 日，昆明是唯一超过 0.5 元的主销地变化。下次更新以农业农村部新的小葱报价日为准。"
						})
					]
				})
			]
		})]
	});
}
function Stat({ k, v, d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-serif text-2xl",
				children: v
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: d
			})
		]
	});
}
function SectionTitle({ kicker, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-medium text-onion",
		children: kicker
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mt-1 text-2xl md:text-3xl",
		children: title
	})] });
}
var tipStyle = {
	background: "var(--color-card)",
	border: "1px solid var(--color-line)",
	borderRadius: 12,
	color: "var(--color-ink)",
	fontSize: 12
};
function Home() {
	const weather = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportView, { weather });
}
//#endregion
export { Home as component };
