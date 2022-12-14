import { Time } from "../entities";

test('Timeが文字列に変換できる', () => {
    const time = new Time(8, 20);
    expect(time.toString()).toEqual("8:20")
});
