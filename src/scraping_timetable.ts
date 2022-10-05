import superagent from 'superagent';
import { Station } from './yamanote_stations';
import { JSDOM } from 'jsdom';

const getSelector = (doc: Document, selector: string) => {
    return doc.querySelector(selector)?.textContent
}

class screping_base {
    private url: string
    constructor(url: string) {
        this.url = url;
        this.getRawHtml();
    }
    async getRawHtml() {
        const result = await superagent.get(this.url);
        const dom = new JSDOM(result.text)
        const document = dom.window.document;
        console.log(getSelector(document, "h2"))

    }
}
export type timetable_category = "weekday" | "saturday" | "holiday";
// TODO 汎用的な時間型、拡張性のある汎用的なDate型を探す。（応用情報終わったら）
type time = {
    hour: number,
    minits: number
}
type date = {
    month: number,
    day: number,
    category: timetable_category
}

type station_timetable = {
    station: Station,
    timetable_category: [timetable_category],
    station_timetable: [time],
    date_of_expiry: date
}


const hogehuga = new screping_base("https://www.jreast-timetable.jp/2210/train/075/079411.html ")
//TODO 山手線の一つの駅のスクレイピングを作れる様にする。
