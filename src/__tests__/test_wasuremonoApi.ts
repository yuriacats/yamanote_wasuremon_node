import { StationName, Time } from "../entities";

interface TrainArrival {
    arrivelStation: StationName;
    arrivelTime: string;
}
interface TrainArrivals {
    targetStation: StationName;
    arrivalTrains: TrainArrival[];
}

/**
 * arrivalStation: 該当時間の駅もしくはその電車の終着駅
 * arrivalTime: 該当駅に着いた時間 
 * targetStation: 最初に選択した駅名
 */
const mockShinjukuAt8: TrainArrivals = {
    targetStation: "新宿",
    arrivalTrains: [
        {
            arrivelStation: "新宿",
            arrivelTime: "21:04",
        },
        {
            arrivelStation: "新宿",
            arrivelTime: "20:59",
        },
        {
            arrivelStation: "新宿",
            arrivelTime: "20:55",
        },
    ]
}

/**
 * 
 * @param targetStarion 入力された駅名を書きます
 * @param targetTime 入力された時間を書きます
 * @returns 入力された駅を発車した前3つの電車の次のこの駅への到着予定時刻か終着駅の時刻を返します。
 */
const mainAPI = (targetStarion: string, targetTime: string): TrainArrivals => {
    return mockShinjukuAt8
}

test("新宿駅8時に到着と書いたケースのAPI想定", () => {
    mainAPI("新宿", "8:00")
})
