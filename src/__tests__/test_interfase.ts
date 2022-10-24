// こういうAPIのエンドポイントを出したらこういうテストをするよというイメージ
// https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests
// バックエンドのAPIモックについて知見なさすぎるので教えてほしい😭
import superagent from 'superagent';
import { JSDOM } from 'jsdom';
import { has_selector, extract_link } from '../scraping_timetable';

const is_api_request = async (url: string): Promise<boolean> => {
    return (await superagent.get(url)).statusCode == 200 ? true : false;
}
const dom = new JSDOM(`<p class="testclass"><a href="http://yuriacats.site">テスト</a></p>`).window.document;
const dom2 = new JSDOM(`<p class="testclass">テスト</p>`).window.document;

test("is_have_selectorが正しく動くテスト", () => {
    expect(has_selector(dom, "testclass"));
    expect(has_selector(dom, "nonclass")).not;

});
test("extract_linkが正しく動くテスト", () => {
    const target = dom.querySelector("testclass")
    if (target) {
        expect(extract_link(target));
    }
});

test("extract_linkがリンクないときに正しく動くテスト", () => {
    const target = dom2.querySelector("testclass")
    if (target) {
        expect(extract_link(target)).not;
    }
});
test("APIのエンドポイントが正しいかのテスト", () => {
    const url = "https://www.google.co.jp/"; // urlを記入してコピーすれば200を返すテストができる
    is_api_request(url).then((result) => {
        expect(result).toBe(true);
    })
});
