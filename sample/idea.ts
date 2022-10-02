type date = { date: string }
/*
データ構造としての候補

平日・休日を分ける。
それぞれの駅ごとの時刻表データ（Raw用）をまとめる。
電車（始発から終着までのN週を１区切りとして）

*/
// 山手線固有の番号名。（内回り、外回りで別な列車として扱う）
type station = {
    name: string,
    prev: station,
    station_no: number,
    is_inside: boolean
}
// station __str__はnameを返す構造にしたい。(内回り外回り)

// 時刻表上の休日平日土曜日のカテゴライズ
type timetable_category = "weekday" | "saturday" | "holiday";
type time = {
    hour: number,
    minute: number
}

type train_loop = {
    start_station: station,
    timetable: [time]
    end_station: station,
    timetable_category: timetable_category
}

type station_timetable = {
    station: station,
    timetable_category: timetable_category,
}
