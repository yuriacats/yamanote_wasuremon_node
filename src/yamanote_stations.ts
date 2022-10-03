class Station {
    name: string;
    next: Station;
    is_inside: boolean;
}

export const In_Tokyo = new Station;
export const In_Kanda = new Station;
export const In_Akihabara = new Station;
export const In_Okachimachi = new Station;
export const In_Ueno = new Station;
export const In_Uguisudani = new Station;
export const In_Nippori = new Station;
export const In_Nishi_Nippori = new Station;
export const In_Tabata = new Station;
export const In_Komagome = new Station;
export const In_Sugamo = new Station;
export const In_Otsuka = new Station;
export const In_Ikebukuro = new Station;
export const In_Mejiro = new Station;
export const In_Takadanobaba = new Station;
export const In_Shin_Okubo = new Station;
export const In_Shinjuku = new Station;
export const In_Yoyogi = new Station;
export const In_Harajuku = new Station;
export const In_Shibuya = new Station;
export const In_Ebisu = new Station;
export const In_Meguro = new Station;
export const In_Gotanda = new Station;
export const In_Osaki = new Station;
export const In_Shinagawa = new Station;
export const In_Takanawa_Gateway = new Station;
export const In_Tamachi = new Station;
export const In_Hamamatsucho = new Station;
export const In_Shinbashi = new Station;
export const In_Yurakucho = new Station;
export const Out_Tokyo = new Station;
export const Out_Kanda = new Station;
export const Out_Akihabara = new Station;
export const Out_Okachimachi = new Station;
export const Out_Ueno = new Station;
export const Out_Uguisudani = new Station;
export const Out_Nippori = new Station;
export const Out_Nishi_Nippori = new Station;
export const Out_Tabata = new Station;
export const Out_Komagome = new Station;
export const Out_Sugamo = new Station;
export const Out_Otsuka = new Station;
export const Out_Ikebukuro = new Station;
export const Out_Mejiro = new Station;
export const Out_Takadanobaba = new Station;
export const Out_Shin_Okubo = new Station;
export const Out_Shinjuku = new Station;
export const Out_Yoyogi = new Station;
export const Out_Harajuku = new Station;
export const Out_Shibuya = new Station;
export const Out_Ebisu = new Station;
export const Out_Meguro = new Station;
export const Out_Gotanda = new Station;
export const Out_Osaki = new Station;
export const Out_Shinagawa = new Station;
export const Out_Takanawa_Gateway = new Station;
export const Out_Tamachi = new Station;
export const Out_Hamamatsucho = new Station;
export const Out_Shinbashi = new Station;
export const Out_Yurakucho = new Station;

In_Yurakucho.name = "有楽町";
In_Yurakucho.next = In_Tokyo;
In_Yurakucho.is_inside = true;

Out_Yurakucho.name = "有楽町";
Out_Yurakucho.next = Out_Shinbashi;
Out_Yurakucho.is_inside = false;

In_Shinbashi.name = "新橋";
In_Shinbashi.next = In_Yurakucho;
In_Yurakucho.is_inside = true;

Out_Shinbashi.name = "新橋";
Out_Shinbashi.next = Out_Hamamatsucho;
Out_Yurakucho.is_inside = false;

In_Hamamatsucho.name = "浜松町";
In_Hamamatsucho.next = In_Shinbashi;
In_Hamamatsucho.is_inside = true;

Out_Hamamatsucho.name = "浜松町";
Out_Hamamatsucho.next = Out_Tamachi;
Out_Hamamatsucho.is_inside = false;

In_Tamachi.name = "田町";
In_Tamachi.next = In_Hamamatsucho;
In_Tamachi.is_inside = true;

Out_Tamachi.name = "田町";
Out_Tamachi.next = Out_Takanawa_Gateway;
Out_Tamachi.is_inside = true;

In_Takanawa_Gateway.name = "高輪ゲートウェイ";
In_Takanawa_Gateway.next = In_Tamachi;
In_Takanawa_Gateway.is_inside = true;

Out_Takanawa_Gateway.name = "高輪ゲートウェイ";
Out_Takanawa_Gateway.next = Out_Shinagawa;
Out_Takanawa_Gateway.is_inside = true;

In_Shinagawa.name = "品川";
In_Shinagawa.next = In_Takanawa_Gateway;
In_Shinagawa.is_inside = true;

Out_Shinagawa.name = "品川";
Out_Shinagawa.next = Out_Osaki;
Out_Shinagawa.is_inside = false;

In_Osaki.name = "大崎";
In_Osaki.next = In_Shinagawa;
In_Osaki.is_inside = true;

Out_Osaki.name = "大崎";
Out_Osaki.next = Out_Gotanda;
Out_Osaki.is_inside = false;

In_Gotanda.name = "五反田";
In_Gotanda.next = In_Osaki;
In_Gotanda.is_inside = true;

Out_Gotanda.name = "五反田";
Out_Gotanda.next = Out_Meguro;
Out_Gotanda.is_inside = false;

In_Meguro.name = "目黒";
In_Meguro.next = In_Gotanda;
In_Meguro.is_inside = true;

Out_Meguro.name = "目黒";
Out_Meguro.next = Out_Ebisu;
Out_Meguro.is_inside = false;

In_Ebisu.name = "恵比寿";
In_Ebisu.next = In_Meguro;
In_Ebisu.is_inside = true;

Out_Ebisu.name = "恵比寿";
Out_Ebisu.next = Out_Shibuya;
Out_Ebisu.is_inside = false;

