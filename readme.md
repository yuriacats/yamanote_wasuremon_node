

## ideagist url
How to use
https://cli.github.com/manual/gh_gist

```
gh gist edit {<id> | <url>} [<filename>] [flags]
```

https://gist.github.com/yuriacats/8f63b18138d533230bbe1b9cd042880d
データ構造を考慮したい時用のIdeaメモ

```
gh gist edit 8f63b18138d533230bbe1b9cd042880d idea.ts 
```

# ユースケース

- 山手線の車内に忘れ物をしたことに降りた後に気がついたとき
（- 山手線で待ち合わせをするときその電車が何駅に何時に着くのかを調べる）

機能：
降りた時間から直前3つの電車がまたその駅に何時に戻ってくるのか。戻ってこない場合は終点駅に何時に到着するかを返す

WEBアプリとして提供する。
- API
- フロント
これを別で作成し、運用する。
月１回Cronをして時刻表を取得　→　最新の時刻表を反映

フレームワークはExpressで実装する。

コンテナで作って、そこにURLやAPIのルーティングはAPIGateway
https://aws.amazon.com/jp/getting-started/guides/deploy-webapp-ecs/module-one/

フロントは別なRepoで作成（vercel、Pagesなど）


## 外部仕様

URL
```
GET ://yamanote.wasuremon.oo/v1/out/shinjuku?arrivalTime=2000
/out/ {out,in} 弾く　４０４
out/{駅名} 弾く　４０４
?arrivalTime 降りた時間
?limit いくつ候補を出すか（デフォルト：３）
```

返り値
```
{
status: 200,
message:{
    targetStation: "新宿",
    arrivalTrains: [
        {
            arrivelStation: "新宿",
            arrivelTime: "21:04",
        },
        {
            arrivelStation: "新宿",
            arrivelTime: "20:59",
        },
        {
            arrivelStation: "新宿",
            arrivelTime: "20:55",
        },
    ]
    }
}
```




