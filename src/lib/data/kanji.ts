
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
];
export const kanjiN4: any[] = [];
