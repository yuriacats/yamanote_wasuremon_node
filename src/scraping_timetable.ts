import superagent from 'superagent';
import { JSDOM } from 'jsdom';
import { Time } from './entities';

/**
 * Selector（JSDOM方式）が引数のDocumentにあるかどうかを判定する関数です
 * @param doc 対象のDocumentを記載。
 * @param selector hoge classが欲しい場合は".hoge" hoge idが欲しい場合は”#hoge”と記載
 * @return　入っている場合はTrueが返却されます。
 */
export const hasSelector = (doc: Document, selector: string): boolean =>
    Boolean(doc.querySelector(selector)?.textContent)

/**
 * その運行テーブルの電車が環状運転かを判定する関数
 * @param target 確認して欲しい山手線の運行テーブルページのDOMを
 * @returns 環状運転の場合はTrueが返却されます。
 */
const checkYamanoteLoop = (target: Document): boolean => hasSelector(target, ".arrow_loop_next")

/**
 * ElementからリンクののURLを抽出する。
 * @param elm HREFプロパティが入っていることを期待しているElement
 * @returns URLがある場合はURLをない場合は空文字列を返します。
 */
export const extractLink = (elm: Element): string => elm.attributes.getNamedItem("href")?.value || "";

/**
 * スクレイピングしたいURLからDOM生成します。
 * @param url 処理したいWEBサイトのURL
 * @returns JSDOMで扱えるDOMが返却されます。
 */
const getScrepingBase = async (url: string): Promise<Document> => {
    const result = await superagent.get(url);
    const dom = new JSDOM(result.text);
    const document = dom.window.document;
    return document;
}

/**
 * サイトから特定のURLリンクの集合を生成する関数です。
 * @param url サイトマップのURL
 * @param before_url 相対パスの場合に使うURL
 * @param target_selector サイトマップのLinkが書かれているElementの要素
 * @returns 
 */
const getSitemapToUrllists = async (
    url: string,
    before_url: string,
    target_selector: string
): Promise<Set<string>> => {
    // 型情報を別な定義に括り出した方がいい？
    const dom: Document = await getScrepingBase(url)
    const result: Array<string> = Array.from(dom.querySelectorAll(target_selector))
        .map((val) => {
            return extractLink(val)?.replace(/([../]*[..]{1,})/, before_url)
        })
    return new Set(result)
}


const getTrainTimetabeleUrls = (url: string) => getSitemapToUrllists(
    url,
    "https://www.jreast-timetable.jp/2210",
    ".time_link_black")

//TODO 山手線の一つの駅のスクレイピングを作れる様にする。

// data-misk 大崎始発の場合に着く
// data-dest 最終周の場合につく
// 外回りスクレイピングするべきはこれで　https://www.jreast-timetable.jp/2210/timetable/tt0319/0319040.html
// スクレイピング中　301Gなどの下２桁　大崎の到着時刻終了フラグをもつ
// 以下のType型の様なデータ構造で 
type train_loop_ichizi = {
    train_id: number,
    train_arrival_time: Time,
    loop_flag: boolean,
    start_Osaki: boolean
}

const osaki_out_list = "https://www.jreast-timetable.jp/2302/train/010/014231.html"
const shinagawa_out_list = "https://www.jreast-timetable.jp/2210/timetable/tt0788/0788050.html"
// osaki_out_listとshinagawa_out_listをあわせてひとつのURLとする関数を作る。

getScrepingBase(osaki_out_list).then((dom)=> {
    dom.querySelectorAll("tr.time")
    //array.prototype.findメソッドを活用して環状線と書かれている部分よりも上側の配列のみを対象とする。
    .forEach((q)=>{
        const retral = /発.*/i
        const baseText = q.textContent?.replace(/\r?\n/g, '').replace(retral,'');
        console.log(baseText);
        console.log("-----");
    }
)})

