// こういうAPIのエンドポイントを出したらこういうテストをするよというイメージ
// https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests
// バックエンドのAPIモックについて知見なさすぎるので教えてほしい😭
import superagent from 'superagent';
import { JSDOM } from 'jsdom';
import { is_have_selector } from '../scraping_timetable';

const is_api_request = async (url: string): Promise<boolean> => {
    return (await superagent.get(url)).statusCode == 200 ? true : false;
}
const dom = new JSDOM(`<p class="testclass"><a href="http://yuriacats.site"テスト</p>`).window.document;

test("is_have_selectorが正しく動くテスト",()=>{
   expect(is_have_selector(dom,"testclass"));
   expect(is_have_selector(dom,"nonclass")).not; 

});

test("APIのエンドポイントが正しいかのテスト", () => {
    const url = "https://www.google.co.jp/"; // urlを記入してコピーすれば200を返すテストができる
    is_api_request(url).then((result) => {
        expect(result).toBe(true);
    })
});
