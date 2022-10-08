// こういうAPIのエンドポイントを出したらこういうテストをするよというイメージ
// https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests
// バックエンドのAPIモックについて知見なさすぎるので教えてほしい😭
import superagent from 'superagent';

const is_api_request = async (url: string): Promise<boolean> => {
    return (await superagent.get(url)).statusCode == 200 ? true : false;
}

test("APIのエンドポイントが正しいかのテスト", () => {
    const url = "https://www.google.co.jp/"; // urlを記入してコピーすれば200を返すテストができる
    is_api_request(url).then((result) => {
        expect(result).toBe(true);
    })
});
