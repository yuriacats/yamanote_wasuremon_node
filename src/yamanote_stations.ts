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

In_Shinagawa.name = "品川"
