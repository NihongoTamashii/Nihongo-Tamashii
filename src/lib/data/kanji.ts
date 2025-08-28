
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
      {
        japanese: '毎日 日本語を 勉強します。',
        reading: 'Mainichi Nihongo o benkyō shimasu.',
        meaning: 'Saya belajar bahasa Jepang setiap hari.',
      },
    ],
  },
  {
    character: '人',
    onyomi: 'ジン (jin)',
    kunyomi: 'ひと (hito)',
    meaning: 'Orang',
    examples: [
      {
        japanese: 'あの人は 先生です。',
        reading: 'Ano hito wa sensei desu.',
        meaning: 'Orang itu adalah guru.',
      },
    ],
  },
  {
    character: '学',
    onyomi: 'ガク (gaku)',
    kunyomi: 'まなぶ (manabu)',
    meaning: 'Belajar',
    examples: [
      {
        japanese: '学校へ 行きます。',
        reading: 'Gakkō e ikimasu.',
        meaning: 'Saya pergi ke sekolah.',
      },
    ],
  },
  {
    character: '行',
    onyomi: 'コウ (kou)',
    kunyomi: 'いく (iku)',
    meaning: 'Pergi',
    examples: [
      {
        japanese: '明日 東京へ 行きます。',
        reading: 'Ashita Tōkyō e ikimasu.',
        meaning: 'Besok saya pergi ke Tokyo.',
      },
    ],
  },
  {
    character: '見',
    onyomi: 'ケン (ken)',
    kunyomi: 'みる (miru)',
    meaning: 'Melihat',
    examples: [
      {
        japanese: '映画を 見ました。',
        reading: 'Eiga o mimashita.',
        meaning: 'Saya sudah menonton film.',
      },
    ],
  },
  {
    character: '月',
    onyomi: 'ゲツ (getsu)',
    kunyomi: 'つき (tsuki)',
    meaning: 'Bulan',
    examples: [
      {
        japanese: '来月 日本へ 行きます。',
        reading: 'Raigetsu Nihon e ikimasu.',
        meaning: 'Bulan depan saya akan ke Jepang.',
      },
    ],
  },
  {
    character: '山',
    onyomi: 'サン (san)',
    kunyomi: 'やま (yama)',
    meaning: 'Gunung',
    examples: [
      {
        japanese: 'あの山は とても 高いです。',
        reading: 'Ano yama wa totemo takai desu.',
        meaning: 'Gunung itu sangat tinggi.',
      },
    ],
  },
  {
    character: '川',
    onyomi: 'セン (sen)',
    kunyomi: 'かわ (kawa)',
    meaning: 'Sungai',
    examples: [
      {
        japanese: '川で 魚を 見ました。',
        reading: 'Kawa de sakana o mimashita.',
        meaning: 'Saya melihat ikan di sungai.',
      },
    ],
  },
  {
    character: '水',
    onyomi: 'スイ (sui)',
    kunyomi: 'みず (mizu)',
    meaning: 'Air',
    examples: [
      {
        japanese: '水を 飲みます。',
        reading: 'Mizu o nomimasu.',
        meaning: 'Saya minum air.',
      },
    ],
  },
  {
    character: '大',
    onyomi: 'ダイ (dai)',
    kunyomi: 'おおきい (ookii)',
    meaning: 'Besar',
    examples: [
      {
        japanese: '大きい 家に 住んでいます。',
        reading: 'Ōkii ie ni sunde imasu.',
        meaning: 'Saya tinggal di rumah besar.',
      },
    ],
  },
  {
    character: '本',
    onyomi: 'ホン (hon)',
    kunyomi: 'もと (moto)',
    meaning: 'Buku / Asal',
    examples: [
      {
        japanese: '日本の本を 読みます。',
        reading: 'Nihon no hon o yomimasu.',
        meaning: 'Saya membaca buku Jepang.',
      },
    ],
  },
  {
    character: '小',
    onyomi: 'ショウ (shou)',
    kunyomi: 'ちいさい (chiisai)',
    meaning: 'Kecil',
    examples: [
      {
        japanese: '小さい 犬が かわいいです。',
        reading: 'Chiisai inu ga kawaiidesu.',
        meaning: 'Anjing kecil itu lucu.',
      },
    ],
  },
  {
    character: '高',
    onyomi: 'コウ (kou)',
    kunyomi: 'たかい (takai)',
    meaning: 'Tinggi / Mahal',
    examples: [
      {
        japanese: 'この本は 高いです。',
        reading: 'Kono hon wa takai desu.',
        meaning: 'Buku ini mahal.',
      },
    ],
  },
  {
    character: '女',
    onyomi: 'ジョ (jo)',
    kunyomi: 'おんな (onna)',
    meaning: 'Perempuan',
    examples: [
      {
        japanese: 'あの人は 女の子です。',
        reading: 'Ano hito wa onnanoko desu.',
        meaning: 'Orang itu adalah anak perempuan.',
      },
    ],
  },
  {
    character: '男',
    onyomi: 'ダン (dan)',
    kunyomi: 'おとこ (otoko)',
    meaning: 'Laki-laki',
    examples: [
      {
        japanese: '男の人は 医者です。',
        reading: 'Otoko no hito wa isha desu.',
        meaning: 'Orang laki-laki itu adalah dokter.',
      },
    ],
  },
  {
    character: '子',
    onyomi: 'シ (shi)',
    kunyomi: 'こ (ko)',
    meaning: 'Anak',
    examples: [
      {
        japanese: '子どもが 公園で 遊んでいます。',
        reading: 'Kodomo ga kōen de asonde imasu.',
        meaning: 'Anak-anak sedang bermain di taman.',
      },
    ],
  },
  {
    character: '中',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'なか (naka)',
    meaning: 'Di dalam',
    examples: [
      {
        japanese: '箱の中に 本が あります。',
        reading: 'Hako no naka ni hon ga arimasu.',
        meaning: 'Di dalam kotak ada buku.',
      },
    ],
  },
  {
    character: '出',
    onyomi: 'シュツ (shutsu)',
    kunyomi: 'でる (deru) / だす (dasu)',
    meaning: 'Keluar',
    examples: [
      {
        japanese: '友だちは 家を 出ました。',
        reading: 'Tomodachi wa ie o demashita.',
        meaning: 'Teman sudah keluar dari rumah.',
      },
    ],
  },
  {
    character: '入',
    onyomi: 'ニュウ (nyuu)',
    kunyomi: 'はいる (hairu) / いれる (ireru)',
    meaning: 'Masuk',
    examples: [
      {
        japanese: '学校に 入ります。',
        reading: 'Gakkō ni hairimasu.',
        meaning: 'Saya masuk sekolah.',
      },
    ],
  },
  {
    character: '天',
    onyomi: 'テン (ten)',
    kunyomi: '–',
    meaning: 'Langit',
    examples: [
      {
        japanese: '天気が いいです。',
        reading: 'Tenki ga ii desu.',
        meaning: 'Cuacanya bagus.',
      },
    ],
  },
  {
    character: '年',
    onyomi: 'ネン (nen)',
    kunyomi: 'とし (toshi)',
    meaning: 'Tahun',
    examples: [
      {
        japanese: '来年、日本へ行きます。',
        reading: 'Rainen, Nihon e ikimasu.',
        meaning: 'Tahun depan saya pergi ke Jepang.',
      },
    ],
  },
  {
    character: '先',
    onyomi: 'セン (sen)',
    kunyomi: 'さき (saki)',
    meaning: 'Sebelumnya',
    examples: [
      {
        japanese: '先生は 学校にいます。',
        reading: 'Sensei wa gakkō ni imasu.',
        meaning: 'Guru ada di sekolah.',
      },
    ],
  },
  {
    character: '生',
    onyomi: 'セイ (sei), ショウ (shou)',
    kunyomi: 'いきる (ikiru), うまれる (umareru)',
    meaning: 'Hidup / Lahir',
    examples: [
      {
        japanese: '学生です。',
        reading: 'Gakusei desu.',
        meaning: 'Saya adalah murid.',
      },
    ],
  },
  {
    character: '時',
    onyomi: 'ジ (ji)',
    kunyomi: 'とき (toki)',
    meaning: 'Waktu / Jam',
    examples: [
      {
        japanese: '今は 10時です。',
        reading: 'Ima wa jū-ji desu.',
        meaning: 'Sekarang pukul 10.',
      },
    ],
  },
  {
    character: '分',
    onyomi: 'ブン (bun), フン (fun)',
    kunyomi: 'わける (wakeru)',
    meaning: 'Menit / Bagian',
    examples: [
      {
        japanese: '五分だけ 待ってください。',
        reading: 'Go-fun dake matte kudasai.',
        meaning: 'Tolong tunggu 5 menit saja.',
      },
    ],
  },
  {
    character: '名',
    onyomi: 'メイ (mei), ミョウ (myou)',
    kunyomi: 'な (na)',
    meaning: 'Nama',
    examples: [
      {
        japanese: '名前は なんですか。',
        reading: 'Namae wa nan desu ka.',
        meaning: 'Namamu siapa?',
      },
    ],
  },
  {
    character: '校',
    onyomi: 'コウ (kou)',
    kunyomi: '–',
    meaning: 'Sekolah',
    examples: [
      {
        japanese: '学校は 家の 近くです。',
        reading: 'Gakkō wa ie no chikaku desu.',
        meaning: 'Sekolah ada di dekat rumah.',
      },
    ],
  },
  {
    character: '車',
    onyomi: 'シャ (sha)',
    kunyomi: 'くるま (kuruma)',
    meaning: 'Mobil / Kendaraan',
    examples: [
      {
        japanese: '車で 行きます。',
        reading: 'Kuruma de ikimasu.',
        meaning: 'Saya pergi dengan mobil.',
      },
    ],
  },
  {
    character: '金',
    onyomi: 'キン (kin)',
    kunyomi: 'かね (kane)',
    meaning: 'Uang / Emas',
    examples: [
      {
        japanese: 'お金が ありません。',
        reading: 'Okane ga arimasen.',
        meaning: 'Saya tidak punya uang.',
      },
    ],
  },
  {
    character: '火',
    onyomi: 'カ (ka)',
    kunyomi: 'ひ (hi)',
    meaning: 'Api',
    examples: [
      {
        japanese: '火曜日に 会いましょう。',
        reading: 'Kayōbi ni aimashō.',
        meaning: 'Mari bertemu hari Selasa.',
      },
    ],
  },
  {
    character: '今',
    onyomi: 'コン (kon)',
    kunyomi: 'いま (ima)',
    meaning: 'Sekarang',
    examples: [
      {
        japanese: '今、何時ですか。',
        reading: 'Ima, nan-ji desu ka.',
        meaning: 'Sekarang jam berapa?',
      },
    ],
  },
  {
    character: '店',
    onyomi: 'テン (ten)',
    kunyomi: 'みせ (mise)',
    meaning: 'Toko',
    examples: [
      {
        japanese: 'あの店は 安いです。',
        reading: 'Ano mise wa yasui desu.',
        meaning: 'Toko itu murah.',
      },
    ],
  },
  {
    character: '会',
    onyomi: 'カイ (kai)',
    kunyomi: 'あう (au)',
    meaning: 'Bertemu / Rapat',
    examples: [
      {
        japanese: '明日 友だちに 会います。',
        reading: 'Ashita tomodachi ni aimasu.',
        meaning: 'Besok saya bertemu teman.',
      },
    ],
  },
  {
    character: '語',
    onyomi: 'ゴ (go)',
    kunyomi: 'かたる (kataru)',
    meaning: 'Bahasa / Kata',
    examples: [
      {
        japanese: '日本語が わかりますか。',
        reading: 'Nihongo ga wakarimasu ka.',
        meaning: 'Apakah kamu mengerti bahasa Jepang?',
      },
    ],
  },
  {
    character: '帰',
    onyomi: 'キ (ki)',
    kunyomi: 'かえる (kaeru)',
    meaning: 'Pulang',
    examples: [
      {
        japanese: '家へ 帰ります。',
        reading: 'Ie e kaerimasu.',
        meaning: 'Saya pulang ke rumah.',
      },
    ],
  },
  {
    character: '曜',
    onyomi: 'ヨウ (you)',
    kunyomi: '–',
    meaning: 'Hari (dalam minggu)',
    examples: [
      {
        japanese: '月曜日から 金曜日まで 学校があります。',
        reading: 'Getsuyōbi kara kinyōbi made gakkō ga arimasu.',
        meaning: 'Sekolah dari Senin sampai Jumat.',
      },
    ],
  },
  {
    character: '電',
    onyomi: 'デン (den)',
    kunyomi: '–',
    meaning: 'Listrik',
    examples: [
      {
        japanese: '電話を かけます。',
        reading: 'Denwa o kakemasu.',
        meaning: 'Saya menelepon.',
      },
    ],
  },
  {
    character: '話',
    onyomi: 'ワ (wa)',
    kunyomi: 'はなす (hanasu)',
    meaning: 'Bicara',
    examples: [
      {
        japanese: '先生と 話しました。',
        reading: 'Sensei to hanashimashita.',
        meaning: 'Saya bicara dengan guru.',
      },
    ],
  },
  {
    character: '新',
    onyomi: 'シン (shin)',
    kunyomi: 'あたらしい (atarashii)',
    meaning: 'Baru',
    examples: [
      {
        japanese: '新しい 車を 買いました。',
        reading: 'Atarashii kuruma o kaimashita.',
        meaning: 'Saya membeli mobil baru.',
      },
    ],
  },
  {
    character: '古',
    onyomi: 'コ (ko)',
    kunyomi: 'ふるい (furui)',
    meaning: 'Lama',
    examples: [
      {
        japanese: '古い 本を 読みました。',
        reading: 'Furui hon o yomimashita.',
        meaning: 'Saya membaca buku lama.',
      },
    ],
  },
  {
    character: '書',
    onyomi: 'ショ (sho)',
    kunyomi: 'かく (kaku)',
    meaning: 'Menulis',
    examples: [
      {
        japanese: '名前を 書いてください。',
        reading: 'Namae o kaite kudasai.',
        meaning: 'Tolong tulis namamu.',
      },
    ],
  },
  {
    character: '読',
    onyomi: 'ドク (doku)',
    kunyomi: 'よむ (yomu)',
    meaning: 'Membaca',
    examples: [
      {
        japanese: '本を 読みます。',
        reading: 'Hon o yomimasu.',
        meaning: 'Saya membaca buku.',
      },
    ],
  },
  {
    character: '聞',
    onyomi: 'ブン (bun)',
    kunyomi: 'きく (kiku) /きこえる (kikoeru)',
    meaning: 'Mendengar / Bertanya',
    examples: [
      {
        japanese: '音楽を 聞きます。',
        reading: 'Ongaku o kikimasu.',
        meaning: 'Saya mendengarkan musik.',
      },
    ],
  },
  {
    character: '話',
    onyomi: 'ワ (wa)',
    kunyomi: 'はなす (hanasu)',
    meaning: 'Bicara / Cerita',
    examples: [
      {
        japanese: '友だちと 話しました。',
        reading: 'Tomodachi to hanashimashita.',
        meaning: 'Saya berbicara dengan teman.',
      },
    ],
  },
  {
    character: '買',
    onyomi: 'バイ (bai)',
    kunyomi: 'かう (kau)',
    meaning: 'Membeli',
    examples: [
      {
        japanese: 'パンを 買いました。',
        reading: 'Pan o kaimashita.',
        meaning: 'Saya membeli roti.',
      },
    ],
  },
  {
    character: '安',
    onyomi: 'アン (an)',
    kunyomi: 'やすい (yasui)',
    meaning: 'Murah / Aman',
    examples: [
      {
        japanese: 'この店は 安いです。',
        reading: 'Kono mise wa yasui desu.',
        meaning: 'Toko ini murah.',
      },
    ],
  },
  {
    character: '白',
    onyomi: 'ハク (haku)',
    kunyomi: 'しろ (shiro) /しろい (shiroi)',
    meaning: 'Putih',
    examples: [
      {
        japanese: '白い 服を 着ます。',
        reading: 'Shiroi fuku o kimasu.',
        meaning: 'Saya memakai baju putih.',
      },
    ],
  },
  {
    character: '黒',
    onyomi: 'コク (koku)',
    kunyomi: 'くろ (kuro) / くろい (kuroi)',
    meaning: 'Hitam',
    examples: [
      {
        japanese: '黒い 車が 好きです。',
        reading: 'Kuroi kuruma ga suki desu.',
        meaning: 'Saya suka mobil hitam.',
      },
    ],
  },
  {
    character: '空',
    onyomi: 'クウ (kuu)',
    kunyomi: 'そら (sora) /あく (aku) /から (kara)',
    meaning: 'Langit / Kosong',
    examples: [
      {
        japanese: '空が 青いです。',
        reading: 'Sora ga aoi desu.',
        meaning: 'Langit berwarna biru.',
      },
    ],
  },
  {
    character: '花',
    onyomi: 'カ (ka)',
    kunyomi: 'はな (hana)',
    meaning: 'Bunga',
    examples: [
      {
        japanese: '花が 咲きました。',
        reading: 'Hana ga sakimashita.',
        meaning: 'Bunganya sudah mekar.',
      },
    ],
  },
  {
    character: '青',
    onyomi: 'セイ (sei)',
    kunyomi: 'あお (ao), あおい (aoi)',
    meaning: 'Biru',
    examples: [
      {
        japanese: '空は 青いです。',
        reading: 'Sora wa aoi desu.',
        meaning: 'Langit berwarna biru.',
      },
    ],
  },
  {
    character: '赤',
    onyomi: 'セキ (seki)',
    kunyomi: 'あか (aka), あかい (akai)',
    meaning: 'Merah',
    examples: [
      {
        japanese: '赤い りんごを 食べます。',
        reading: 'Akai ringo o tabemasu.',
        meaning: 'Saya makan apel merah.',
      },
    ],
  },
  {
    character: '立',
    onyomi: 'リツ (ritsu)',
    kunyomi: 'たつ (tatsu)',
    meaning: 'Berdiri',
    examples: [
      {
        japanese: '先生が 立っています。',
        reading: 'Sensei ga tatte imasu.',
        meaning: 'Guru sedang berdiri.',
      },
    ],
  },
  {
    character: '外',
    onyomi: 'ガイ (gai)',
    kunyomi: 'そと (soto)',
    meaning: 'Luar',
    examples: [
      {
        japanese: '外で 遊びます。',
        reading: 'Soto de asobimasu.',
        meaning: 'Saya bermain di luar.',
      },
    ],
  },
  {
    character: '出',
    onyomi: 'シュツ (shutsu)',
    kunyomi: 'でる (deru), だす (dasu)',
    meaning: 'Keluar',
    examples: [
      {
        japanese: '家を 出ます。',
        reading: 'Ie o demasu.',
        meaning: 'Saya keluar rumah.',
      },
    ],
  },
  {
    character: '東',
    onyomi: 'トウ (tou)',
    kunyomi: 'ひがし (higashi)',
    meaning: 'Timur',
    examples: [
      {
        japanese: '東口で 会いましょう。',
        reading: 'Higashiguchi de aimashō.',
        meaning: 'Mari bertemu di pintu timur.',
      },
    ],
  },
  {
    character: '西',
    onyomi: 'セイ (sei), サイ (sai)',
    kunyomi: 'にし (nishi)',
    meaning: 'Barat',
    examples: [
      {
        japanese: '西の空が 赤いです。',
        reading: 'Nishi no sora ga akai desu.',
        meaning: 'Langit barat tampak merah.',
      },
    ],
  },
  {
    character: '南',
    onyomi: 'ナン (nan)',
    kunyomi: 'みなみ (minami)',
    meaning: 'Selatan',
    examples: [
      {
        japanese: '南の町に 住んでいます。',
        reading: 'Minami no machi ni sunde imasu.',
        meaning: 'Saya tinggal di kota selatan.',
      },
    ],
  },
  {
    character: '北',
    onyomi: 'ホク (hoku)',
    kunyomi: 'きた (kita)',
    meaning: 'Utara',
    examples: [
      {
        japanese: '北風が 吹いています。',
        reading: 'Kitakaze ga fuite imasu.',
        meaning: 'Angin utara sedang bertiup.',
      },
    ],
  },
  {
    character: '毎',
    onyomi: 'マイ (mai)',
    kunyomi: '–',
    meaning: 'Setiap',
    examples: [
      {
        japanese: '毎日 勉強します。',
        reading: 'Mainichi benkyō shimasu.',
        meaning: 'Saya belajar setiap hari.',
      },
    ],
  },
  {
    character: '朝',
    onyomi: 'チョウ (chou)',
    kunyomi: 'あさ (asa)',
    meaning: 'Pagi',
    examples: [
      {
        japanese: '朝ごはんを 食べました。',
        reading: 'Asa gohan o tabemashita.',
        meaning: 'Saya makan sarapan pagi.',
      },
    ],
  },
  {
    character: '昼',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'ひる (hiru)',
    meaning: 'Siang',
    examples: [
      {
        japanese: '昼ごはんは ラーメンです。',
        reading: 'Hiru gohan wa rāmen desu.',
        meaning: 'Makan siang saya adalah ramen.',
      },
    ],
  },
  {
    character: '夜',
    onyomi: 'ヤ (ya)',
    kunyomi: 'よる (yoru)',
    meaning: 'Malam',
    examples: [
      {
        japanese: '夜に 本を 読みます。',
        reading: 'Yoru ni hon o yomimasu.',
        meaning: 'Saya membaca buku di malam hari.',
      },
    ],
  },
  {
    character: '気',
    onyomi: 'キ (ki)',
    kunyomi: '–',
    meaning: 'Perasaan / Cuaca',
    examples: [
      {
        japanese: '元気ですか。',
        reading: 'Genki desu ka.',
        meaning: 'Apa kabar?',
      },
    ],
  },
  {
    character: '曇',
    onyomi: 'ドン (don)',
    kunyomi: 'くもり (kumori)',
    meaning: 'Berawan',
    examples: [
      {
        japanese: '今日は 曇りです。',
        reading: 'Kyō wa kumori desu.',
        meaning: 'Hari ini berawan.',
      },
    ],
  },
  {
    character: '雨',
    onyomi: 'ウ (u)',
    kunyomi: 'あめ (ame)',
    meaning: 'Hujan',
    examples: [
      {
        japanese: '雨が 降っています。',
        reading: 'Ame ga futte imasu.',
        meaning: 'Hujan sedang turun.',
      },
    ],
  },
  {
    character: '百',
    onyomi: 'ヒャク (hyaku)',
    kunyomi: '–',
    meaning: 'Seratus',
    examples: [
      {
        japanese: '百円です。',
        reading: 'Hyaku en desu.',
        meaning: 'Itu seratus yen.',
      },
    ],
  },
  {
    character: '千',
    onyomi: 'セン (sen)',
    kunyomi: 'ち (chi)',
    meaning: 'Seribu',
    examples: [
      {
        japanese: '千人が 来ました。',
        reading: 'Sen-nin ga kimashita.',
        meaning: 'Seribu orang datang.',
      },
    ],
  },
  {
    character: '飲',
    onyomi: 'イン (in)',
    kunyomi: 'のむ (nomu)',
    meaning: 'Minum',
    examples: [
      {
        japanese: '水を 飲みます。',
        reading: 'Mizu o nomimasu.',
        meaning: 'Saya minum air.',
      },
    ],
  },
  {
    character: '起',
    onyomi: 'キ (ki)',
    kunyomi: 'おきる (okiru)',
    meaning: 'Bangun / Bangkit',
    examples: [
      {
        japanese: '毎朝 6時に 起きます。',
        reading: 'Maiasa roku-ji ni okimasu.',
        meaning: 'Saya bangun pukul 6 setiap pagi.',
      },
    ],
  },
  {
    character: '走',
    onyomi: 'ソウ (sou)',
    kunyomi: 'はしる (hashiru)',
    meaning: 'Berlari',
    examples: [
      {
        japanese: '公園で 走ります。',
        reading: 'Kōen de hashirimasu.',
        meaning: 'Saya berlari di taman.',
      },
    ],
  },
  {
    character: '勉',
    onyomi: 'ベン (ben)',
    kunyomi: '–',
    meaning: 'Belajar (berusaha)',
    examples: [
      {
        japanese: '勉強が 好きです。',
        reading: 'Benkyō ga suki desu.',
        meaning: 'Saya suka belajar.',
      },
    ],
  },
  {
    character: '強',
    onyomi: 'キョウ (kyou), ゴウ (gou)',
    kunyomi: 'つよい (tsuyoi)',
    meaning: 'Kuat',
    examples: [
      {
        japanese: 'この犬は 強いです。',
        reading: 'Kono inu wa tsuyoi desu.',
        meaning: 'Anjing ini kuat.',
      },
    ],
  },
  {
    character: '何',
    onyomi: 'カ (ka)',
    kunyomi: 'なに / なん (nani/nan)',
    meaning: 'Apa',
    examples: [
      {
        japanese: 'これは 何ですか。',
        reading: 'Kore wa nan desu ka.',
        meaning: 'Ini apa?',
      },
    ],
  },
  {
    character: '回',
    onyomi: 'カイ (kai)',
    kunyomi: 'まわる (mawaru)',
    meaning: 'Kali (frekuensi)',
    examples: [
      {
        japanese: '一回だけ 見ました。',
        reading: 'Ikkai dake mimashita.',
        meaning: 'Saya hanya melihatnya sekali.',
      },
    ],
  },
  {
    character: '多',
    onyomi: 'タ (ta)',
    kunyomi: 'おおい (ooi)',
    meaning: 'Banyak',
    examples: [
      {
        japanese: '人が 多いです。',
        reading: 'Hito ga ōi desu.',
        meaning: 'Orangnya banyak.',
      },
    ],
  },
  {
    character: '少',
    onyomi: 'ショウ (shou)',
    kunyomi: 'すこし (sukoshi), すくない (sukunai)',
    meaning: 'Sedikit',
    examples: [
      {
        japanese: 'お金が 少ないです。',
        reading: 'Okane ga sukunai desu.',
        meaning: 'Saya punya sedikit uang.',
      },
    ],
  },
  {
    character: '上',
    onyomi: 'ジョウ (jou)',
    kunyomi: 'うえ (ue), あがる (agaru)',
    meaning: 'Atas',
    examples: [
      {
        japanese: '本は 机の上に あります。',
        reading: 'Hon wa tsukue no ue ni arimasu.',
        meaning: 'Buku ada di atas meja.',
      },
    ],
  },
  {
    character: '下',
    onyomi: 'カ (ka), ゲ (ge)',
    kunyomi: 'した (shita), さがる (sagaru)',
    meaning: 'Bawah',
    examples: [
      {
        japanese: '鞄は いすの下に あります。',
        reading: 'Kaban wa isu no shita ni arimasu.',
        meaning: 'Tas ada di bawah kursi.',
      },
    ],
  },
  {
    character: '左',
    onyomi: 'サ (sa)',
    kunyomi: 'ひだり (hidari)',
    meaning: 'Kiri',
    examples: [
      {
        japanese: '左手で 書きます。',
        reading: 'Hidarite de kakimasu.',
        meaning: 'Saya menulis dengan tangan kiri.',
      },
    ],
  },
  {
    character: '右',
    onyomi: 'ウ (u), ユウ (yuu)',
    kunyomi: 'みぎ (migi)',
    meaning: 'Kanan',
    examples: [
      {
        japanese: '右に 曲がってください。',
        reading: 'Migi ni magatte kudasai.',
        meaning: 'Silakan belok ke kanan.',
      },
    ],
  },
  {
    character: '長',
    onyomi: 'チョウ (chou)',
    kunyomi: 'ながい (nagai)',
    meaning: 'Panjang / Pemimpin',
    examples: [
      {
        japanese: '長い 話を 聞きました。',
        reading: 'Nagai hanashi o kikimashita.',
        meaning: 'Saya mendengar cerita panjang.',
      },
    ],
  },
  {
    character: '道',
    onyomi: 'ドウ (dou)',
    kunyomi: 'みち (michi)',
    meaning: 'Jalan / Arah',
    examples: [
      {
        japanese: 'この道は 駅へ 行きますか。',
        reading: 'Kono michi wa eki e ikimasu ka.',
        meaning: 'Apakah jalan ini menuju stasiun?',
      },
    ],
  },
  {
    character: '友',
    onyomi: 'ユウ (yuu)',
    kunyomi: 'とも (tomo)',
    meaning: 'Teman',
    examples: [
      {
        japanese: '友だちと あそびます。',
        reading: 'Tomodachi to asobimasu.',
        meaning: 'Saya bermain dengan teman.',
      },
    ],
  },
  {
    character: '午',
    onyomi: 'ゴ (go)',
    kunyomi: '–',
    meaning: 'Siang',
    examples: [
      {
        japanese: '午前10時に 会いましょう。',
        reading: 'Gozen jū-ji ni aimashō.',
        meaning: 'Mari bertemu pukul 10 pagi.',
      },
    ],
  },
  {
    character: '前',
    onyomi: 'ゼン (zen)',
    kunyomi: 'まえ (mae)',
    meaning: 'Sebelum / Depan',
    examples: [
      {
        japanese: '駅の前に 本屋が あります。',
        reading: 'Eki no mae ni hon-ya ga arimasu.',
        meaning: 'Ada toko buku di depan stasiun.',
      },
    ],
  },
  {
    character: '後',
    onyomi: 'ゴ (go), コウ (kou)',
    kunyomi: 'あと (ato), うしろ (ushiro)',
    meaning: 'Setelah / Belakang',
    examples: [
      {
        japanese: '学校の後ろに 公園が あります。',
        reading: 'Gakkō no ushiro ni kōen ga arimasu.',
        meaning: 'Ada taman di belakang sekolah.',
      },
    ],
  },
  {
    character: '教',
    onyomi: 'キョウ (kyou)',
    kunyomi: 'おしえる (oshieru)',
    meaning: 'Mengajar / Ajaran',
    examples: [
      {
        japanese: '先生が 日本語を 教えます。',
        reading: 'Sensei ga Nihongo o oshiemasu.',
        meaning: 'Guru mengajar bahasa Jepang.',
      },
    ],
  },
  {
    character: '晩',
    onyomi: 'バン (ban)',
    kunyomi: '–',
    meaning: 'Malam (waktu)',
    examples: [
      {
        japanese: '今晩 映画を 見ます。',
        reading: 'Konban eiga o mimasu.',
        meaning: 'Malam ini saya akan menonton film.',
      },
    ],
  },
  {
    character: '牛',
    onyomi: 'ギュウ (gyuu)',
    kunyomi: 'うし (ushi)',
    meaning: 'Sapi / Daging sapi',
    examples: [
      {
        japanese: '牛肉が 好きです。',
        reading: 'Gyūniku ga suki desu.',
        meaning: 'Saya suka daging sapi.',
      },
    ],
  },
  {
    character: '魚',
    onyomi: 'ギョ (gyo)',
    kunyomi: 'さかな (sakana)',
    meaning: 'Ikan',
    examples: [
      {
        japanese: '川で 魚を 見ました。',
        reading: 'Kawa de sakana o mimashita.',
        meaning: 'Saya melihat ikan di sungai.',
      },
    ],
  },
  {
    character: '音',
    onyomi: 'オン (on)',
    kunyomi: 'おと (oto)',
    meaning: 'Suara / Bunyi',
    examples: [
      {
        japanese: '音が 大きいです。',
        reading: 'Oto ga ōkii desu.',
        meaning: 'Suaranya keras.',
      },
    ],
  },
  {
    character: '楽',
    onyomi: 'ガク (gaku), ラク (raku)',
    kunyomi: 'たのしい (tanoshii)',
    meaning: 'Menyenangkan / Musik',
    examples: [
      {
        japanese: '音楽が 楽しいです。',
        reading: 'Ongaku ga tanoshii desu.',
        meaning: 'Musik itu menyenangkan.',
      },
    ],
  },
];

export const kanjiN4: any[] = [];
