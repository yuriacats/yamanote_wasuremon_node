import superagent from 'superagent';
import { Station } from './yamanote_stations';
import { JSDOM } from 'jsdom';
import { Certificate } from 'crypto';

const is_have_selector = (doc: Document, selector: string): boolean => {
    const t = doc.querySelector(selector)?.textContent
    return t ? true : false;
}

class screping_base {
    private url: string;
    documents;
    constructor(url: string) {
        this.url = url;
        this.documents = this.getRawHtml();
    }
    async getRawHtml(): Promise<Document> {
        const result = await superagent.get(this.url);
        const dom = new JSDOM(result.text);
        const document = dom.window.document;
        return document;
    }
}

const check_loop = (target: Document): boolean => {
    console.log(is_have_selector(target, ".arrow_loop_next"))
    return false;
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
type station_loop = {
    start_station: Station,
    timetable_category: [timetable_category],
    station_timetable: [time],
    date_of_expiry: date
}


//TODO 山手線の一つの駅のスクレイピングを作れる様にする。

const huga = new screping_base("https://www.jreast-timetable.jp/2210/train/015/016491.html")
const hoge = new screping_base("https://www.jreast-timetable.jp/2210/train/020/020431.html")

hoge.documents.then((val) => check_loop(val));
