class Station {
    name: string;
    next: Station;
    is_inside: boolean;
}

const In_Tokyo = new Station;
const In_Kanda = new Station;
const In_Akihabara = new Station;
const In_Okachimachi = new Station;
const In_Ueno = new Station;
const In_Uguisudani = new Station;
const In_Nippori = new Station;
const In_Nishi_Nippori = new Station;
const In_Tabata = new Station;
const In_Komagome = new Station;
const In_Sugamo = new Station;
const In_Otsuka = new Station;
const In_Ikebukuro = new Station;
const In_Mejiro = new Station;
const In_Takadanobaba = new Station;
const In_Shin_Okubo = new Station;
const In_Shinjuku = new Station;
const In_Yoyogi = new Station;
const In_Harajuku = new Station;
const In_Shibuya = new Station;
const In_Ebisu = new Station;
const In_Meguro = new Station;
const In_Gotanda = new Station;
const In_Osaki = new Station;
const In_Shinagawa = new Station;
const In_Takanawa_Gateway = new Station;
const In_Tamachi = new Station;
const In_Hamamatsucho = new Station;
const In_Shinbashi = new Station;
const In_Yurakucho = new Station;
const Out_Tokyo = new Station;
const Out_Kanda = new Station;
const Out_Akihabara = new Station;
const Out_Okachimachi = new Station;
const Out_Ueno = new Station;
const Out_Uguisudani = new Station;
const Out_Nippori = new Station;
const Out_Nishi_Nippori = new Station;
const Out_Tabata = new Station;
const Out_Komagome = new Station;
const Out_Sugamo = new Station;
const Out_Otsuka = new Station;
const Out_Ikebukuro = new Station;
const Out_Mejiro = new Station;
const Out_Takadanobaba = new Station;
const Out_Shin_Okubo = new Station;
const Out_Shinjuku = new Station;
const Out_Yoyogi = new Station;
const Out_Harajuku = new Station;
const Out_Shibuya = new Station;
const Out_Ebisu = new Station;
const Out_Meguro = new Station;
const Out_Gotanda = new Station;
const Out_Osaki = new Station;
const Out_Shinagawa = new Station;
const Out_Takanawa_Gateway = new Station;
const Out_Tamachi = new Station;
const Out_Hamamatsucho = new Station;
const Out_Shinbashi = new Station;
const Out_Yurakucho = new Station;

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
Out_Tamachi.next = In_Hamamatsucho;
Out_Tamachi.is_inside = true;
