const YamanoteList = [
    "神田",
    "秋葉原",
    "御徒町",
    "上野",
    "鶯谷",
    "日暮里",
    "西日暮里",
    "田端",
    "駒込",
    "巣鴨",
    "大塚",
    "池袋",
    "目白",
    "高田馬場",
    "新大久保",
    "新宿",
    "代々木",
    "原宿",
    "渋谷",
    "恵比寿",
    "目黒",
    "五反田",
    "大崎",
    "品川",
    "高輪ゲートウェイ",
    "田町",
    "浜松町",
    "新橋",
    "有楽町",
    "東京",
] as const

export type StationName = typeof YamanoteList[number]
export type tableCategory = "weekday" | "holiday";
export const Direction = {
    INNER: 'inner',
    OUTER: 'outer'
} as const
type Direction = typeof Direction[keyof typeof Direction];

export class Time {
    hour: number;
    minute: number;
    constructor(hour: number, minute: number) {
        //TODO バリデーションをする
        this.hour = hour;
        this.minute = minute;
    }
    // 0:00から何分経過したかを返すメソッド
    asMinutes = (): number => this.hour * 60 + this.minute;
    toString = (): string => `${this.hour}:${this.minute}`
}

export type StationTimetable = {
    station: StationName,
    direction: Direction,
    trainArrivals: [Train, Time]
}
export type Train = {
    arrivalTimes: { [key in StationName]: [Time] },
    direction: Direction,
    lastArrival: [StationName, Time]
}
