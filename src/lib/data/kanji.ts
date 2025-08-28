
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
        { japanese: '日本', reading: 'にほん (Nihon)', meaning: 'Jepang' },
        { japanese: '日曜日', reading: 'にちようび (nichiyoubi)', meaning: 'Hari Minggu' },
        { japanese: '今日', reading: 'きょう (kyou)', meaning: 'Hari ini' },
        { japanese: '三日', reading: 'みっか (mikka)', meaning: 'Tanggal 3, tiga hari' },
    ],
  },
   {
    character: '一',
    onyomi: 'イチ (ichi), イツ (itsu)',
    kunyomi: 'ひと (hito), ひと(つ) (hito(tsu))',
    meaning: 'Satu',
    examples: [
        { japanese: '一人', reading: 'ひとり (hitori)', meaning: 'Satu orang' },
        { japanese: '一日', reading: 'いちにち (ichinichi)', meaning: 'Satu hari' },
        { japanese: '一つ', reading: 'ひとつ (hitotsu)', meaning: 'Satu buah' },
        { japanese: '一月', reading: 'いちがつ (ichigatsu)', meaning: 'Januari' },
    ],
  },
  {
    character: '国',
    onyomi: 'コク (koku)',
    kunyomi: 'くに (kuni)',
    meaning: 'Negara',
    examples: [
        { japanese: '国', reading: 'くに (kuni)', meaning: 'Negara' },
        { japanese: '外国人', reading: 'がいこくじん (gaikokujin)', meaning: 'Orang asing' },
        { japanese: '中国', reading: 'ちゅうごく (chuugoku)', meaning: 'Cina' },
        { japanese: '韓国', reading: 'かんこく (kankoku)', meaning: 'Korea Selatan' },
    ],
  },
   {
    character: '人',
    onyomi: 'ジン (jin), ニン (nin)',
    kunyomi: 'ひと (hito)',
    meaning: 'Orang',
    examples: [
        { japanese: '日本人', reading: 'にほんじん (nihonjin)', meaning: 'Orang Jepang' },
        { japanese: '三人', reading: 'さんにん (sannin)', meaning: 'Tiga orang' },
        { japanese: '一人', reading: 'ひとり (hitori)', meaning: 'Satu orang' },
        { japanese: '人', reading: 'ひと (hito)', meaning: 'Orang' },
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
        { japanese: '去年', reading: 'きょねん (kyonen)', meaning: 'Tahun lalu' },
        { japanese: '年', reading: 'とし (toshi)', meaning: 'Tahun, umur' },
    ],
  },
];
export const kanjiN4: any[] = [];
