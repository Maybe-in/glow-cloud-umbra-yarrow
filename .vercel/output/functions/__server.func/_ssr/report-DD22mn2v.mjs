//#region node_modules/.nitro/vite/services/ssr/assets/report-DD22mn2v.js
/** 香葱行情日报静态底稿。报价与产业数字来自公开报道；推算项在字段里标明。 */
var REPORT = {
	id: "2026-10-26",
	compiledAt: "2026-10-26 04:10",
	timezone: "北京时间",
	focus: "云南省红河哈尼族彝族自治州泸西县",
	headline: "产区天气温和，批发价高于春末，泸西综合实现价仍在每公斤 3 元附近"
};
var summary = [
	"泸西近 30 天再分析平均最高气温 24.6°C、最低 14.8°C，降水约 59 毫米，无霜冻、无 32°C 以上高温；未来 10 天仅 10 月 27 日、11 月 1 日有小到中雨，11 月 2 日起凉至 10°C 上下，冻害风险低。",
	"农业农村部信息中心 10 月 4 日 41 个批发市场小葱报价中位数 6.50 元/公斤（简单均价 7.07，最高 14.50 为拉萨物流价）。这是目前能核到的最近一次全国完整截面，距本报 22 天。",
	"同一批可比市场里，5 月 29 日中位数约 4.98 元/公斤，到 10 月 4 日升至约 6.35 元，17 家上涨、3 家下跌。10 月 1 日到 4 日多数市场持平，昆明王旗营由 6.00 升至 7.00。",
	"泸西种植基地约 13–13.5 万亩、复种约 45 万亩次，2026 年口径产量约 118 万吨、产值约 36 亿元，推算综合实现价约 3.05 元/公斤，与 2021 年以来约 3.0 元的中枢基本持平。日发运超过 2000 吨。",
	"综合风险等级：低。需要盯的是连作病害（结构性、中）和 11 月 1 日前后的采收窗口，而不是减产或价格失控。春节备货（2027 年 2 月 6 日前后）是未来三个月唯一较清晰的上行窗口，幅度置信度偏低。"
];
var risks = [
	{
		name: "短时降水与田间作业",
		level: "低",
		why: "挪威气象局 10 月 25 日 19:17 UTC 起报：27 日约 3 毫米、11 月 1 日约 6 毫米，没有暴雨日。道路短驳可能变湿，但不构成渍涝。",
		action: "大雨日没排到。小雨日可照常拔葱，避免叶片带泥进洗葱线；11 月 1 日午后视雨势错开装车。"
	},
	{
		name: "霜冻 / 寒潮",
		level: "低",
		why: "未来 9 天最低气温多在 14–16°C，11 月 2–3 日降到约 10°C。过去 13 个月再分析没有 0°C 以下的日子。",
		action: "不必提前抢收避冻。降温利葱白紧实，可把精品订单排在 11 月 3 日之后。"
	},
	{
		name: "连作病虫害",
		level: "中",
		why: "县政协提案已指出满种四茬、复种指数高，霜霉、软腐、葱蛆压力逐年加重。6–8 月再分析降水 662 毫米、几乎天天下雨，病菌基数不低。",
		action: "雨后 48 小时巡田。收购时提高葱白与烂叶抽检比例。地块能轮作的优先排进本季，县里曾提出每年轮作不低于约 4.4 万亩。"
	},
	{
		name: "价格急跌或踩踏式抛售",
		level: "低",
		why: "产地综合实现价五年停在 3.0–3.1 元/公斤。日处理能力约 2000 吨，烘干可吃进尾菜，集中上市的冲击被产业链缓冲。",
		action: "地头价明显低于 2.6 元/公斤再考虑推迟拔葱或转烘干，不要在 7 元以上的个别销地价上追单。"
	},
	{
		name: "台风与区域性干旱",
		level: "低",
		why: "泸西深处高原，台风直接影响概率低。10 月全国灾害趋势把阶段性干旱放在西北和内蒙古，不是滇东南。9 月当地降水已从雨季的 200 毫米级降到 33 毫米，目前不旱。",
		action: "维持现有灌溉。不必按抗旱或防台调整本周收购计划。"
	}
];
/** 2026-10-04 农业农村部信息中心，元/公斤。 */
var markets = [
	{
		region: "华北",
		name: "北京新发地",
		price: 5.8,
		short: "新发地"
	},
	{
		region: "华北",
		name: "怀来京西果菜",
		price: 2,
		short: "怀来"
	},
	{
		region: "华北",
		name: "邯郸南大堡",
		price: 4.2,
		short: "邯郸"
	},
	{
		region: "华北",
		name: "晋城绿欣",
		price: 6.3,
		short: "晋城绿欣"
	},
	{
		region: "华北",
		name: "晋城绿盛",
		price: 4,
		short: "晋城绿盛"
	},
	{
		region: "华北",
		name: "呼和浩特东瓦窑",
		price: 6,
		short: "呼市"
	},
	{
		region: "东北",
		name: "鞍山宁远",
		price: 3.5,
		short: "鞍山"
	},
	{
		region: "东北",
		name: "朝阳果菜",
		price: 2.5,
		short: "朝阳"
	},
	{
		region: "华东",
		name: "常州凌家塘",
		price: 12,
		short: "凌家塘"
	},
	{
		region: "华东",
		name: "苏州南环桥",
		price: 4.9,
		short: "苏州"
	},
	{
		region: "华东",
		name: "无锡朝阳",
		price: 6.92,
		short: "无锡"
	},
	{
		region: "华东",
		name: "义乌农批",
		price: 6.4,
		short: "义乌"
	},
	{
		region: "华东",
		name: "嘉兴蔬菜",
		price: 6.56,
		short: "嘉兴"
	},
	{
		region: "华东",
		name: "绍兴蔬菜果品",
		price: 5.6,
		short: "绍兴"
	},
	{
		region: "华东",
		name: "杭州南庄兜",
		price: 6.5,
		short: "杭州"
	},
	{
		region: "华东",
		name: "合肥周谷堆",
		price: 10,
		short: "合肥"
	},
	{
		region: "华东",
		name: "六安紫竹林",
		price: 6.2,
		short: "六安"
	},
	{
		region: "华东",
		name: "马鞍山安民",
		price: 12,
		short: "马鞍山"
	},
	{
		region: "华东",
		name: "福鼎",
		price: 5.8,
		short: "福鼎"
	},
	{
		region: "华东",
		name: "乐平蔬菜",
		price: 6,
		short: "乐平"
	},
	{
		region: "华东",
		name: "九江琵琶湖",
		price: 9,
		short: "九江"
	},
	{
		region: "华中",
		name: "郑州万邦",
		price: 6.5,
		short: "万邦"
	},
	{
		region: "华中",
		name: "湖北黄商",
		price: 11.6,
		short: "黄商"
	},
	{
		region: "华中",
		name: "鄂州蟠龙",
		price: 11,
		short: "鄂州"
	},
	{
		region: "华中",
		name: "潜江四季友",
		price: 9,
		short: "潜江"
	},
	{
		region: "华中",
		name: "洪湖农贸",
		price: 8.4,
		short: "洪湖"
	},
	{
		region: "华中",
		name: "武汉白沙洲",
		price: 7.4,
		short: "白沙洲"
	},
	{
		region: "华南",
		name: "汕头农批",
		price: 4.8,
		short: "汕头"
	},
	{
		region: "华南",
		name: "海口江楠",
		price: 8.8,
		short: "海口"
	},
	{
		region: "西南",
		name: "南充川北",
		price: 8.6,
		short: "南充"
	},
	{
		region: "西南",
		name: "贵阳农产品物流园",
		price: 6.2,
		short: "贵阳"
	},
	{
		region: "西南",
		name: "昆明王旗营",
		price: 7,
		short: "昆明"
	},
	{
		region: "青藏",
		name: "拉萨领峰",
		price: 14.5,
		short: "拉萨"
	},
	{
		region: "西北",
		name: "咸阳新阳光",
		price: 7.5,
		short: "咸阳"
	},
	{
		region: "西北",
		name: "庆阳西峰",
		price: 5.5,
		short: "庆阳"
	},
	{
		region: "西北",
		name: "武威昊天",
		price: 4.8,
		short: "武威"
	},
	{
		region: "西北",
		name: "金昌金川",
		price: 7.5,
		short: "金昌"
	},
	{
		region: "西北",
		name: "定西安定",
		price: 10.5,
		short: "定西"
	},
	{
		region: "西北",
		name: "酒泉春光",
		price: 10.4,
		short: "酒泉"
	},
	{
		region: "西北",
		name: "兰州高原夏菜",
		price: 2.78,
		short: "兰州"
	},
	{
		region: "西北",
		name: "银川海吉星",
		price: 5,
		short: "银川"
	}
];
var regionBars = [
	{
		region: "东北",
		avg: 3,
		n: 2
	},
	{
		region: "华北",
		avg: 4.72,
		n: 6
	},
	{
		region: "西北",
		avg: 6.75,
		n: 8
	},
	{
		region: "华南",
		avg: 6.8,
		n: 2
	},
	{
		region: "西南",
		avg: 7.27,
		n: 3
	},
	{
		region: "华东",
		avg: 7.53,
		n: 13
	},
	{
		region: "华中",
		avg: 8.98,
		n: 6
	}
].sort((a, b) => a.avg - b.avg);
/** 同一市场 2026-05-29 与 2026-10-04，元/公斤。 */
var paired = [
	{
		name: "怀来",
		may: 1.2,
		oct: 2
	},
	{
		name: "朝阳",
		may: 3.5,
		oct: 2.5
	},
	{
		name: "鞍山",
		may: 3.5,
		oct: 3.5
	},
	{
		name: "晋城绿盛",
		may: 5,
		oct: 4
	},
	{
		name: "汕头",
		may: 4.6,
		oct: 4.8
	},
	{
		name: "苏州",
		may: 4.4,
		oct: 4.9
	},
	{
		name: "福鼎",
		may: 6,
		oct: 5.8
	},
	{
		name: "绍兴",
		may: 4,
		oct: 5.6
	},
	{
		name: "呼市",
		may: 9.8,
		oct: 6
	},
	{
		name: "乐平",
		may: 4,
		oct: 6
	},
	{
		name: "六安",
		may: 5,
		oct: 6.2
	},
	{
		name: "晋城绿欣",
		may: 4.7,
		oct: 6.3
	},
	{
		name: "义乌",
		may: 4.9,
		oct: 6.4
	},
	{
		name: "万邦",
		may: 5.3,
		oct: 6.5
	},
	{
		name: "杭州",
		may: 4,
		oct: 6.5
	},
	{
		name: "无锡",
		may: 4.96,
		oct: 6.92
	},
	{
		name: "白沙洲",
		may: 6.5,
		oct: 7.4
	},
	{
		name: "海口",
		may: 5.25,
		oct: 8.8
	},
	{
		name: "九江",
		may: 5.2,
		oct: 9
	},
	{
		name: "潜江",
		may: 6.6,
		oct: 9
	},
	{
		name: "合肥",
		may: 4.3,
		oct: 10
	},
	{
		name: "黄商",
		may: 11.6,
		oct: 11.6
	},
	{
		name: "凌家塘",
		may: 5,
		oct: 12
	},
	{
		name: "马鞍山",
		may: 5.5,
		oct: 12
	}
];
var priceStats = {
	asOf: "2026-10-04",
	source: "农业农村部信息中心",
	n: 41,
	min: 2,
	max: 14.5,
	mean: 7.07,
	median: 6.5,
	p25: 5.5,
	p75: 8.8,
	pairedMayMedian: 4.98,
	pairedOctMedian: 6.35,
	pairedChangePct: 27.5,
	kunming: 7,
	xinfadi: 5.8,
	kunmingOct1: 6
};
/**
* 泸西综合实现价 = 公开产值 / 公开产量，不是当日地头牌价。
* 2020 年仅有面积与产值，不计算单价。
*/
var luxiScale = [
	{
		year: "2020",
		area: 10,
		output: null,
		value: 24,
		unitPrice: null
	},
	{
		year: "2021",
		area: 13,
		output: 113,
		value: 35,
		unitPrice: 3.1
	},
	{
		year: "2024",
		area: 13.5,
		output: 116,
		value: 35,
		unitPrice: 3.02
	},
	{
		year: "2025",
		area: 13.5,
		output: 116,
		value: 35,
		unitPrice: 3.02
	},
	{
		year: "2026",
		area: 13.5,
		output: 118,
		value: 36,
		unitPrice: 3.05
	}
];
/**
* 12 个月季节形态。指数 100 = 2026-10-04 全国中位数 6.50 元/公斤的位置。
* 只有 5 月、10 月被当年可比报价锚定，其余是农事规律推演。
*/
var seasonalIndex = [
	{
		month: "1月",
		index: 118,
		anchor: false,
		note: "春节前备货抬升"
	},
	{
		month: "2月",
		index: 128,
		anchor: false,
		note: "节日消费高峰"
	},
	{
		month: "3月",
		index: 100,
		anchor: false,
		note: "节后回落"
	},
	{
		month: "4月",
		index: 88,
		anchor: false,
		note: "春季供给恢复"
	},
	{
		month: "5月",
		index: 78,
		anchor: true,
		note: "2026-05-29 可比中位数锚定"
	},
	{
		month: "6月",
		index: 86,
		anchor: false,
		note: "热区开始掉产"
	},
	{
		month: "7月",
		index: 96,
		anchor: false,
		note: "低海拔难种，泸西补位"
	},
	{
		month: "8月",
		index: 106,
		anchor: false,
		note: "雨季干扰采收"
	},
	{
		month: "9月",
		index: 108,
		anchor: false,
		note: "雨歇、品质恢复"
	},
	{
		month: "10月",
		index: 100,
		anchor: true,
		note: "2026-10-04 中位数锚定"
	},
	{
		month: "11月",
		index: 103,
		anchor: false,
		note: "降温利品质，量仍足"
	},
	{
		month: "12月",
		index: 112,
		anchor: false,
		note: "年底餐饮备货"
	}
];
var forecast = [
	{
		label: "3天",
		low: 6.1,
		base: 6.5,
		high: 7,
		oLow: 2.7,
		oBase: 3,
		oHigh: 3.3,
		confidence: "较高",
		basis: "供给日发运稳定，未来三天无暴雨。"
	},
	{
		label: "1周",
		low: 6,
		base: 6.6,
		high: 7.3,
		oLow: 2.6,
		oBase: 3,
		oHigh: 3.4,
		confidence: "中高",
		basis: "11月1–2日小雨降温，影响物流多于产量。"
	},
	{
		label: "半月",
		low: 5.9,
		base: 6.7,
		high: 7.6,
		oLow: 2.6,
		oBase: 3.1,
		oHigh: 3.5,
		confidence: "中等",
		basis: "泸西周年供应压制上涨空间。"
	},
	{
		label: "1个月",
		low: 6,
		base: 7,
		high: 8.2,
		oLow: 2.7,
		oBase: 3.2,
		oHigh: 3.7,
		confidence: "中等",
		basis: "北方转冷，餐饮进入淡旺转换。"
	},
	{
		label: "2个月",
		low: 6.2,
		base: 7.4,
		high: 8.8,
		oLow: 2.8,
		oBase: 3.3,
		oHigh: 4,
		confidence: "偏低",
		basis: "年底备货，幅度取决于华东库存。"
	},
	{
		label: "3个月",
		low: 6.4,
		base: 8,
		high: 9.6,
		oLow: 2.9,
		oBase: 3.5,
		oHigh: 4.3,
		confidence: "偏低",
		basis: "2027-02-06 春节前窗口。悲观情景假设两广与泸西叠加上市。"
	}
];
/** Open-Meteo 再分析，网格点 24.53N, 103.77E，不是泸西国家站。 */
var climateMonths = [
	{
		month: "2025-10",
		precip: 79.4,
		tmax: 21.5,
		tmin: 13.9,
		rainDays: 25
	},
	{
		month: "2025-11",
		precip: 94.6,
		tmax: 16.6,
		tmin: 7.4,
		rainDays: 18
	},
	{
		month: "2025-12",
		precip: 8.7,
		tmax: 16.3,
		tmin: 6.2,
		rainDays: 12
	},
	{
		month: "2026-01",
		precip: 6.5,
		tmax: 15.8,
		tmin: 5.2,
		rainDays: 9
	},
	{
		month: "2026-02",
		precip: 3.8,
		tmax: 21.3,
		tmin: 8.7,
		rainDays: 7
	},
	{
		month: "2026-03",
		precip: 41.1,
		tmax: 21.9,
		tmin: 10.5,
		rainDays: 18
	},
	{
		month: "2026-04",
		precip: 48.9,
		tmax: 26.6,
		tmin: 13.9,
		rainDays: 16
	},
	{
		month: "2026-05",
		precip: 108,
		tmax: 24.9,
		tmin: 15.5,
		rainDays: 28
	},
	{
		month: "2026-06",
		precip: 261.7,
		tmax: 25.3,
		tmin: 17.5,
		rainDays: 29
	},
	{
		month: "2026-07",
		precip: 206,
		tmax: 25.4,
		tmin: 17.6,
		rainDays: 30
	},
	{
		month: "2026-08",
		precip: 194,
		tmax: 25.1,
		tmin: 17.1,
		rainDays: 30
	},
	{
		month: "2026-09",
		precip: 33.4,
		tmax: 25,
		tmin: 15.2,
		rainDays: 19
	},
	{
		month: "2026-10",
		precip: 56.9,
		tmax: 24.2,
		tmin: 14.5,
		rainDays: 19
	}
];
var timeline = [
	{
		when: "2025-12 至 2026-02",
		tag: "偏干",
		text: "三个月降水分别只有 8.7、6.5、3.8 毫米。气温温和、无霜。灌溉跟得上则品质偏好，病害压力低于雨季。"
	},
	{
		when: "2026-06 至 08",
		tag: "雨季",
		text: "合计降水约 662 毫米，几乎每天有雨。8 月 3 日网格降水量 25.2 毫米，是近 90 天唯一达到暴雨量级的日子。采收、洗葱和病害防控都更难。"
	},
	{
		when: "2026-09",
		tag: "转好",
		text: "降水降到 33 毫米，最高气温仍在 25°C 附近。雨歇窗口，利于拔葱和干葱加工。"
	},
	{
		when: "2026-10-11 至 17",
		tag: "全国周报",
		text: "中央气象台：云南中部等西南地区有 10–50 毫米降水；南方大部偏暖。不是泸西极端周。"
	},
	{
		when: "2026-10-26 起",
		tag: "本周",
		text: "未来十天最高多在 21–26°C。11 月 2 日最高只到约 16°C、最低约 10°C，是近期最凉的一天，仍高于霜冻线。"
	}
];
var varieties = [
	{
		name: "小香葱 / 细香葱",
		trait: "茎细、叶嫩、香味重，不长成大葱白。分株繁殖。",
		where: "云南、福建、两广、四川",
		luxi: "泸西绝对主栽，鲜食与调味工业都用它。"
	},
	{
		name: "分葱",
		trait: "丛生，一季可多次分株采收。",
		where: "南方菜区普遍",
		luxi: "当地一年 4–5 茬的种法就是分株，不是种子直播为主。"
	},
	{
		name: "四季葱",
		trait: "商品统称，强调周年可收，形态接近小香葱。",
		where: "南方批发市场常用名",
		luxi: "外销报价里经常与小香葱混称，对规格时要看葱白长度。"
	},
	{
		name: "红葱 / 火葱",
		trait: "夏季用鳞茎种植，香味冲，偏加工与调味。",
		where: "云南、广西种苗市场",
		luxi: "省地方标准允许鳞茎种植，但不是泸西鲜葱外销的主体。"
	},
	{
		name: "大葱",
		trait: "葱白长，北方炒菜用。和香葱不是一个商品。",
		where: "山东章丘、河北、河南",
		luxi: "不要用批发市场里的“葱”报价替代“小葱”。"
	}
];
var areas = [
	{
		place: "云南 · 泸西",
		role: "全国单品种植面积最大县",
		season: "周年，填补热区 6–10 月空档",
		note: "占云南香葱产量 60% 以上，日发运 2000 吨以上"
	},
	{
		place: "云南 · 建水、弥勒、丘北、玉溪",
		role: "滇南滇中补充基地",
		season: "周年，错峰",
		note: "与泸西共享南葱北运通道"
	},
	{
		place: "福建 · 漳州、福清一带",
		role: "东南冬春菜",
		season: "冬春",
		note: "热季让位给云贵高原"
	},
	{
		place: "广西 · 玉林等",
		role: "鲜葱与葱种",
		season: "偏冬春，种苗常年",
		note: "种苗贸易活跃，不等于鲜葱主产规模"
	},
	{
		place: "广东",
		role: "本地消费与北运补充",
		season: "冬春为主",
		note: "汕头 10 月批发价 4.80，偏低"
	},
	{
		place: "四川、重庆",
		role: "盆地鲜销",
		season: "春秋最佳",
		note: "夏季湿热，连作病害与泸西是同一类问题"
	},
	{
		place: "苏皖鄂赣",
		role: "沿江春秋菜",
		season: "春秋",
		note: "10 月黄商、鄂州、马鞍山、凌家塘报价显著偏高，先核对规格"
	},
	{
		place: "山东等地",
		role: "大葱，不是小香葱",
		season: "秋冬收获",
		note: "章丘大葱价格不能拿来判断泸西"
	}
];
var luxiFacts = [
	{
		k: "种植基地",
		v: "13–13.5 万亩",
		s: "2026-10 县农业农村局口径约 13 万亩；2025 年末多家央媒为 13.5 万亩"
	},
	{
		k: "复种",
		v: "约 45 万亩次",
		s: "一年 4–5 茬，常年有货"
	},
	{
		k: "产量",
		v: "约 118 万吨",
		s: "2026-10-10 报道；2024 年末为 116 万吨"
	},
	{
		k: "产值",
		v: "约 36 亿元",
		s: "2026 年口径；2021–2025 年多为 35 亿元"
	},
	{
		k: "综合实现价",
		v: "约 3.05 元/公斤",
		s: "36 亿元 / 118 万吨，含鲜销与加工，不是今日牌价"
	},
	{
		k: "日发运",
		v: ">2000 吨",
		s: "农民日报 / 农业农村部转载，2025-11"
	},
	{
		k: "种植户",
		v: "3000 户以上",
		s: "联盟覆盖种植、洗葱、制冰等主体"
	},
	{
		k: "就业",
		v: "5 万余人",
		s: "务工收入约 18 亿元（2023 年及后续报道沿用）"
	},
	{
		k: "冷链加工",
		v: "冷库约 160 座",
		s: "洗葱厂 33 家、402 条线；制冰 13 家；4 小时处理圈"
	},
	{
		k: "外销",
		v: "17 个省市区",
		s: "沪滇协作进上海；有出口与工业干葱订单"
	},
	{
		k: "标准",
		v: "DB53/T 1322-2024",
		s: "2025-01-09 实施；另有泸西小香葱生产规程"
	},
	{
		k: "主栽形态",
		v: "分株小香葱",
		s: "葱白紧实、香味浓；海拔差大，县城一带年均温约 15°C"
	}
];
var sources = [
	{
		name: "农业农村部信息中心 · 2026-10-04 全国主要批发市场小葱价格",
		detail: "41 个市场，元/公斤。本报批发截面的唯一完整来源。"
	},
	{
		name: "农业农村部信息中心 · 2026-05-29 与 2026-10-01 小葱报价",
		detail: "用于可比市场变化，不是完整月均价。"
	},
	{
		name: "农业农村部监测 · 农产品批发价格 200 指数",
		detail: "2026-10-23 为 111.58，28 种蔬菜均价 4.17 元/公斤。蔬菜大盘参照，不单列小葱。"
	},
	{
		name: "中央气象台 · 全国农业气象周报（2026-10-19）",
		detail: "10 月 11–17 日气温距平与降水。"
	},
	{
		name: "国家防灾减灾救灾委员会等 · 10 月自然灾害风险形势（2026-10-02）",
		detail: "洪涝、台风个数、干旱落区。云南南部降水偏多，干旱不在滇东南。"
	},
	{
		name: "Open-Meteo 再分析 · 24.53°N, 103.77°E",
		detail: "2025-10-01 至 2026-10-25 日值汇总。网格数据，不是泸西气象站观测。"
	},
	{
		name: "挪威气象局 Locationforecast 2.0",
		detail: "未来约 10 天。页面打开时会再拉一次；失败则用 2026-10-26 03:17 北京时间的快照。"
	},
	{
		name: "泸西产业口径",
		detail: "农民日报/农业农村部（2025-12）、上观新闻（2025-12）、中国产业经济信息网（2026-05）、泸西县政府（烘干车间、政协提案）、2026-10-10 县农业农村局负责人介绍（13 万亩、118 万吨、36 亿元）。"
	},
	{
		name: "DB53/T 1322-2024《香葱生产技术规程》",
		detail: "2024-10-09 发布，2025-01-09 实施。起草单位含泸西县农业农村和科学技术局。"
	}
];
var gaps = [
	"没有官方的小葱月度连续序列，因此不做 12 / 24 / 36 个月或 10 年的“伪折线”。五年图只画泸西产值÷产量，并标明是综合实现价。",
	"10 月 4 日之后的全国小葱截面没有检索到。10 月 23 日的蔬菜均价不能换算成香葱价。",
	"泸西当日地头收购牌价没有公开报价。3.05 元/公斤是年度产值与产量的商。",
	"零售价没有同步调查。经验上城市菜场零售常是批发价的 1.8–2.5 倍，只作数量级，不写入预测。",
	"15 天数值预报本次免费接口只稳定覆盖约 10 天，11–15 天不填数。"
];
var fallbackForecast = [
	{
		date: "2026-10-26",
		tMin: 15.3,
		tMax: 25.6,
		precipMm: 0,
		humidity: 79,
		wind: 4.1,
		symbol: "partlycloudy_day"
	},
	{
		date: "2026-10-27",
		tMin: 15.8,
		tMax: 20.8,
		precipMm: 3.3,
		humidity: 92,
		wind: 4.1,
		symbol: "rain"
	},
	{
		date: "2026-10-28",
		tMin: 14.8,
		tMax: 22.2,
		precipMm: .3,
		humidity: 82,
		wind: 5.1,
		symbol: "cloudy"
	},
	{
		date: "2026-10-29",
		tMin: 14.4,
		tMax: 21.1,
		precipMm: .7,
		humidity: 87,
		wind: 2.9,
		symbol: "cloudy"
	},
	{
		date: "2026-10-30",
		tMin: 14.7,
		tMax: 22.3,
		precipMm: .2,
		humidity: 82,
		wind: 4.2,
		symbol: "cloudy"
	},
	{
		date: "2026-10-31",
		tMin: 15.7,
		tMax: 25,
		precipMm: 0,
		humidity: 71,
		wind: 5.9,
		symbol: "fair_day"
	},
	{
		date: "2026-11-01",
		tMin: 15.6,
		tMax: 24.2,
		precipMm: 6.3,
		humidity: 85,
		wind: 4.3,
		symbol: "rain"
	},
	{
		date: "2026-11-02",
		tMin: 10.3,
		tMax: 15.9,
		precipMm: .3,
		humidity: 88,
		wind: 2.9,
		symbol: "cloudy"
	},
	{
		date: "2026-11-03",
		tMin: 9.6,
		tMax: 19.6,
		precipMm: .2,
		humidity: 84,
		wind: 4.7,
		symbol: "cloudy"
	},
	{
		date: "2026-11-04",
		tMin: 13,
		tMax: 14.2,
		precipMm: 0,
		humidity: 98,
		wind: 1.8,
		symbol: "partlycloudy_night"
	}
];
var SYMBOL_ZH = {
	partlycloudy_day: "多云",
	partlycloudy_night: "多云",
	rain: "雨",
	lightrain: "小雨",
	rainshowers_day: "阵雨",
	cloudy: "阴",
	fair_day: "晴",
	clearsky_day: "晴",
	clearsky_night: "晴"
};
function symbolLabel(code) {
	return SYMBOL_ZH[code.replace(/_polaris$/, "")] ?? "天气";
}
//#endregion
export { symbolLabel as _, forecast as a, luxiScale as c, priceStats as d, regionBars as f, summary as g, sources as h, fallbackForecast as i, markets as l, seasonalIndex as m, areas as n, gaps as o, risks as p, climateMonths as r, luxiFacts as s, REPORT as t, paired as u, timeline as v, varieties as y };
