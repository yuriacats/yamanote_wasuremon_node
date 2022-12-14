"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Out_Harajuku = exports.Out_Yoyogi = exports.Out_Shinjuku = exports.Out_Shin_Okubo = exports.Out_Takadanobaba = exports.Out_Mejiro = exports.Out_Ikebukuro = exports.Out_Otsuka = exports.Out_Sugamo = exports.Out_Komagome = exports.Out_Tabata = exports.Out_Nishi_Nippori = exports.Out_Nippori = exports.Out_Uguisudani = exports.Out_Ueno = exports.Out_Okachimachi = exports.Out_Akihabara = exports.Out_Kanda = exports.Out_Tokyo = exports.In_Yurakucho = exports.In_Shinbashi = exports.In_Hamamatsucho = exports.In_Tamachi = exports.In_Takanawa_Gateway = exports.In_Shinagawa = exports.In_Osaki = exports.In_Gotanda = exports.In_Meguro = exports.In_Ebisu = exports.In_Shibuya = exports.In_Harajuku = exports.In_Yoyogi = exports.In_Shinjuku = exports.In_Shin_Okubo = exports.In_Takadanobaba = exports.In_Mejiro = exports.In_Ikebukuro = exports.In_Otsuka = exports.In_Sugamo = exports.In_Komagome = exports.In_Tabata = exports.In_Nishi_Nippori = exports.In_Nippori = exports.In_Uguisudani = exports.In_Ueno = exports.In_Okachimachi = exports.In_Akihabara = exports.In_Kanda = exports.In_Tokyo = exports.Station = void 0;
exports.Out_Yurakucho = exports.Out_Shinbashi = exports.Out_Hamamatsucho = exports.Out_Tamachi = exports.Out_Takanawa_Gateway = exports.Out_Shinagawa = exports.Out_Osaki = exports.Out_Gotanda = exports.Out_Meguro = exports.Out_Ebisu = exports.Out_Shibuya = void 0;
class Station {
    constructor(name, is_inside) {
        this.name = name;
        this.is_inside = is_inside;
        this.next = this;
    }
}
exports.Station = Station;
exports.In_Tokyo = new Station("東京", true);
exports.In_Kanda = new Station("神田", true);
exports.In_Akihabara = new Station("秋葉原", true);
exports.In_Okachimachi = new Station("御徒町", true);
exports.In_Ueno = new Station("上野", true);
exports.In_Uguisudani = new Station("鶯谷", true);
exports.In_Nippori = new Station("日暮里", true);
exports.In_Nishi_Nippori = new Station("西日暮里", true);
exports.In_Tabata = new Station("田端", true);
exports.In_Komagome = new Station("駒込", true);
exports.In_Sugamo = new Station("巣鴨", true);
exports.In_Otsuka = new Station("大塚", true);
exports.In_Ikebukuro = new Station("池袋", true);
exports.In_Mejiro = new Station("目白", true);
exports.In_Takadanobaba = new Station("高田馬場", true);
exports.In_Shin_Okubo = new Station("新大久保", true);
exports.In_Shinjuku = new Station("新宿", true);
exports.In_Yoyogi = new Station("代々木", true);
exports.In_Harajuku = new Station("原宿", true);
exports.In_Shibuya = new Station("渋谷", true);
exports.In_Ebisu = new Station("恵比寿", true);
exports.In_Meguro = new Station("目黒", true);
exports.In_Gotanda = new Station("五反田", true);
exports.In_Osaki = new Station("大崎", true);
exports.In_Shinagawa = new Station("品川", true);
exports.In_Takanawa_Gateway = new Station("高輪ゲートウェイ", true);
exports.In_Tamachi = new Station("田町", true);
exports.In_Hamamatsucho = new Station("浜松町", true);
exports.In_Shinbashi = new Station("新橋", true);
exports.In_Yurakucho = new Station("有楽町", true);
exports.Out_Tokyo = new Station("東京", false);
exports.Out_Kanda = new Station("神田", false);
exports.Out_Akihabara = new Station("秋葉原", false);
exports.Out_Okachimachi = new Station("御徒町", false);
exports.Out_Ueno = new Station("上野", false);
exports.Out_Uguisudani = new Station("鶯谷", false);
exports.Out_Nippori = new Station("日暮里", false);
exports.Out_Nishi_Nippori = new Station("西日暮里", false);
exports.Out_Tabata = new Station("田端", false);
exports.Out_Komagome = new Station("駒込", false);
exports.Out_Sugamo = new Station("巣鴨", false);
exports.Out_Otsuka = new Station("大塚", false);
exports.Out_Ikebukuro = new Station("池袋", false);
exports.Out_Mejiro = new Station("目白", false);
exports.Out_Takadanobaba = new Station("高田馬場", false);
exports.Out_Shin_Okubo = new Station("新大久保", false);
exports.Out_Shinjuku = new Station("新宿", false);
exports.Out_Yoyogi = new Station("代々木", false);
exports.Out_Harajuku = new Station("原宿", false);
exports.Out_Shibuya = new Station("渋谷", false);
exports.Out_Ebisu = new Station("恵比寿", false);
exports.Out_Meguro = new Station("目黒", false);
exports.Out_Gotanda = new Station("五反田", false);
exports.Out_Osaki = new Station("大崎", false);
exports.Out_Shinagawa = new Station("品川", false);
exports.Out_Takanawa_Gateway = new Station("高輪ゲートウェイ", false);
exports.Out_Tamachi = new Station("田町", false);
exports.Out_Hamamatsucho = new Station("浜松町", false);
exports.Out_Shinbashi = new Station("新橋", false);
exports.Out_Yurakucho = new Station("有楽町", false);
exports.In_Yurakucho.next = exports.In_Tokyo;
exports.Out_Yurakucho.next = exports.Out_Shinbashi;
exports.In_Shinbashi.next = exports.In_Yurakucho;
exports.Out_Shinbashi.next = exports.Out_Hamamatsucho;
exports.In_Hamamatsucho.next = exports.In_Shinbashi;
exports.Out_Hamamatsucho.next = exports.Out_Tamachi;
exports.In_Tamachi.next = exports.In_Hamamatsucho;
exports.Out_Tamachi.next = exports.Out_Takanawa_Gateway;
exports.In_Takanawa_Gateway.next = exports.In_Tamachi;
exports.Out_Takanawa_Gateway.next = exports.Out_Shinagawa;
exports.In_Shinagawa.next = exports.In_Takanawa_Gateway;
exports.Out_Shinagawa.next = exports.Out_Osaki;
exports.In_Osaki.next = exports.In_Shinagawa;
exports.Out_Osaki.next = exports.Out_Gotanda;
exports.In_Gotanda.next = exports.In_Osaki;
exports.Out_Gotanda.next = exports.Out_Meguro;
exports.In_Meguro.next = exports.In_Gotanda;
exports.Out_Meguro.next = exports.Out_Ebisu;
exports.In_Ebisu.next = exports.In_Meguro;
exports.Out_Ebisu.next = exports.Out_Shibuya;
exports.In_Shibuya.next = exports.In_Ebisu;
exports.Out_Shibuya.next = exports.Out_Harajuku;
exports.In_Harajuku.next = exports.In_Shibuya;
exports.Out_Harajuku.next = exports.Out_Yoyogi;
exports.In_Yoyogi.next = exports.In_Harajuku;
exports.Out_Yoyogi.next = exports.Out_Shinjuku;
exports.In_Shinjuku.next = exports.In_Yoyogi;
exports.Out_Shinjuku.next = exports.Out_Shin_Okubo;
exports.In_Shin_Okubo.next = exports.In_Shinjuku;
exports.Out_Shin_Okubo.next = exports.Out_Takadanobaba;
exports.In_Takadanobaba.next = exports.In_Shin_Okubo;
exports.Out_Takadanobaba.next = exports.Out_Mejiro;
exports.In_Mejiro.next = exports.In_Takadanobaba;
exports.Out_Mejiro.next = exports.Out_Ikebukuro;
exports.In_Ikebukuro.next = exports.In_Mejiro;
exports.Out_Ikebukuro.next = exports.Out_Otsuka;
exports.In_Otsuka.next = exports.In_Ikebukuro;
exports.Out_Otsuka.next = exports.Out_Sugamo;
exports.In_Sugamo.next = exports.In_Otsuka;
exports.Out_Sugamo.next = exports.Out_Komagome;
exports.In_Komagome.next = exports.In_Sugamo;
exports.Out_Komagome.next = exports.Out_Tabata;
exports.In_Tabata.next = exports.In_Komagome;
exports.Out_Tabata.next = exports.Out_Nishi_Nippori;
exports.In_Nishi_Nippori.next = exports.In_Tabata;
exports.Out_Nishi_Nippori.next = exports.Out_Nippori;
exports.In_Nippori.next = exports.In_Nishi_Nippori;
exports.Out_Nippori.next = exports.Out_Uguisudani;
exports.In_Uguisudani.next = exports.In_Nippori;
exports.Out_Uguisudani.next = exports.Out_Ueno;
exports.In_Ueno.next = exports.In_Uguisudani;
exports.Out_Ueno.next = exports.Out_Okachimachi;
exports.In_Okachimachi.next = exports.In_Ueno;
exports.Out_Okachimachi.next = exports.Out_Akihabara;
exports.In_Akihabara.next = exports.In_Okachimachi;
exports.Out_Akihabara.next = exports.Out_Kanda;
exports.In_Kanda.next = exports.In_Akihabara;
exports.Out_Kanda.next = exports.Out_Tokyo;
exports.In_Tokyo.next = exports.In_Kanda;
exports.Out_Tokyo.next = exports.Out_Yurakucho;
//# sourceMappingURL=yamanote_stations.js.map