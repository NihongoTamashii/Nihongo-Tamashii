
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
    onyomi: 'ニチ (nichi)',
    kunyomi: 'ひ (hi)',
    meaning: 'Hari',
    examples: [
        { japanese: '毎日日本語を勉強します。', reading: 'まいにち にほんごを べんきょうします。', meaning: 'Saya belajar bahasa Jepang setiap hari.' },
    ],
  },
  {
    character: '人',
    onyomi: 'ジン (jin)',
    kunyomi: 'ひと (hito)',
    meaning: 'Orang',
    examples: [
        { japanese: 'あの人は先生です。', reading: 'あのひとはせんせいです。', meaning: 'Orang itu adalah guru.' },
    ],
  },
  {
    character: '学',
    onyomi: 'ガク (gaku)',
    kunyomi: 'まなぶ (manabu)',
    meaning: 'Belajar',
    examples: [
        { japanese: '学校へ行きます。', reading: 'がっこうへいきます。', meaning: 'Saya pergi ke sekolah.' },
    ],
  },
  {
    character: '行',
    onyomi: 'コウ (kou)',
    kunyomi: 'いく (iku)',
    meaning: 'Pergi',
    examples: [
        { japanese: '明日東京へ行きます。', reading: 'あした とうきょうへいきます。', meaning: 'Besok saya pergi ke Tokyo.' },
    ],
  },
  {
    character: '見',
    onyomi: 'ケン (ken)',
    kunyomi: 'みる (miru)',
    meaning: 'Melihat',
    examples: [
        { japanese: '映画を見ました。', reading: 'えいがをみました。', meaning: 'Saya sudah menonton film.' },
    ],
  },
  {
    character: '月',
    onyomi: 'ゲツ (getsu)',
    kunyomi: 'つき (tsuki)',
    meaning: 'Bulan',
    examples: [
        { japanese: '来月日本へ行きます。', reading: 'らいげつ にほんへいきます。', meaning: 'Bulan depan saya akan ke Jepang.' },
    ],
  },
  {
    character: '山',
    onyomi: 'サン (san)',
    kunyomi: 'やま (yama)',
    meaning: 'Gunung',
    examples: [
        { japanese: 'あの山はとても高いです。', reading: 'あのやまはとてもたかいです。', meaning: 'Gunung itu sangat tinggi.' },
    ],
  },
  {
    character: '川',
    onyomi: 'セン (sen)',
    kunyomi: 'かわ (kawa)',
    meaning: 'Sungai',
    examples: [
        { japanese: '川で魚を見ました。', reading: 'かわでさかなをみました。', meaning: 'Saya melihat ikan di sungai.' },
    ],
  },
  {
    character: '水',
    onyomi: 'スイ (sui)',
    kunyomi: 'みず (mizu)',
    meaning: 'Air',
    examples: [
        { japanese: '水を飲みます。', reading: 'みずをのみます。', meaning: 'Saya minum air.' },
    ],
  },
  {
    character: '大',
    onyomi: 'ダイ (dai)',
    kunyomi: 'おおきい (ookii)',
    meaning: 'Besar',
    examples: [
        { japanese: '大きい家に住んでいます。', reading: 'おおきいいえにすんでいます。', meaning: 'Saya tinggal di rumah besar.' },
    ],
  },
  {
    character: '本',
    onyomi: 'ホン (hon)',
    kunyomi: 'もと (moto)',
    meaning: 'Buku / Asal',
    examples: [
        { japanese: '日本の本を読みます。', reading: 'にほんのほんをよみます。', meaning: 'Saya membaca buku Jepang.' },
    ],
  },
  {
    character: '小',
    onyomi: 'ショウ (shou)',
    kunyomi: 'ちいさい (chiisai)',
    meaning: 'Kecil',
    examples: [
        { japanese: '小さい犬がかわいいです。', reading: 'ちいさいいぬがかわいいです。', meaning: 'Anjing kecil itu lucu.' },
    ],
  },
  {
    character: '高',
    onyomi: 'コウ (kou)',
    kunyomi: 'たかい (takai)',
    meaning: 'Tinggi / Mahal',
    examples: [
        { japanese: 'この本は高いです。', reading: 'このほんはたかいです。', meaning: 'Buku ini mahal.' },
    ],
  },
  {
    character: '女',
    onyomi: 'ジョ (jo)',
    kunyomi: 'おんな (onna)',
    meaning: 'Perempuan',
    examples: [
        { japanese: 'あの人は女の子です。', reading: 'あのひとはおんなのこです。', meaning: 'Orang itu adalah anak perempuan.' },
    ],
  },
  {
    character: '男',
    onyomi: 'ダン (dan)',
    kunyomi: 'おとこ (otoko)',
    meaning: 'Laki-laki',
    examples: [
        { japanese: '男の人は医者です。', reading: 'おとこのひとはいしゃです。', meaning: 'Laki-laki itu adalah dokter.' },
    ],
  },
  {
    character: '子',
    onyomi: 'シ (shi)',
    kunyomi: 'こ (ko)',
    meaning: 'Anak',
    examples: [
        { japanese: '子どもが公園で遊んでいます。', reading: 'こどもがこうえんであそんでいます。', meaning: 'Anak-anak sedang bermain di taman.' },
    ],
  },
  {
    character: '中',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'なか (naka)',
    meaning: 'Di dalam',
    examples: [
      { japanese: '箱の中に本があります。', reading: 'はこのなかにほんがあります。', meaning: 'Di dalam kotak ada buku.' },
    ],
  },
  {
    character: '出',
    onyomi: 'シュツ (shutsu)',
    kunyomi: 'でる (deru), だす (dasu)',
    meaning: 'Keluar',
    examples: [
      { japanese: '友だちは家を出ました。', reading: 'ともだちはいえをでました。', meaning: 'Teman telah keluar dari rumah.' },
    ],
  },
  {
    character: '入',
    onyomi: 'ニュウ (nyuu)',
    kunyomi: 'はいる (hairu), いれる (ireru)',
    meaning: 'Masuk',
    examples: [
      { japanese: '学校に入ります。', reading: 'がっこうにはいります。', meaning: 'Masuk sekolah.' },
    ],
  },
  {
    character: '天',
    onyomi: 'テン (ten)',
    kunyomi: 'あま (ama)',
    meaning: 'Langit',
    examples: [
      { japanese: '天気がいいです。', reading: 'てんきがいいです。', meaning: 'Cuacanya bagus.' },
    ],
  },
  {
    character: '年',
    onyomi: 'ネン (nen)',
    kunyomi: 'とし (toshi)',
    meaning: 'Tahun',
    examples: [
      { japanese: '来年、日本へ行きます。', reading: 'らいねん、にほんへいきます。', meaning: 'Tahun depan saya pergi ke Jepang.' },
    ],
  },
  {
    character: '先',
    onyomi: 'セン (sen)',
    kunyomi: 'さき (saki)',
    meaning: 'Sebelumnya',
    examples: [
      { japanese: '先生は学校にいます。', reading: 'せんせいはがっこうにいます。', meaning: 'Guru ada di sekolah.' },
    ],
  },
  {
    character: '生',
    onyomi: 'セイ (sei), ショウ (shou)',
    kunyomi: 'いきる (ikiru), うまれる (umareru)',
    meaning: 'Hidup / Lahir',
    examples: [
      { japanese: '学生です。', reading: 'がくせいです。', meaning: 'Saya adalah murid.' },
    ],
  },
  {
    character: '時',
    onyomi: 'ジ (ji)',
    kunyomi: 'とき (toki)',
    meaning: 'Waktu / Jam',
    examples: [
      { japanese: '今は10時です。', reading: 'いまはじゅうじです。', meaning: 'Sekarang pukul 10.' },
    ],
  },
  {
    character: '分',
    onyomi: 'ブン (bun), フン (fun)',
    kunyomi: 'わける (wakeru)',
    meaning: 'Menit / Bagian',
    examples: [
      { japanese: '五分だけ待ってください。', reading: 'ごふんだけまってください。', meaning: 'Tolong tunggu 5 menit saja.' },
    ],
  },
  {
    character: '名',
    onyomi: 'メイ (mei), ミョウ (myou)',
    kunyomi: 'な (na)',
    meaning: 'Nama',
    examples: [
      { japanese: '名前はなんですか。', reading: 'なまえはなんですか。', meaning: 'Namamu siapa?' },
    ],
  },
  {
    character: '校',
    onyomi: 'コウ (kou)',
    kunyomi: '-',
    meaning: 'Sekolah',
    examples: [
      { japanese: '学校は家の近くです。', reading: 'がっこうはいえのちかくです。', meaning: 'Sekolah ada di dekat rumah.' },
    ],
  },
  {
    character: '車',
    onyomi: 'シャ (sha)',
    kunyomi: 'くるま (kuruma)',
    meaning: 'Mobil / Kendaraan',
    examples: [
      { japanese: '車で行きます。', reading: 'くるまでいきます。', meaning: 'Saya pergi dengan mobil.' },
    ],
  },
  {
    character: '金',
    onyomi: 'キン (kin)',
    kunyomi: 'かね (kane)',
    meaning: 'Uang / Emas',
    examples: [
      { japanese: 'お金がありません。', reading: 'おかねがありません。', meaning: 'Saya tidak punya uang.' },
    ],
  },
  {
    character: '火',
    onyomi: 'カ (ka)',
    kunyomi: 'ひ (hi)',
    meaning: 'Api',
    examples: [
      { japanese: '火曜日に会いましょう。', reading: 'かようびにあいましょう。', meaning: 'Mari bertemu hari Selasa.' },
    ],
  },
  {
    character: '今',
    onyomi: 'コン (kon)',
    kunyomi: 'いま (ima)',
    meaning: 'Sekarang',
    examples: [
      { japanese: '今、何時ですか。', reading: 'いま、なんじですか。', meaning: 'Sekarang jam berapa?' },
    ],
  },
  {
    character: '店',
    onyomi: 'テン (ten)',
    kunyomi: 'みせ (mise)',
    meaning: 'Toko',
    examples: [
      { japanese: 'あの店は安いです。', reading: 'あのみせはやすいです。', meaning: 'Toko itu murah.' },
    ],
  },
  {
    character: '会',
    onyomi: 'カイ (kai)',
    kunyomi: 'あう (au)',
    meaning: 'Bertemu / Rapat',
    examples: [
      { japanese: '明日友だちに会います。', reading: 'あしたともだちにあいます。', meaning: 'Besok saya bertemu teman.' },
    ],
  },
  {
    character: '語',
    onyomi: 'ゴ (go)',
    kunyomi: 'かたる (kataru)',
    meaning: 'Bahasa / Kata',
    examples: [
      { japanese: '日本語がわかりますか。', reading: 'にほんごがわかりますか。', meaning: 'Apakah kamu mengerti bahasa Jepang?' },
    ],
  }
];
export const kanjiN4: any[] = [];
