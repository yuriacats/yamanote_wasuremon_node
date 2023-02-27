type station_result = {
    station_name: string,
    station_arrival_time: string
}
const temporary_resalt: station_result = {
    station_name: "新宿駅",
    station_arrival_time: "13:00"
}
// todo 日付処理を考える
const yamanote_next_time = (target_station: string): station_result => temporary_resalt;
test("起点ページからForm動作で大崎駅の時刻表ページを表示する", () => {

});

test("その電車が次にどの駅に来るかを判定するテスト", () => {
//    expect(yamanote_next_time("新宿駅").station_name).toBe("新宿駅")
});

test("スクレイピングから環状線であることを判定するテスト", () => {

});

test("スクレイピングから環状線でないことを判定するテスト", () => {

});

test("", () => {

});