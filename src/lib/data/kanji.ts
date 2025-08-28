
export type KanjiExample = {
  japanese: string;
  reading: string;
  meaning: string;
};

export type Kanji = {
  character: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  examples: KanjiExample[];
};

export const kanjiN5: Kanji[] = [
  {
    character: '日',
    onyomi: 'ニチ (nichi), ジツ (jitsu)',
    kunyomi: 'ひ (hi), -び (-bi), -か (-ka)',
    meaning: 'Hari, Matahari',
    examples: [
      { japanese: '日曜日', reading: 'にちようび', meaning: 'Hari Minggu' },
      { japanese: '日本', reading: 'にほん / にっぽん', meaning: 'Jepang' },
      { japanese: '毎日', reading: 'まいにち', meaning: 'Setiap hari' },
    ],
  },
  {
    character: '一',
    onyomi: 'イチ (ichi)',
    kunyomi: 'ひと(つ) (hito(tsu))',
    meaning: 'Satu',
    examples: [
      { japanese: '一人', reading: 'ひとり', meaning: 'Satu orang' },
      { japanese: '一番', reading: 'いちばん', meaning: 'Nomor satu' },
      { japanese: '一日', reading: 'ついたち', meaning: 'Tanggal satu' },
    ],
  },
  {
    character: '国',
    onyomi: 'コク (koku)',
    kunyomi: 'くに (kuni)',
    meaning: 'Negara',
    examples: [
      { japanese: '外国', reading: 'がいこく', meaning: 'Luar negeri' },
      { japanese: '中国人', reading: 'ちゅうごくじん', meaning: 'Orang Cina' },
      { japanese: '国', reading: 'くに', meaning: 'Negara' },
    ],
  },
  {
    character: '人',
    onyomi: 'ジン (jin), ニン (nin)',
    kunyomi: 'ひと (hito)',
    meaning: 'Orang',
    examples: [
      { japanese: '日本人', reading: 'にほんじん', meaning: 'Orang Jepang' },
      { japanese: '三人', reading: 'さんにん', meaning: 'Tiga orang' },
      { japanese: '大人', reading: 'おとな', meaning: 'Orang dewasa' },
    ],
  },
  {
    character: '年',
    onyomi: 'ネン (nen)',
    kunyomi: 'とし (toshi)',
    meaning: 'Tahun',
    examples: [
      { japanese: '今年', reading: 'ことし', meaning: 'Tahun ini' },
      { japanese: '来年', reading: 'らいねん', meaning: 'Tahun depan' },
      { japanese: '年', reading: 'とし', meaning: 'Tahun' },
    ],
  },
  {
    character: '大',
    onyomi: 'ダイ (dai), タイ (tai)',
    kunyomi: 'おお(きい) (oo(kii))',
    meaning: 'Besar',
    examples: [
      { japanese: '大学', reading: 'だいがく', meaning: 'Universitas' },
      { japanese: '大きい', reading: 'おおきい', meaning: 'Besar' },
      { japanese: '大変', reading: 'たいへん', meaning: 'Sangat, gawat' },
    ],
  },
  {
    character: '十',
    onyomi: 'ジュウ (juu)',
    kunyomi: 'とお (too)',
    meaning: 'Sepuluh',
    examples: [
      { japanese: '十日', reading: 'とおか', meaning: 'Tanggal 10' },
      { japanese: '十', reading: 'じゅう', meaning: 'Sepuluh' },
      { japanese: '十人', reading: 'じゅうにん', meaning: 'Sepuluh orang' },
    ],
  },
  {
    character: '二',
    onyomi: 'ニ (ni)',
    kunyomi: 'ふた(つ) (futa(tsu))',
    meaning: 'Dua',
    examples: [
      { japanese: '二日', reading: 'ふつか', meaning: 'Tanggal 2' },
      { japanese: '二人', reading: 'ふたり', meaning: 'Dua orang' },
      { japanese: '二月', reading: 'にがつ', meaning: 'Februari' },
    ],
  },
  {
    character: '本',
    onyomi: 'ホン (hon)',
    kunyomi: 'もと (moto)',
    meaning: 'Buku, Asal',
    examples: [
      { japanese: '本', reading: 'ほん', meaning: 'Buku' },
      { japanese: '日本語', reading: 'にほんご', meaning: 'Bahasa Jepang' },
      { japanese: '山本', reading: 'やまもと', meaning: 'Yamamoto (nama)' },
    ],
  },
  {
    character: '中',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'なか (naka)',
    meaning: 'Dalam, Tengah',
    examples: [
      { japanese: '一日中', reading: 'いちにちじゅう', meaning: 'Seharian' },
      { japanese: '中学校', reading: 'ちゅうがっこう', meaning: 'SMP' },
      { japanese: '中', reading: 'なか', meaning: 'Dalam' },
    ],
  },
  {
    character: '長',
    onyomi: 'チョウ (chou)',
    kunyomi: 'なが(い) (naga(i))',
    meaning: 'Panjang, Pemimpin',
    examples: [
      { japanese: '社長', reading: 'しゃちょう', meaning: 'Direktur' },
      { japanese: '長い', reading: 'ながい', meaning: 'Panjang' },
      { japanese: '学長', reading: 'がくちょう', meaning: 'Rektor' },
    ],
  },
  {
    character: '出',
    onyomi: 'シュツ (shutsu)',
    kunyomi: 'で(る) (de(ru)), だ(す) (da(su))',
    meaning: 'Keluar',
    examples: [
      { japanese: '出る', reading: 'でる', meaning: 'Keluar' },
      { japanese: '出す', reading: 'だす', meaning: 'Mengeluarkan' },
      { japanese: '出口', reading: 'でぐち', meaning: 'Pintu keluar' },
    ],
  },
  {
    character: '三',
    onyomi: 'サン (san)',
    kunyomi: 'みっ(つ) (mit(tsu))',
    meaning: 'Tiga',
    examples: [
      { japanese: '三日', reading: 'みっか', meaning: 'Tanggal 3' },
      { japanese: '三つ', reading: 'みっつ', meaning: 'Tiga buah' },
      { japanese: '三月', reading: 'さんがつ', meaning: 'Maret' },
    ],
  },
  {
    character: '時',
    onyomi: 'ジ (ji)',
    kunyomi: 'とき (toki)',
    meaning: 'Waktu, Jam',
    examples: [
      { japanese: '時間', reading: 'じかん', meaning: 'Waktu' },
      { japanese: '時々', reading: 'ときどき', meaning: 'Kadang-kadang' },
      { japanese: '三時', reading: 'さんじ', meaning: 'Jam tiga' },
    ],
  },
  {
    character: '行',
    onyomi: 'コウ (kou), ギョウ (gyou)',
    kunyomi: 'い(く) (i(ku)), ゆ(く) (yu(ku)), おこな(う) (okona(u))',
    meaning: 'Pergi',
    examples: [
        { japanese: '行く', reading: 'いく', meaning: 'Pergi' },
        { japanese: '銀行', reading: 'ぎんこう', meaning: 'Bank' },
        { japanese: '旅行', reading: 'りょこう', meaning: 'Wisata' },
    ],
  },
  {
    character: '見',
    onyomi: 'ケン (ken)',
    kunyomi: 'み(る) (mi(ru))',
    meaning: 'Melihat',
    examples: [
        { japanese: '見る', reading: 'みる', meaning: 'Melihat' },
        { japanese: '見せる', reading: 'みせる', meaning: 'Memperlihatkan' },
        { japanese: '意見', reading: 'いけん', meaning: 'Pendapat' },
    ],
  },
  {
    character: '月',
    onyomi: 'ゲツ (getsu), ガツ (gatsu)',
    kunyomi: 'つき (tsuki)',
    meaning: 'Bulan',
    examples: [
        { japanese: '月曜日', reading: 'げつようび', meaning: 'Hari Senin' },
        { japanese: '一月', reading: 'いちがつ', meaning: 'Januari' },
        { japanese: '今月', reading: 'こんげつ', meaning: 'Bulan ini' },
    ],
  },
  {
    character: '分',
    onyomi: 'ブン (bun), フン (fun)',
    kunyomi: 'わ(かる) (wa(karu)), わ(ける) (wa(keru))',
    meaning: 'Bagian, Menit',
    examples: [
        { japanese: '分かる', reading: 'わかる', meaning: 'Mengerti' },
        { japanese: '五分', reading: 'ごふん', meaning: 'Lima menit' },
        { japanese: '自分', reading: 'じぶん', meaning: 'Diri sendiri' },
    ],
  },
  {
    character: '後',
    onyomi: 'ゴ (go), コウ (kou)',
    kunyomi: 'あと (ato), うし(ろ) (ushi(ro))',
    meaning: 'Setelah, Belakang',
    examples: [
        { japanese: '午後', reading: 'ごご', meaning: 'P.M. (siang/sore)' },
        { japanese: '後で', reading: 'あとで', meaning: 'Nanti' },
        { japanese: '後ろ', reading: 'うしろ', meaning: 'Belakang' },
    ],
  },
  {
    character: '前',
    onyomi: 'ゼン (zen)',
    kunyomi: 'まえ (mae)',
    meaning: 'Sebelum, Depan',
    examples: [
        { japanese: '前', reading: 'まえ', meaning: 'Depan' },
        { japanese: '午前', reading: 'ごぜん', meaning: 'A.M. (pagi)' },
        { japanese: '名前', reading: 'なまえ', meaning: 'Nama' },
    ],
  },
  {
    character: '生',
    onyomi: 'セイ (sei), ショウ (shou)',
    kunyomi: 'い(きる) (i(kiru)), う(まれる) (u(mareru))',
    meaning: 'Hidup, Lahir',
    examples: [
        { japanese: '先生', reading: 'せんせい', meaning: 'Guru' },
        { japanese: '学生', reading: 'がくせい', meaning: 'Siswa' },
        { japanese: '誕生日', reading: 'たんじょうび', meaning: 'Hari ulang tahun' },
    ],
  },
  {
    character: '五',
    onyomi: 'ゴ (go)',
    kunyomi: 'いつ(つ) (itsu(tsu))',
    meaning: 'Lima',
    examples: [
        { japanese: '五日', reading: 'いつか', meaning: 'Tanggal 5' },
        { japanese: '五つ', reading: 'いつつ', meaning: 'Lima buah' },
        { japanese: '五月', reading: 'ごがつ', meaning: 'Mei' },
    ],
  },
  {
    character: '間',
    onyomi: 'カン (kan), ケン (ken)',
    kunyomi: 'あいだ (aida)',
    meaning: 'Antara, Selama',
    examples: [
        { japanese: '時間', reading: 'じかん', meaning: 'Waktu' },
        { japanese: '間', reading: 'あいだ', meaning: 'Antara' },
        { japanese: '人間', reading: 'にんげん', meaning: 'Manusia' },
    ],
  },
  {
    character: '上',
    onyomi: 'ジョウ (jou)',
    kunyomi: 'うえ (ue), あ(がる) (a(garu))',
    meaning: 'Atas',
    examples: [
        { japanese: '上', reading: 'うえ', meaning: 'Atas' },
        { japanese: '上手', reading: 'じょうず', meaning: 'Pandai' },
        { japanese: '上がる', reading: 'あがる', meaning: 'Naik' },
    ],
  },
  {
    character: '東',
    onyomi: 'トウ (tou)',
    kunyomi: 'ひがし (higashi)',
    meaning: 'Timur',
    examples: [
      { japanese: '東京', reading: 'とうきょう', meaning: 'Tokyo' },
      { japanese: '東口', reading: 'ひがしぐち', meaning: 'Pintu timur' },
      { japanese: '東', reading: 'ひがし', meaning: 'Timur' },
    ],
  },
  {
    character: '西',
    onyomi: 'セイ (sei), サイ (sai)',
    kunyomi: 'にし (nishi)',
    meaning: 'Barat',
    examples: [
      { japanese: '西口', reading: 'にしぐち', meaning: 'Pintu barat' },
      { japanese: '西洋', reading: 'せいよう', meaning: 'Negara barat' },
      { japanese: '東西', reading: 'とうざい', meaning: 'Timur dan barat' },
    ],
  },
  {
    character: '南',
    onyomi: 'ナン (nan)',
    kunyomi: 'みなみ (minami)',
    meaning: 'Selatan',
    examples: [
      { japanese: '南口', reading: 'みなみぐち', meaning: 'Pintu selatan' },
      { japanese: '東南アジア', reading: 'とうなんアジア', meaning: 'Asia Tenggara' },
      { japanese: '南', reading: 'みなみ', meaning: 'Selatan' },
    ],
  },
  {
    character: '北',
    onyomi: 'ホク (hoku)',
    kunyomi: 'きた (kita)',
    meaning: 'Utara',
    examples: [
      { japanese: '北口', reading: 'きたぐち', meaning: 'Pintu utara' },
      { japanese: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' },
      { japanese: '北', reading: 'きた', meaning: 'Utara' },
    ],
  },
];
export const kanjiN4: any[] = [];

    