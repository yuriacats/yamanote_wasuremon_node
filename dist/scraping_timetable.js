"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractLink = exports.hasSelector = void 0;
const superagent_1 = __importDefault(require("superagent"));
const jsdom_1 = require("jsdom");
/**
 * Selector（JSDOM方式）が引数のDocumentにあるかどうかを判定する関数です
 * @param doc 対象のDocumentを記載。
 * @param selector hoge classが欲しい場合は".hoge" hoge idが欲しい場合は”#hoge”と記載
 * @return　入っている場合はTrueが返却されます。
 */
const hasSelector = (doc, selector) => { var _a; return Boolean((_a = doc.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.textContent); };
exports.hasSelector = hasSelector;
/**
 * その運行テーブルの電車が環状運転かを判定する関数
 * @param target 確認して欲しい山手線の運行テーブルページのDOMを
 * @returns 環状運転の場合はTrueが返却されます。
 */
const checkYamanoteLoop = (target) => (0, exports.hasSelector)(target, ".arrow_loop_next");
/**
 * ElementからリンクののURLを抽出する。
 * @param elm HREFプロパティが入っていることを期待しているElement
 * @returns URLがある場合はURLをない場合は空文字列を返します。
 */
const extractLink = (elm) => { var _a; return ((_a = elm.attributes.getNamedItem("href")) === null || _a === void 0 ? void 0 : _a.value) || ""; };
exports.extractLink = extractLink;
/**
 * スクレイピングしたいURLからDOM生成します。
 * @param url 処理したいWEBサイトのURL
 * @returns JSDOMで扱えるDOMが返却されます。
 */
const getScrepingBase = async (url) => {
    const result = await superagent_1.default.get(url);
    const dom = new jsdom_1.JSDOM(result.text);
    const document = dom.window.document;
    return document;
};
/**
 * サイトから特定のURLリンクの集合を生成する関数です。
 * @param url サイトマップのURL
 * @param before_url 相対パスの場合に使うURL
 * @param target_selector サイトマップのLinkが書かれているElementの要素
 * @returns
 */
const getSitemapToUrllists = async (url, before_url, target_selector) => {
    // 型情報を別な定義に括り出した方がいい？
    const dom = await getScrepingBase(url);
    const result = Array.from(dom.querySelectorAll(target_selector))
        .map((val) => {
        var _a;
        return (_a = (0, exports.extractLink)(val)) === null || _a === void 0 ? void 0 : _a.replace(/([../]*[..]{1,})/, before_url);
    });
    return new Set(result);
};
const getTrainTimetabeleUrls = (url) => getSitemapToUrllists(url, "https://www.jreast-timetable.jp/2210", ".time_link_black");
const osaki_out_list = "https://www.jreast-timetable.jp/2210/timetable/tt0319/0319040.html";
const shinagawa_out_list = "https://www.jreast-timetable.jp/2210/timetable/tt0788/0788050.html";
// osaki_out_listとshinagawa_out_listをあわせてひとつのURLとする関数を作る。
//# sourceMappingURL=scraping_timetable.js.map