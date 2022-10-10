// git url
// https://gist.github.com/2e074f9c87459765c6ff3cba96d3b480

// superegent/jdomの使い方をざっくりと書き留めるサンプルコードです。

const only_one_tags_extract = (targetDom: Document, targetSelector: string): string => {
    const target_text = targetDom.querySelector(targetSelector)?.textContent
    // querySelectorはElementかNullを返す型なのでtextContentのプロパティを持ってたり持ってなかったりする。持ってない場合はNullが今回は返るはず。
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chainin

    return target_text ? target_text : "";
    // Null= false undifinde= falseなのでこれで一意にString型で帰せるので方チェックが通る。
}

