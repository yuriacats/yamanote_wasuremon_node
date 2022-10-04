import { In_Tokyo, Out_Tokyo } from "../yamanote_stations";

test('tokyoの名前の存在のテスト', function () {
    expect(In_Tokyo.name).toBe("東京");
})

test('山手線内回りの整合性テスト', function () {
    expect(In_Tokyo.next.name).toBe("神田");
    expect(In_Tokyo.next.next.name).toBe("秋葉原");
    expect(In_Tokyo.next.next.next.name).toBe("御徒町");
    expect(In_Tokyo.next.next.next.next.name).toBe("上野")
    expect(In_Tokyo.next.next.next.next.next.name).toBe("鶯谷")
    expect(In_Tokyo.next.next.next.next.next.next.name).toBe("日暮里")
    expect(In_Tokyo.next.next.next.next.next.next.next.name).toBe("西日暮里")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.name).toBe("田端")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.name).toBe("駒込")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.name).toBe("巣鴨")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.name).toBe("大塚")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("池袋")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("目白")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("高田馬場")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("新大久保")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("新宿")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("代々木")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("原宿")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("渋谷")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("恵比寿")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("目黒")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("五反田")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("大崎")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("品川")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("高輪ゲートウェイ")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("田町")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("浜松町")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("新橋")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("有楽町")
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("東京")
})

test('山手線内回りのプロパティテスト', function () {
    expect(In_Tokyo.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
    expect(In_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(true)
})

test('山手線外回りの整合性テスト', function () {
    expect(Out_Tokyo.next.name).toBe("有楽町")
    expect(Out_Tokyo.next.next.name).toBe("新橋")
    expect(Out_Tokyo.next.next.next.name).toBe("浜松町")
    expect(Out_Tokyo.next.next.next.next.name).toBe("田町")
    expect(Out_Tokyo.next.next.next.next.next.name).toBe("高輪ゲートウェイ")
    expect(Out_Tokyo.next.next.next.next.next.next.name).toBe("品川")
    expect(Out_Tokyo.next.next.next.next.next.next.next.name).toBe("大崎")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.name).toBe("五反田")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.name).toBe("目黒")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.name).toBe("恵比寿")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.name).toBe("渋谷")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("原宿")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("代々木")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("新宿")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("新大久保")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("高田馬場")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("目白")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("池袋")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("大塚")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("巣鴨")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("駒込")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("田端")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("西日暮里")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("日暮里")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("鶯谷")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("上野")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("御徒町")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("秋葉原")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("神田")
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name).toBe("東京")
})

test('山手線外回りのプロパティテスト', function () {
    expect(Out_Tokyo.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
    expect(Out_Tokyo.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.is_inside).toBe(false)
})