import superagent from 'superagent';
import { Station } from './yamanote_stations';
import { JSDOM } from 'jsdom';

const getSelector = (doc: Document, selector: string): string => {
    const t = doc.querySelector(selector)?.textContent
    return t ? t : "定義されていません";
    // errorハンドリングを考える
}

class screping_base {
    private url: string;
    documents;
    constructor(url: string) {
        this.url = url;
        this.documents = this.getRawHtml();
    }
    async getRawHtml(): Promise<string> {
        const result = await superagent.get(this.url);
        const dom = new JSDOM(result.text)
        const document = dom.window.document;
        return getSelector(document, "h2")
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


//TODO 山手線の一つの駅のスクレイピングを作れる様にする。

