import superagent from 'superagent';

class hogehugaclass {
    private url: string
    constructor(url: string) {
        this.url = url;
        this.getRawHtml();
    }
    async getRawHtml() {
        const result = await superagent.get(this.url);
        console.log(result.text)
    }
}

const hogehuga = new hogehugaclass("https://qiita.com/Syoitu/items/6a136e3b8d2fb65e51a2")
// TODO 山手線の一つの駅のスクレイピングを作れる様にする。
