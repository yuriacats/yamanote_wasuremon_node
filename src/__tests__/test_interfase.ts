// こういうAPIのエンドポイントを出したらこういうテストをするよというイメージ
// https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests
// バックエンドのAPIモックについて知見なさすぎるので教えてほしい😭
import superagent from 'superagent';
import { JSDOM } from 'jsdom';
import { hasSelector, extractLink } from '../scraping_timetable';

const is_api_request = async (url: string): Promise<boolean> => {
    return (await superagent.get(url)).statusCode == 200 ? true : false;
}
const dom = new JSDOM(`<p class="testclass"><a href="http://yuriacats.site">テスト</a></p>`).window.document;
const dom2 = new JSDOM(`<p class="testclass">テスト</p>`).window.document;

test("isHaveSelectorが正しく動くテスト", () => {
    expect(hasSelector(dom, "testclass"));
    expect(hasSelector(dom, "nonclass")).not;

});
test("extract_linkが正しく動くテスト", () => {
    const target = dom.querySelector("testclass")
    if (target) {
        expect(extractLink(target));
    }
});

test("extract_linkがリンクないときに正しく動くテスト", () => {
    const target = dom2.querySelector("testclass")
    if (target) {
        expect(extractLink(target)).not;
    }
});
test("APIのエンドポイントが正しいかのテスト", () => {
    const url = "https://www.google.co.jp/"; // urlを記入してコピーすれば200を返すテストができる
    is_api_request(url).then((result) => {
        expect(result).toBe(true);
    })
});
