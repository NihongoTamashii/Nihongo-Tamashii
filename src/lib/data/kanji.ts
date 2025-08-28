
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
    character: '月',
    onyomi: 'ゲツ (getsu), ガツ (gatsu)',
    kunyomi: 'つき (tsuki)',
    meaning: 'Bulan, Senin',
    examples: [
      { japanese: '月曜日', reading: 'げつようび (getsuyōbi)', meaning: 'Hari Senin' },
      { japanese: '今月', reading: 'こんげつ (kongetsu)', meaning: 'Bulan ini' },
    ],
  },
  {
    character: '分',
    onyomi: 'ブン (bun), フン (fun)',
    kunyomi: 'わ(ける) (wa(keru))',
    meaning: 'Menit, Bagian',
    examples: [
      { japanese: '五分', reading: 'ごふん (gofun)', meaning: 'Lima menit' },
      { japanese: '半分', reading: 'はんぶん (hanbun)', meaning: 'Setengah' },
    ],
  },
  {
    character: '後',
    onyomi: 'ゴ (go), コウ (kō)',
    kunyomi: 'あと (ato), うし(ろ) (ushi(ro))',
    meaning: 'Setelah, Belakang',
    examples: [
      { japanese: '午後', reading: 'ごご (gogo)', meaning: 'P.M. (sore)' },
      { japanese: '後ろ', reading: 'うしろ (ushiro)', meaning: 'Belakang' },
    ],
  },
  {
    character: '前',
    onyomi: 'ゼン (zen)',
    kunyomi: 'まえ (mae)',
    meaning: 'Sebelum, Depan',
    examples: [
      { japanese: '午前', reading: 'ごぜん (gozen)', meaning: 'A.M. (pagi)' },
      { japanese: '名前', reading: 'なまえ (namae)', meaning: 'Nama' },
    ],
  },
  {
    character: '生',
    onyomi: 'セイ (sei), ショウ (shō)',
    kunyomi: 'い(きる) (i(kiru)), う(まれる) (u(mareru))',
    meaning: 'Hidup, Lahir',
    examples: [
      { japanese: '学生', reading: 'がくせい (gakusei)', meaning: 'Siswa' },
      { japanese: '先生', reading: 'せんせい (sensei)', meaning: 'Guru' },
    ],
  },
  {
    character: '五',
    onyomi: 'ゴ (go)',
    kunyomi: 'いつ (itsu), いつ(つ) (itsu(tsu))',
    meaning: 'Lima',
    examples: [
      { japanese: '五日', reading: 'いつか (itsuka)', meaning: 'Tanggal lima' },
      { japanese: '五月', reading: 'ごがつ (gogatsu)', meaning: 'Mei' },
    ],
  },
  {
    character: '間',
    onyomi: 'カン (kan), ケン (ken)',
    kunyomi: 'あいだ (aida)',
    meaning: 'Antara, Selama',
    examples: [
      { japanese: '時間', reading: 'じかん (jikan)', meaning: 'Waktu' },
      { japanese: '二時間', reading: 'にじかん (nijikan)', meaning: 'Dua jam' },
    ],
  },
  {
    character: '上',
    onyomi: 'ジョウ (jō)',
    kunyomi: 'うえ (ue), あ(がる) (a(garu))',
    meaning: 'Atas',
    examples: [
      { japanese: '上手', reading: 'じょうず (jōzu)', meaning: 'Mahir' },
      { japanese: '上', reading: 'うえ (ue)', meaning: 'Atas' },
    ],
  },
  {
    character: '東',
    onyomi: 'トウ (tō)',
    kunyomi: 'ひがし (higashi)',
    meaning: 'Timur',
    examples: [
      { japanese: '東京', reading: 'とうきょう (Tōkyō)', meaning: 'Tokyo' },
      { japanese: '東口', reading: 'ひがしぐち (higashiguchi)', meaning: 'Pintu timur' },
    ],
  },
  {
    character: '西',
    onyomi: 'セイ (sei), サイ (sai)',
    kunyomi: 'にし (nishi)',
    meaning: 'Barat',
    examples: [
      { japanese: '西口', reading: 'にしぐち (nishiguchi)', meaning: 'Pintu barat' },
      { japanese: '西洋', reading: 'せいよう (seiyō)', meaning: 'Dunia Barat' },
    ],
  },
  {
    character: '南',
    onyomi: 'ナン (nan)',
    kunyomi: 'みなみ (minami)',
    meaning: 'Selatan',
    examples: [
      { japanese: '南口', reading: 'みなみぐち (minamiguchi)', meaning: 'Pintu selatan' },
      { japanese: '東南アジア', reading: 'とうなんアジア (tōnan Ajia)', meaning: 'Asia Tenggara' },
    ],
  },
  {
    character: '北',
    onyomi: 'ホク (hoku)',
    kunyomi: 'きた (kita)',
    meaning: 'Utara',
    examples: [
      { japanese: '北口', reading: 'きたぐち (kitaguchi)', meaning: 'Pintu utara' },
      { japanese: '北海道', reading: 'ほっかいどう (Hokkaidō)', meaning: 'Hokkaido' },
    ],
  },
   {
    character: '百',
    onyomi: 'ヒャク (hyaku)',
    kunyomi: 'もも (momo)',
    meaning: 'Seratus',
    examples: [
      { japanese: '三百', reading: 'さんびゃく (sanbyaku)', meaning: 'Tiga ratus' },
      { japanese: '六百', reading: 'ろっぴゃく (roppyaku)', meaning: 'Enam ratus' },
    ],
  },
  {
    character: '千',
    onyomi: 'セン (sen)',
    kunyomi: 'ち (chi)',
    meaning: 'Seribu',
    examples: [
      { japanese: '千円', reading: 'せんえん (sen\'en)', meaning: 'Seribu yen' },
      { japanese: '三千', reading: 'さんぜん (sanzen)', meaning: 'Tiga ribu' },
    ],
  },
  {
    character: '万',
    onyomi: 'マン (man), バン (ban)',
    kunyomi: 'よろず (yorozu)',
    meaning: 'Sepuluh ribu',
    examples: [
      { japanese: '一万円', reading: 'いちまんえん (ichiman\'en)', meaning: 'Sepuluh ribu yen' },
      { japanese: '万国', reading: 'ばんこく (bankoku)', meaning: 'Semua negara' },
    ],
  },
  {
    character: '円',
    onyomi: 'エン (en)',
    kunyomi: 'まる(い) (maru(i))',
    meaning: 'Yen, Bulat',
    examples: [
      { japanese: '百円', reading: 'ひゃくえん (hyakuen)', meaning: 'Seratus yen' },
      { japanese: '円い', reading: 'まるい (marui)', meaning: 'Bulat' },
    ],
  },
   {
    character: '口',
    onyomi: 'コウ (kō), ク (ku)',
    kunyomi: 'くち (kuchi)',
    meaning: 'Mulut',
    examples: [
      { japanese: '人口', reading: 'じんこう (jinkō)', meaning: 'Populasi' },
      { japanese: '入口', reading: 'いりぐち (iriguchi)', meaning: 'Pintu masuk' },
    ],
  },
  {
    character: '目',
    onyomi: 'モク (moku)',
    kunyomi: 'め (me)',
    meaning: 'Mata',
    examples: [
      { japanese: '目的', reading: 'もくてき (mokuteki)', meaning: 'Tujuan' },
      { japanese: '目薬', reading: 'めぐすり (megusuri)', meaning: 'Obat mata' },
    ],
  },
    {
    character: '青',
    onyomi: 'セイ (sei)',
    kunyomi: 'あお (ao), あおい (aoi)',
    meaning: 'Biru',
    examples: [
      { japanese: '空は青いです。', reading: 'そらはあおいです (sora wa aoi desu)', meaning: 'Langit berwarna biru.' },
    ],
  },
  {
    character: '赤',
    onyomi: 'セキ (seki)',
    kunyomi: 'あか (aka), あかい (akai)',
    meaning: 'Merah',
    examples: [
      { japanese: '赤いりんごを食べます。', reading: 'あかいりんごをたべます (akai ringo o tabemasu)', meaning: 'Saya makan apel merah.' },
    ],
  },
  {
    character: '立',
    onyomi: 'リツ (ritsu)',
    kunyomi: 'たつ (tatsu)',
    meaning: 'Berdiri',
    examples: [
      { japanese: '先生が立っています。', reading: 'せんせいがたっています (sensei ga tatte imasu)', meaning: 'Guru sedang berdiri.' },
    ],
  },
  {
    character: '外',
    onyomi: 'ガイ (gai)',
    kunyomi: 'そと (soto)',
    meaning: 'Luar',
    examples: [
      { japanese: '外で遊びます。', reading: 'そとであそびます (soto de asobimasu)', meaning: 'Saya bermain di luar.' },
    ],
  },
  {
    character: '入',
    onyomi: 'ニュウ (nyuu)',
    kunyomi: 'はいる (hairu), いれる (ireru)',
    meaning: 'Masuk',
    examples: [
      { japanese: '学校に入ります。', reading: 'がっこうにはいります (gakkō ni hairimasu)', meaning: 'Saya masuk sekolah.' },
    ],
  },
  {
    character: '出',
    onyomi: 'シュツ (shutsu)',
    kunyomi: 'でる (deru), だす (dasu)',
    meaning: 'Keluar',
    examples: [
      { japanese: '家を出ます。', reading: 'いえをでます (ie o demasu)', meaning: 'Saya keluar rumah.' },
    ],
  },
  {
    character: '東',
    onyomi: 'トウ (tou)',
    kunyomi: 'ひがし (higashi)',
    meaning: 'Timur',
    examples: [
      { japanese: '東口で会いましょう。', reading: 'ひがしぐちであいましょう (higashiguchi de aimashō)', meaning: 'Mari bertemu di pintu timur.' },
    ],
  },
  {
    character: '西',
    onyomi: 'セイ (sei), サイ (sai)',
    kunyomi: 'にし (nishi)',
    meaning: 'Barat',
    examples: [
      { japanese: '西の空が赤いです。', reading: 'にしのそらがあかいです (nishi no sora ga akai desu)', meaning: 'Langit barat tampak merah.' },
    ],
  },
  {
    character: '南',
    onyomi: 'ナン (nan)',
    kunyomi: 'みなみ (minami)',
    meaning: 'Selatan',
    examples: [
      { japanese: '南の町に住んでいます。', reading: 'みなみのまちにすんでいます (minami no machi ni sunde imasu)', meaning: 'Saya tinggal di kota selatan.' },
    ],
  },
  {
    character: '北',
    onyomi: 'ホク (hoku)',
    kunyomi: 'きた (kita)',
    meaning: 'Utara',
    examples: [
      { japanese: '北風が吹いています。', reading: 'きたかぜがふいています (kitakaze ga fuite imasu)', meaning: 'Angin utara sedang bertiup.' },
    ],
  },
  {
    character: '毎',
    onyomi: 'マイ (mai)',
    kunyomi: '-',
    meaning: 'Setiap',
    examples: [
      { japanese: '毎日勉強します。', reading: 'まいにちべんきょうします (mainichi benkyō shimasu)', meaning: 'Saya belajar setiap hari.' },
    ],
  },
  {
    character: '朝',
    onyomi: 'チョウ (chou)',
    kunyomi: 'あさ (asa)',
    meaning: 'Pagi',
    examples: [
      { japanese: '朝ごはんを食べました。', reading: 'あさごはんをたべました (asagohan o tabemashita)', meaning: 'Saya makan sarapan pagi.' },
    ],
  },
  {
    character: '昼',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'ひる (hiru)',
    meaning: 'Siang',
    examples: [
      { japanese: '昼ごはんはラーメンです。', reading: 'ひるごはんはらーめんです (hirugohan wa rāmen desu)', meaning: 'Makan siang saya adalah ramen.' },
    ],
  },
  {
    character: '夜',
    onyomi: 'ヤ (ya)',
    kunyomi: 'よる (yoru)',
    meaning: 'Malam',
    examples: [
      { japanese: '夜に本を読みます。', reading: 'よるにほんをよみます (yoru ni hon o yomimasu)', meaning: 'Saya membaca buku di malam hari.' },
    ],
  },
  {
    character: '天',
    onyomi: 'テン (ten)',
    kunyomi: '-',
    meaning: 'Langit / Cuaca',
    examples: [
      { japanese: '天気がいいです。', reading: 'てんきがいいです (tenki ga ii desu)', meaning: 'Cuacanya bagus.' },
    ],
  },
  {
    character: '気',
    onyomi: 'キ (ki)',
    kunyomi: '-',
    meaning: 'Perasaan / Cuaca',
    examples: [
      { japanese: '元気ですか。', reading: 'げんきですか (genki desu ka)', meaning: 'Apa kabar?' },
    ],
  },
  {
    character: '曇',
    onyomi: 'ドン (don)',
    kunyomi: 'くもり (kumori)',
    meaning: 'Berawan',
    examples: [
      { japanese: '今日は曇りです。', reading: 'きょうはくもりです (kyō wa kumori desu)', meaning: 'Hari ini berawan.' },
    ],
  },
  {
    character: '雨',
    onyomi: 'ウ (u)',
    kunyomi: 'あめ (ame)',
    meaning: 'Hujan',
    examples: [
      { japanese: '雨が降っています。', reading: 'あめがふっています (ame ga futte imasu)', meaning: 'Hujan sedang turun.' },
    ],
  },
];

export const kanjiN4: any[] = [];
