
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
    meaning: 'Hari, Matahari, Jepang',
    examples: [
      { japanese: '日曜日', reading: 'にちようび (nichiyōbi)', meaning: 'Hari Minggu' },
      { japanese: '日本', reading: 'にほん (Nihon)', meaning: 'Jepang' },
    ],
  },
  {
    character: '一',
    onyomi: 'イチ (ichi), イツ (itsu)',
    kunyomi: 'ひと (hito), ひと- (hito-)',
    meaning: 'Satu',
    examples: [
      { japanese: '一番', reading: 'いちばん (ichiban)', meaning: 'Nomor satu' },
      { japanese: '一つ', reading: 'ひとつ (hitotsu)', meaning: 'Satu buah' },
    ],
  },
  {
    character: '国',
    onyomi: 'コク (koku)',
    kunyomi: 'くに (kuni)',
    meaning: 'Negara',
    examples: [
      { japanese: '外国人', reading: 'がいこくじん (gaikokujin)', meaning: 'Orang asing' },
      { japanese: '中国', reading: 'ちゅうごく (Chūgoku)', meaning: 'Cina' },
    ],
  },
  {
    character: '人',
    onyomi: 'ジン (jin), ニン (nin)',
    kunyomi: 'ひと (hito)',
    meaning: 'Orang',
    examples: [
      { japanese: '日本人', reading: 'にほんじん (Nihonjin)', meaning: 'Orang Jepang' },
      { japanese: '三人', reading: 'さんにん (sannin)', meaning: 'Tiga orang' },
    ],
  },
  {
    character: '年',
    onyomi: 'ネン (nen)',
    kunyomi: 'とし (toshi)',
    meaning: 'Tahun',
    examples: [
      { japanese: '今年', reading: 'ことし (kotoshi)', meaning: 'Tahun ini' },
      { japanese: '来年', reading: 'らいねん (rainen)', meaning: 'Tahun depan' },
    ],
  },
  {
    character: '大',
    onyomi: 'ダイ (dai), タイ (tai)',
    kunyomi: 'おお- (oo-), おお(きい) (oo(kii))',
    meaning: 'Besar',
    examples: [
      { japanese: '大学', reading: 'だいがく (daigaku)', meaning: 'Universitas' },
      { japanese: '大きい', reading: 'おおきい (ookii)', meaning: 'Besar' },
    ],
  },
  {
    character: '十',
    onyomi: 'ジュウ (jū), ジッ (jittsu)',
    kunyomi: 'とお (tō), と (to)',
    meaning: 'Sepuluh',
    examples: [
      { japanese: '十日', reading: 'とおか (tōka)', meaning: 'Tanggal sepuluh' },
      { japanese: '十月', reading: 'じゅうがつ (jūgatsu)', meaning: 'Oktober' },
    ],
  },
  {
    character: '二',
    onyomi: 'ニ (ni), ジ (ji)',
    kunyomi: 'ふた (futa), ふた(つ) (futa(tsu))',
    meaning: 'Dua',
    examples: [
      { japanese: '二月', reading: 'にがつ (nigatsu)', meaning: 'Februari' },
      { japanese: '二つ', reading: 'ふたつ (futatsu)', meaning: 'Dua buah' },
    ],
  },
  {
    character: '本',
    onyomi: 'ホン (hon)',
    kunyomi: 'もと (moto)',
    meaning: 'Buku, Asal',
    examples: [
      { japanese: '本屋', reading: 'ほんや (hon\'ya)', meaning: 'Toko buku' },
      { japanese: '日本語', reading: 'にほんご (Nihongo)', meaning: 'Bahasa Jepang' },
    ],
  },
  {
    character: '中',
    onyomi: 'チュウ (chū)',
    kunyomi: 'なか (naka)',
    meaning: 'Di dalam, Tengah',
    examples: [
      { japanese: '中学校', reading: 'ちゅうがっこう (chūgakkō)', meaning: 'SMP' },
      { japanese: '一日中', reading: 'いちにちじゅう (ichinichijū)', meaning: 'Seharian' },
    ],
  },
  {
    character: '長',
    onyomi: 'チョウ (chō)',
    kunyomi: 'なが(い) (naga(i))',
    meaning: 'Panjang, Ketua',
    examples: [
      { japanese: '社長', reading: 'しゃちょう (shachō)', meaning: 'Direktur' },
      { japanese: '長い', reading: 'ながい (nagai)', meaning: 'Panjang' },
    ],
  },
  {
    character: '出',
    onyomi: 'シュツ (shutsu), スイ (sui)',
    kunyomi: 'で(る) (de(ru)), だ(す) (da(su))',
    meaning: 'Keluar',
    examples: [
      { japanese: '出る', reading: 'でる (deru)', meaning: 'Keluar' },
      { japanese: '出口', reading: 'でぐち (deguchi)', meaning: 'Pintu keluar' },
    ],
  },
  {
    character: '三',
    onyomi: 'サン (san)',
    kunyomi: 'み (mi), み(つ) (mi(tsu))',
    meaning: 'Tiga',
    examples: [
      { japanese: '三日', reading: 'みっか (mikka)', meaning: 'Tanggal tiga' },
      { japanese: '三つ', reading: 'みっつ (mittsu)', meaning: 'Tiga buah' },
    ],
  },
  {
    character: '時',
    onyomi: 'ジ (ji)',
    kunyomi: 'とき (toki)',
    meaning: 'Waktu, Jam',
    examples: [
      { japanese: '時間', reading: 'じかん (jikan)', meaning: 'Waktu' },
      { japanese: '時々', reading: 'ときどき (tokidoki)', meaning: 'Kadang-kadang' },
    ],
  },
  {
    character: '行',
    onyomi: 'コウ (kō), ギョウ (gyō)',
    kunyomi: 'い(く) (i(ku)), ゆ(く) (yu(ku))',
    meaning: 'Pergi',
    examples: [
      { japanese: '行く', reading: 'いく (iku)', meaning: 'Pergi' },
      { japanese: '銀行', reading: 'ぎんこう (ginkō)', meaning: 'Bank' },
    ],
  },
  {
    character: '見',
    onyomi: 'ケン (ken)',
    kunyomi: 'み(る) (mi(ru))',
    meaning: 'Melihat',
    examples: [
      { japanese: '見る', reading: 'みる (miru)', meaning: 'Melihat' },
      { japanese: '意見', reading: 'いけん (iken)', meaning: 'Pendapat' },
    ],
  },
  {
    character: '中',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'なか (naka)',
    meaning: 'Di dalam',
    examples: [
      { japanese: '箱の中に本があります。', reading: 'hako no naka ni hon ga arimasu', meaning: 'Di dalam kotak ada buku.' },
    ],
  },
  {
    character: '出',
    onyomi: 'シュツ (shutsu)',
    kunyomi: 'でる (deru), だす (dasu)',
    meaning: 'Keluar',
    examples: [
      { japanese: '友だちは家を出ました。', reading: 'tomodachi wa ie o demashita', meaning: 'Teman keluar rumah.' },
    ],
  },
  {
    character: '入',
    onyomi: 'ニュウ (nyuu)',
    kunyomi: 'はいる (hairu), いれる (ireru)',
    meaning: 'Masuk',
    examples: [
      { japanese: '学校に入ります。', reading: 'gakkou ni hairimasu', meaning: 'Masuk sekolah.' },
    ],
  },
  {
    character: '天',
    onyomi: 'テン (ten)',
    kunyomi: 'あめ (ame)',
    meaning: 'Langit',
    examples: [
      { japanese: '天気がいいです。', reading: 'tenki ga ii desu', meaning: 'Cuacanya bagus.' },
    ],
  },
  {
    character: '年',
    onyomi: 'ネン (nen)',
    kunyomi: 'とし (toshi)',
    meaning: 'Tahun',
    examples: [
      { japanese: '来年、日本へ行きます。', reading: 'rainen, Nihon e ikimasu', meaning: 'Tahun depan saya pergi ke Jepang.' },
    ],
  },
  {
    character: '先',
    onyomi: 'セン (sen)',
    kunyomi: 'さき (saki)',
    meaning: 'Sebelumnya',
    examples: [
      { japanese: '先生は学校にいます。', reading: 'sensei wa gakkou ni imasu', meaning: 'Guru ada di sekolah.' },
    ],
  },
  {
    character: '生',
    onyomi: 'セイ (sei), ショウ (shou)',
    kunyomi: 'いきる (ikiru), うまれる (umareru)',
    meaning: 'Hidup / Lahir',
    examples: [
      { japanese: '学生です。', reading: 'gakusei desu', meaning: 'Saya adalah murid.' },
    ],
  },
  {
    character: '時',
    onyomi: 'ジ (ji)',
    kunyomi: 'とき (toki)',
    meaning: 'Waktu / Jam',
    examples: [
      { japanese: '今は10時です。', reading: 'ima wa 10-ji desu', meaning: 'Sekarang pukul 10.' },
    ],
  },
  {
    character: '分',
    onyomi: 'ブン (bun), フン (fun)',
    kunyomi: 'わける (wakeru)',
    meaning: 'Menit / Bagian',
    examples: [
      { japanese: '五分だけ待ってください。', reading: 'gofun dake matte kudasai', meaning: 'Tolong tunggu 5 menit saja.' },
    ],
  },
  {
    character: '名',
    onyomi: 'メイ (mei), ミョウ (myou)',
    kunyomi: 'な (na)',
    meaning: 'Nama',
    examples: [
      { japanese: '名前はなんですか。', reading: 'namae wa nan desu ka', meaning: 'Namamu siapa?' },
    ],
  },
  {
    character: '校',
    onyomi: 'コウ (kou)',
    kunyomi: '-',
    meaning: 'Sekolah',
    examples: [
      { japanese: '学校は家の近くです。', reading: 'gakkou wa ie no chikaku desu', meaning: 'Sekolah ada di dekat rumah.' },
    ],
  },
  {
    character: '車',
    onyomi: 'シャ (sha)',
    kunyomi: 'くるま (kuruma)',
    meaning: 'Mobil / Kendaraan',
    examples: [
      { japanese: '車で行きます。', reading: 'kuruma de ikimasu', meaning: 'Saya pergi dengan mobil.' },
    ],
  },
  {
    character: '金',
    onyomi: 'キン (kin)',
    kunyomi: 'かね (kane)',
    meaning: 'Uang / Emas',
    examples: [
      { japanese: 'お金がありません。', reading: 'okane ga arimasen', meaning: 'Saya tidak punya uang.' },
    ],
  },
  {
    character: '火',
    onyomi: 'カ (ka)',
    kunyomi: 'ひ (hi)',
    meaning: 'Api',
    examples: [
      { japanese: '火曜日に会いましょう。', reading: 'kayoubi ni aimashou', meaning: 'Mari bertemu hari Selasa.' },
    ],
  },
  {
    character: '今',
    onyomi: 'コン (kon)',
    kunyomi: 'いま (ima)',
    meaning: 'Sekarang',
    examples: [
      { japanese: '今、何時ですか。', reading: 'ima, nanji desu ka', meaning: 'Sekarang jam berapa?' },
    ],
  },
  {
    character: '店',
    onyomi: 'テン (ten)',
    kunyomi: 'みせ (mise)',
    meaning: 'Toko',
    examples: [
      { japanese: 'あの店は安いです。', reading: 'ano mise wa yasui desu', meaning: 'Toko itu murah.' },
    ],
  },
  {
    character: '会',
    onyomi: 'カイ (kai)',
    kunyomi: 'あう (au)',
    meaning: 'Bertemu / Rapat',
    examples: [
      { japanese: '明日友だちに会います。', reading: 'ashita tomodachi ni aimasu', meaning: 'Besok saya bertemu teman.' },
    ],
  },
  {
    character: '語',
    onyomi: 'ゴ (go)',
    kunyomi: 'かたる (kataru)',
    meaning: 'Bahasa / Kata',
    examples: [
      { japanese: '日本語がわかりますか。', reading: 'Nihongo ga wakarimasu ka', meaning: 'Apakah kamu mengerti bahasa Jepang?' },
    ],
  },
];

export const kanjiN4: any[] = [];