In_Shibuya.name = "渋谷";
In_Shibuya.next = In_Ebisu;
In_Shibuya.is_inside = true;

Out_Shibuya.name = "渋谷";
Out_Shibuya.next = Out_Harajuku;
Out_Shibuya.is_inside = false;

In_Harajuku.name = "原宿";
In_Harajuku.next = In_Shibuya;
In_Harajuku.is_inside = true;

Out_Harajuku.name = "原宿";
Out_Harajuku.next = Out_Yoyogi;
Out_Harajuku.is_inside = false;

In_Yoyogi.name = "代々木";
In_Yoyogi.next = In_Harajuku;
In_Yoyogi.is_inside = false;

Out_Yoyogi.name = "代々木";
Out_Yoyogi.next = Out_Shinjuku;
Out_Yoyogi.is_inside = false;

In_Shinjuku.name = "新宿";
In_Shinjuku.next = In_Yoyogi;
In_Shinjuku.is_inside = true;

Out_Shinjuku.name = "新宿";
Out_Shinjuku.next = Out_Shin_Okubo;
Out_Shinjuku.is_inside = false;

In_Shin_Okubo.name = "新大久保";
In_Shin_Okubo.next = In_Shinjuku;
In_Shin_Okubo.is_inside = true;

Out_Shin_Okubo.name = "新大久保";
Out_Shin_Okubo.next = Out_Takadanobaba;
Out_Shin_Okubo.is_inside = false;

In_Takadanobaba.name = "高田馬場";
In_Takadanobaba.next = In_Shin_Okubo;
In_Takadanobaba.is_inside = true;

Out_Takadanobaba.name = "高田馬場";
Out_Takadanobaba.next = Out_Mejiro;
Out_Takadanobaba.is_inside = false;

In_Mejiro.name = "目白";
In_Mejiro.next = In_Takadanobaba;
In_Mejiro.is_inside = true;

Out_Mejiro.name = "目白";
Out_Mejiro.next = Out_Ikebukuro;
Out_Mejiro.is_inside = false;

In_Ikebukuro.name = "池袋";
In_Ikebukuro.next = In_Mejiro;
In_Ikebukuro.is_inside = true;

Out_Ikebukuro.name = "池袋";
Out_Ikebukuro.next = Out_Otsuka;
Out_Ikebukuro.is_inside = false;

In_Otsuka.name = "大塚";
In_Otsuka.next = In_Ikebukuro;
In_Otsuka.is_inside = true;

Out_Otsuka.name = "大塚";
Out_Otsuka.next = Out_Sugamo;
Out_Otsuka.is_inside = false;

In_Sugamo.name = "巣鴨";
In_Sugamo.next = In_Otsuka;
In_Sugamo.is_inside = true;

Out_Sugamo.name = "巣鴨";
Out_Sugamo.next = Out_Komagome;
Out_Sugamo.is_inside = false;

In_Komagome.name = "駒込";
In_Komagome.next = In_Sugamo;
In_Komagome.is_inside = true;

Out_Komagome.name = "駒込";
Out_Komagome.next = Out_Tabata;
Out_Komagome.is_inside = false;

In_Tabata.name = "田端";
In_Tabata.next = In_Sugamo;
In_Tabata.is_inside = true;

Out_Tabata.name = "田端";
Out_Tabata.next = Out_Nishi_Nippori;
Out_Tabata.is_inside = false;

In_Nishi_Nippori.name = "西日暮里";
In_Nishi_Nippori.next = In_Tabata;
In_Nishi_Nippori.is_inside = true;

Out_Nishi_Nippori.name = "西日暮里";
Out_Nishi_Nippori.next = Out_Nippori;
Out_Nishi_Nippori.is_inside = false;

In_Nippori.name = "日暮里"
In_Nippori.next = In_Nishi_Nippori;
In_Nippori.is_inside = true;

Out_Nippori.name = "日暮里"
Out_Nippori.next = Out_Uguisudani;
Out_Nippori.is_inside = false;

In_Uguisudani.name = "鶯谷";
In_Uguisudani.next = In_Nippori;
In_Uguisudani.is_inside = true;

Out_Uguisudani.name = "鶯谷";
Out_Uguisudani.next = Out_Ueno;
Out_Uguisudani.is_inside = false;

In_Ueno.name = "上野";
In_Ueno.next = In_Uguisudani;
In_Ueno.is_inside = true;

Out_Ueno.name = "上野";
Out_Ueno.next = Out_Okachimachi;
Out_Ueno.is_inside = false;

In_Okachimachi.name = "御徒町";
In_Okachimachi.next = In_Ueno;
In_Okachimachi.is_inside = true;

Out_Okachimachi.name = "御徒町";
Out_Okachimachi.next = Out_Akihabara;
Out_Okachimachi.is_inside = false;

In_Akihabara.name = "秋葉原";
In_Akihabara.next = In_Okachimachi;
In_Akihabara.is_inside = true;

Out_Akihabara.name = "秋葉原";
Out_Akihabara.next = Out_Kanda;
Out_Akihabara.is_inside = false;

In_Kanda.name = "神田";
In_Kanda.next = In_Akihabara;
In_Kanda.is_inside = true;

Out_Kanda.name = "神田";
Out_Kanda.next = Out_Tokyo;
Out_Kanda.is_inside = false;

In_Tokyo.name = "東京";
In_Tokyo.next = In_Kanda;
In_Tokyo.is_inside = true;

Out_Tokyo.name = "東京";
Out_Tokyo.next = Out_Yurakucho;
Out_Tokyo.is_inside = false;

