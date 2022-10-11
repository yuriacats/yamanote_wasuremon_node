import superagent from 'superagent';
import { Station } from './yamanote_stations';
import { JSDOM } from 'jsdom';
import { callbackify } from 'util';

const is_have_selector = (doc: Document, selector: string): boolean => {
    const t = doc.querySelector(selector)?.textContent
    return t ? true : false;
}

const check_loop = (target: Document): boolean => is_have_selector(target, ".arrow_loop_next")


const extract_href = (elm: Element): string => {
    const attrList: NamedNodeMap = elm.attributes;
    const res: string = attrList.getNamedItem("href")?.value || "";
    return res
}


const get_screping_base = async (url: string): Promise<Document> => {
    const result = await superagent.get(url);
    const dom = new JSDOM(result.text);
    const document = dom.window.document;
    return document;
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

// data-misk 大崎始発の場合に着く
// data-dest 最終周の場合につく
// 外回りスクレイピングするべきはこれで　https://www.jreast-timetable.jp/2210/timetable/tt0319/0319040.html
// スクレイピング中　301Gなどの下２桁　大崎の到着時刻終了フラグをもつ
// 以下のType型の様なデータ構造で 
type train_loop_ichizi = {
    train_id: number,
    train_arrival_time: time,
    loop_flag: boolean,
    start_Osaki: boolean
}
// データ型にしていくタイムテーブルを作成
const before_url = "https://www.jreast-timetable.jp/2210"
const osaki_out_list = get_screping_base("https://www.jreast-timetable.jp/2210/timetable/tt0319/0319040.html")
const train_list: Set<string> = new Set();
osaki_out_list.then((dom) => {
    dom.querySelectorAll(".time_link_black")
        .forEach((val) => {
            train_list.add(extract_href(val)?.replace("../..", before_url))
        })
});
