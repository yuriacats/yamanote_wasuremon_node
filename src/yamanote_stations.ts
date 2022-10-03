class Station {
    // もっと良い書き方があるのだろうけどプロトタイプなのでこういう書き方にしてる。要リファクタ
    name: string;
    next: Station;
    is_inside: boolean;
    constructor(name: string, is_inside: boolean) {
        this.name = name;
        this.is_inside = is_inside;
        this.next = this
    }
}

export const In_Tokyo = new Station("東京", true);
export const In_Kanda = new Station("神田", true);
export const In_Akihabara = new Station("秋葉原", true);
export const In_Okachimachi = new Station("御徒町", true);
export const In_Ueno = new Station("上野", true);
export const In_Uguisudani = new Station("鶯谷", true);
export const In_Nippori = new Station("日暮里", true);
export const In_Nishi_Nippori = new Station("西日暮里", true);
export const In_Tabata = new Station("田端", true);
export const In_Komagome = new Station("駒込", true);
export const In_Sugamo = new Station("巣鴨", true);
export const In_Otsuka = new Station("大塚", true);
export const In_Ikebukuro = new Station("池袋", true);
export const In_Mejiro = new Station("目白", true);
export const In_Takadanobaba = new Station("高田馬場", true);
export const In_Shin_Okubo = new Station("新大久保", true);
export const In_Shinjuku = new Station("新宿", true);
export const In_Yoyogi = new Station("代々木", true);
export const In_Harajuku = new Station("原宿", true);
export const In_Shibuya = new Station("渋谷", true);
export const In_Ebisu = new Station("恵比寿", true);
export const In_Meguro = new Station("目黒", true);
export const In_Gotanda = new Station("五反田", true);
export const In_Osaki = new Station("大崎", true);
export const In_Shinagawa = new Station("品川", true);
export const In_Takanawa_Gateway = new Station("高輪ゲートウェイ", true);
export const In_Tamachi = new Station("田町", true);
export const In_Hamamatsucho = new Station("浜松町", true);
export const In_Shinbashi = new Station("新橋", true);
export const In_Yurakucho = new Station("有楽町", true);
export const Out_Tokyo = new Station("東京", true);
export const Out_Kanda = new Station("神田", false);
export const Out_Akihabara = new Station("秋葉原", false);
export const Out_Okachimachi = new Station("御徒町", false);
export const Out_Ueno = new Station("上野", false);
export const Out_Uguisudani = new Station("鶯谷", false);
export const Out_Nippori = new Station("日暮里", false);
export const Out_Nishi_Nippori = new Station("西日暮里", false);
export const Out_Tabata = new Station("田端", false);
export const Out_Komagome = new Station("駒込", false);
export const Out_Sugamo = new Station("巣鴨", false);
export const Out_Otsuka = new Station("大塚", false);
export const Out_Ikebukuro = new Station("池袋", false);
export const Out_Mejiro = new Station("目白", false);
export const Out_Takadanobaba = new Station("高田馬場", false);
export const Out_Shin_Okubo = new Station("新大久保", false);
export const Out_Shinjuku = new Station("新宿", false);
export const Out_Yoyogi = new Station("代々木", false);
export const Out_Harajuku = new Station("原宿", false);
export const Out_Shibuya = new Station("渋谷", false);
export const Out_Ebisu = new Station("恵比寿", false);
export const Out_Meguro = new Station("目黒", false);
export const Out_Gotanda = new Station("五反田", false);
export const Out_Osaki = new Station("大崎", false);
export const Out_Shinagawa = new Station("品川", false);
export const Out_Takanawa_Gateway = new Station("高輪ゲートウェイ", false);
export const Out_Tamachi = new Station("田町", false);
export const Out_Hamamatsucho = new Station("浜松町", false);
export const Out_Shinbashi = new Station("新橋", false);
export const Out_Yurakucho = new Station("有楽町", false);

In_Yurakucho.next = In_Tokyo;
Out_Yurakucho.next = Out_Shinbashi;

In_Shinbashi.next = In_Yurakucho;
Out_Shinbashi.next = Out_Hamamatsucho;

In_Hamamatsucho.next = In_Shinbashi;
Out_Hamamatsucho.next = Out_Tamachi;

In_Tamachi.next = In_Hamamatsucho;
Out_Tamachi.next = Out_Takanawa_Gateway;

In_Takanawa_Gateway.next = In_Tamachi;
Out_Takanawa_Gateway.next = Out_Shinagawa;

In_Shinagawa.next = In_Takanawa_Gateway;
Out_Shinagawa.next = Out_Osaki;

In_Osaki.next = In_Shinagawa;
Out_Osaki.next = Out_Gotanda;

In_Gotanda.next = In_Osaki;
Out_Gotanda.next = Out_Meguro;

In_Meguro.next = In_Gotanda;
Out_Meguro.next = Out_Ebisu;

In_Ebisu.next = In_Meguro;
Out_Ebisu.next = Out_Shibuya;

In_Shibuya.next = In_Ebisu;
Out_Shibuya.next = Out_Harajuku;

In_Harajuku.next = In_Shibuya;
Out_Harajuku.next = Out_Yoyogi;

In_Yoyogi.next = In_Harajuku;
Out_Yoyogi.next = Out_Shinjuku;

In_Shinjuku.next = In_Yoyogi;
Out_Shinjuku.next = Out_Shin_Okubo;

In_Shin_Okubo.next = In_Shinjuku;
Out_Shin_Okubo.next = Out_Takadanobaba;

In_Takadanobaba.next = In_Shin_Okubo;
Out_Takadanobaba.next = Out_Mejiro;

In_Mejiro.next = In_Takadanobaba;
Out_Mejiro.next = Out_Ikebukuro;

In_Ikebukuro.next = In_Mejiro;
Out_Ikebukuro.next = Out_Otsuka;

In_Otsuka.next = In_Ikebukuro;
Out_Otsuka.next = Out_Sugamo;

In_Sugamo.next = In_Otsuka;
Out_Sugamo.next = Out_Komagome;
In_Komagome.next = In_Sugamo;
Out_Komagome.next = Out_Tabata;

In_Tabata.next = In_Sugamo;
Out_Tabata.next = Out_Nishi_Nippori;

In_Nishi_Nippori.next = In_Tabata;
Out_Nishi_Nippori.next = Out_Nippori;

In_Nippori.next = In_Nishi_Nippori;
Out_Nippori.next = Out_Uguisudani;

In_Uguisudani.next = In_Nippori;
Out_Uguisudani.next = Out_Ueno;

In_Ueno.next = In_Uguisudani;
Out_Ueno.next = Out_Okachimachi;

In_Okachimachi.next = In_Ueno;
Out_Okachimachi.next = Out_Akihabara;

In_Akihabara.next = In_Okachimachi;
Out_Akihabara.next = Out_Kanda;

In_Kanda.next = In_Akihabara;
Out_Kanda.next = Out_Tokyo;

In_Tokyo.next = In_Kanda;
Out_Tokyo.next = Out_Yurakucho;
