type date = { date: string }
/*
データ構造としての候補

平日・休日を分ける。
それぞれの駅ごとの時刻表データ（Raw用）をまとめる。
電車（始発から終着までのN週を１区切りとして）

*/
type station = {
    name: string,
    prev: station
}
// station __str__はnameを返す構造

type train_loop = {
    start_station: station,
    end_station: station,

}
