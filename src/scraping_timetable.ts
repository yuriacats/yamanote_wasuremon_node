import superagent from 'superagent';
import { Station } from './yamanote_stations';

class screping_base {
    private url: string
    constructor(url: string) {
        this.url = url;
        this.getRawHtml();
    }
    async getRawHtml() {
        const result = await superagent.get(this.url);
        console.log(result.text)
    }
}
export type timetable_category = "weekday" | "saturday" | "holiday";

type station_timetable = {
    station: Station,
    timetable_category: [timetable_category],
}



const hogehuga = new screping_base("https://www.jreast-timetable.jp/2210/timetable/tt1039/1039110.html#time_7")
//TODO 山手線の一つの駅のスクレイピングを作れる様にする。
