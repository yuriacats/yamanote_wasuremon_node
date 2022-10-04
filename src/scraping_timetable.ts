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



const hogehuga = new screping_base("https://www.jreast-timetable.jp/2210/train/075/079411.html ")
//TODO 山手線の一つの駅のスクレイピングを作れる様にする。
//https://www.jreast-timetable.jp/2210/train/075/079411.html 
