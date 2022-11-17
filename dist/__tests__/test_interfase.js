"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// こういうAPIのエンドポイントを出したらこういうテストをするよというイメージ
// https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests
// バックエンドのAPIモックについて知見なさすぎるので教えてほしい😭
const superagent_1 = __importDefault(require("superagent"));
const jsdom_1 = require("jsdom");
const scraping_timetable_1 = require("../scraping_timetable");
const is_api_request = async (url) => {
    return (await superagent_1.default.get(url)).statusCode == 200 ? true : false;
};
const dom = new jsdom_1.JSDOM(`<p class="testclass"><a href="http://yuriacats.site">テスト</a></p>`).window.document;
const dom2 = new jsdom_1.JSDOM(`<p class="testclass">テスト</p>`).window.document;
test("isHaveSelectorが正しく動くテスト", () => {
    expect((0, scraping_timetable_1.hasSelector)(dom, "testclass"));
    expect((0, scraping_timetable_1.hasSelector)(dom, "nonclass")).not;
});
test("extract_linkが正しく動くテスト", () => {
    const target = dom.querySelector("testclass");
    if (target) {
        expect((0, scraping_timetable_1.extractLink)(target));
    }
});
test("extract_linkがリンクないときに正しく動くテスト", () => {
    const target = dom2.querySelector("testclass");
    if (target) {
        expect((0, scraping_timetable_1.extractLink)(target)).not;
    }
});
test("APIのエンドポイントが正しいかのテスト", () => {
    const url = "https://www.google.co.jp/"; // urlを記入してコピーすれば200を返すテストができる
    is_api_request(url).then((result) => {
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=test_interfase.js.map