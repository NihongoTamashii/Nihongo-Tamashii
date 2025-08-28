
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
      { japanese: '本屋', reading: 'ほんや (honya)', meaning: 'Toko buku' },
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
      { japanese: '千円', reading: 'せんえん (senen)', meaning: 'Seribu yen' },
      { japanese: '三千', reading: 'さんぜん (sanzen)', meaning: 'Tiga ribu' },
    ],
  },
  {
    character: '万',
    onyomi: 'マン (man), バン (ban)',
    kunyomi: 'よろず (yorozu)',
    meaning: 'Sepuluh ribu',
    examples: [
      { japanese: '一万円', reading: 'いちまんえん (ichimanen)', meaning: 'Sepuluh ribu yen' },
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
    character: '名',
    onyomi: 'メイ (mei), ミョウ (myō)',
    kunyomi: 'な (na)',
    meaning: 'Nama',
    examples: [
      { japanese: '有名', reading: 'ゆうめい (yūmei)', meaning: 'Terkenal' },
      { japanese: '名前', reading: 'なまえ (namae)', meaning: 'Nama' },
    ],
  },
  {
    character: '学',
    onyomi: 'ガク (gaku)',
    kunyomi: 'まな(ぶ) (mana(bu))',
    meaning: 'Belajar',
    examples: [
      { japanese: '学校', reading: 'がっこう (gakkō)', meaning: 'Sekolah' },
      { japanese: '学生', reading: 'がくせい (gakusei)', meaning: 'Siswa' },
    ],
  },
  {
    character: '校',
    onyomi: 'コウ (kō)',
    kunyomi: '—',
    meaning: 'Sekolah',
    examples: [
      { japanese: '母校', reading: 'ぼこう (bokō)', meaning: 'Almamater' },
      { japanese: '校長', reading: 'こうちょう (kōchō)', meaning: 'Kepala sekolah' },
    ],
  },
  {
    character: '書',
    onyomi: 'ショ (sho)',
    kunyomi: 'か(く) (ka(ku))',
    meaning: 'Menulis',
    examples: [
      { japanese: '辞書', reading: 'じしょ (jisho)', meaning: 'Kamus' },
      { japanese: '図書館', reading: 'としょかん (toshokan)', meaning: 'Perpustakaan' },
    ],
  },
  {
    character: '語',
    onyomi: 'ゴ (go)',
    kunyomi: 'かた(る) (kata(ru))',
    meaning: 'Bahasa, Kata',
    examples: [
      { japanese: '英語', reading: 'えいご (Eigo)', meaning: 'Bahasa Inggris' },
      { japanese: '物語', reading: 'ものがたり (monogatari)', meaning: 'Cerita' },
    ],
  },
  {
    character: '話',
    onyomi: 'ワ (wa)',
    kunyomi: 'はな(す) (hana(su)), はなし (hanashi)',
    meaning: 'Bicara',
    examples: [
      { japanese: '電話', reading: 'でんわ (denwa)', meaning: 'Telepon' },
      { japanese: '会話', reading: 'かいわ (kaiwa)', meaning: 'Percakapan' },
    ],
  },
  {
    character: '何',
    onyomi: 'カ (ka)',
    kunyomi: 'なに (nani), なん (nan)',
    meaning: 'Apa',
    examples: [
      { japanese: '何人', reading: 'なんにん (nan-nin)', meaning: 'Berapa orang' },
      { japanese: '何か', reading: 'なにか (nanika)', meaning: 'Sesuatu' },
    ],
  },
  {
    character: '私',
    onyomi: 'シ (shi)',
    kunyomi: 'わたくし (watakushi), わたし (watashi)',
    meaning: 'Saya',
    examples: [
      { japanese: '私立', reading: 'しりつ (shiritsu)', meaning: 'Swasta' },
      { japanese: '私', reading: 'わたし (watashi)', meaning: 'Saya' },
    ],
  },
  {
    character: '男',
    onyomi: 'ダン (dan), ナン (nan)',
    kunyomi: 'おとこ (otoko)',
    meaning: 'Pria',
    examples: [
      { japanese: '男性', reading: 'だんせい (dansei)', meaning: 'Pria' },
      { japanese: '男の子', reading: 'おとこのこ (otoko no ko)', meaning: 'Anak laki-laki' },
    ],
  },
  {
    character: '女',
    onyomi: 'ジョ (jo), ニョ (nyo)',
    kunyomi: 'おんな (onna), め (me)',
    meaning: 'Wanita',
    examples: [
      { japanese: '女性', reading: 'じょせい (josei)', meaning: 'Wanita' },
      { japanese: '女の子', reading: 'おんなのこ (onna no ko)', meaning: 'Anak perempuan' },
    ],
  },
  {
    character: '子',
    onyomi: 'シ (shi), ス (su)',
    kunyomi: 'こ (ko)',
    meaning: 'Anak',
    examples: [
      { japanese: '子供', reading: 'こども (kodomo)', meaning: 'Anak-anak' },
      { japanese: '電子', reading: 'でんし (denshi)', meaning: 'Elektronik' },
    ],
  },
  {
    character: '先',
    onyomi: 'セン (sen)',
    kunyomi: 'さき (saki)',
    meaning: 'Dulu, Depan',
    examples: [
      { japanese: '先生', reading: 'せんせい (sensei)', meaning: 'Guru' },
      { japanese: '先月', reading: 'せんげつ (sengetsu)', meaning: 'Bulan lalu' },
    ],
  },
  {
    character: '車',
    onyomi: 'シャ (sha)',
    kunyomi: 'くるま (kuruma)',
    meaning: 'Mobil, Kendaraan',
    examples: [
      { japanese: '電車', reading: 'でんしゃ (densha)', meaning: 'Kereta listrik' },
      { japanese: '自動車', reading: 'じどうしゃ (jidōsha)', meaning: 'Mobil' },
    ],
  },
  {
    character: '毎',
    onyomi: 'マイ (mai)',
    kunyomi: 'ごと (goto)',
    meaning: 'Setiap',
    examples: [
      { japanese: '毎日', reading: 'まいにち (mainichi)', meaning: 'Setiap hari' },
      { japanese: '毎週', reading: 'まいしゅう (maishū)', meaning: 'Setiap minggu' },
    ],
  },
  {
    character: '会',
    onyomi: 'カイ (kai), エ (e)',
    kunyomi: 'あ(う) (a(u))',
    meaning: 'Bertemu, Perkumpulan',
    examples: [
      { japanese: '会社', reading: 'かいしゃ (kaisha)', meaning: 'Perusahaan' },
      { japanese: '会話', reading: 'かいわ (kaiwa)', meaning: 'Percakapan' },
    ],
  },
  {
    character: '母',
    onyomi: 'ボ (bo)',
    kunyomi: 'はは (haha)',
    meaning: 'Ibu',
    examples: [
      { japanese: '母国', reading: 'ぼこく (bokoku)', meaning: 'Tanah air' },
      { japanese: 'お母さん', reading: 'おかあさん (okāsan)', meaning: 'Ibu' },
    ],
  },
  {
    character: '父',
    onyomi: 'フ (fu)',
    kunyomi: 'ちち (chichi)',
    meaning: 'Ayah',
    examples: [
      { japanese: '父母', reading: 'ふぼ (fubo)', meaning: 'Ayah dan Ibu' },
      { japanese: 'お父さん', reading: 'おとうさん (otōsan)', meaning: 'Ayah' },
    ],
  },
  {
    character: '読',
    onyomi: 'ドク (doku), トク (toku)',
    kunyomi: 'よ(む) (yo(mu))',
    meaning: 'Membaca',
    examples: [
      { japanese: '読書', reading: 'どくしょ (dokusho)', meaning: 'Membaca buku' },
      { japanese: '読み物', reading: 'よみもの (yomimono)', meaning: 'Bacaan' },
    ],
  },
  {
    character: '聞',
    onyomi: 'ブン (bun), モン (mon)',
    kunyomi: 'き(く) (ki(ku))',
    meaning: 'Mendengar, Bertanya',
    examples: [
      { japanese: '新聞', reading: 'しんぶん (shinbun)', meaning: 'Koran' },
      { japanese: '聞く', reading: 'きく (kiku)', meaning: 'Mendengar' },
    ],
  },
  {
    character: '食',
    onyomi: 'ショク (shoku), ジキ (jiki)',
    kunyomi: 'く(う) (ku(u)), た(べる) (ta(beru))',
    meaning: 'Makan',
    examples: [
      { japanese: '食堂', reading: 'しょくどう (shokudō)', meaning: 'Kantin' },
      { japanese: '食べ物', reading: 'たべもの (tabemono)', meaning: 'Makanan' },
    ],
  },
  {
    character: '買',
    onyomi: 'バイ (bai)',
    kunyomi: 'か(う) (ka(u))',
    meaning: 'Membeli',
    examples: [
      { japanese: '売買', reading: 'ばいばい (baibai)', meaning: 'Jual beli' },
      { japanese: '買い物', reading: 'かいもの (kaimono)', meaning: 'Belanja' },
    ],
  },
  {
    character: '来',
    onyomi: 'ライ (rai)',
    kunyomi: 'く(る) (ku(ru)), き(ます) (ki(masu))',
    meaning: 'Datang',
    examples: [
      { japanese: '来週', reading: 'らいしゅう (raishū)', meaning: 'Minggu depan' },
      { japanese: '来ます', reading: 'きます (kimasu)', meaning: 'Datang' },
    ],
  },
  {
    character: '百',
    onyomi: 'ヒャク (hyaku)',
    kunyomi: '-',
    meaning: 'Seratus',
    examples: [
      { japanese: '百円です。', reading: 'ひゃくえんです (hyakuen desu)', meaning: 'Itu seratus yen.' },
    ],
  },
  {
    character: '千',
    onyomi: 'セン (sen)',
    kunyomi: 'ち (chi)',
    meaning: 'Seribu',
    examples: [
      { japanese: '千人が来ました。', reading: 'せんにんがきました (sennin ga kimashita)', meaning: 'Seribu orang datang.' },
    ],
  },
  {
    character: '飲',
    onyomi: 'イン (in)',
    kunyomi: 'のむ (nomu)',
    meaning: 'Minum',
    examples: [
      { japanese: '水を飲みます。', reading: 'みずをのみます (mizu o nomimasu)', meaning: 'Saya minum air.' },
    ],
  },
  {
    character: '起',
    onyomi: 'キ (ki)',
    kunyomi: 'おきる (okiru)',
    meaning: 'Bangun / Bangkit',
    examples: [
      { japanese: '毎朝6時に起きます。', reading: 'まいあさろくじにおきます (maiasa 6-ji ni okimasu)', meaning: 'Saya bangun pukul 6 setiap pagi.' },
    ],
  },
  {
    character: '走',
    onyomi: 'ソウ (sou)',
    kunyomi: 'はしる (hashiru)',
    meaning: 'Berlari',
    examples: [
      { japanese: '公園で走ります。', reading: 'こうえんではしります (kōen de hashirimasu)', meaning: 'Saya berlari di taman.' },
    ],
  },
  {
    character: '勉',
    onyomi: 'ベン (ben)',
    kunyomi: '-',
    meaning: 'Belajar (berusaha)',
    examples: [
      { japanese: '勉強が好きです。', reading: 'べんきょうがすきです (benkyō ga suki desu)', meaning: 'Saya suka belajar.' },
    ],
  },
  {
    character: '強',
    onyomi: 'キョウ (kyou), ゴウ (gou)',
    kunyomi: 'つよい (tsuyoi)',
    meaning: 'Kuat',
    examples: [
      { japanese: 'この犬は強いです。', reading: 'このいぬはつよいです (kono inu wa tsuyoi desu)', meaning: 'Anjing ini kuat.' },
    ],
  },
  {
    character: '分',
    onyomi: 'ブン (bun), フン (fun)',
    kunyomi: 'わける (wakeru)',
    meaning: 'Menit / Bagian',
    examples: [
      { japanese: '五分待ってください。', reading: 'ごふんまってください (gofun matte kudasai)', meaning: 'Tolong tunggu 5 menit.' },
    ],
  },
  {
    character: '回',
    onyomi: 'カイ (kai)',
    kunyomi: 'まわる (mawaru)',
    meaning: 'Kali (frekuensi)',
    examples: [
      { japanese: '一回だけ見ました。', reading: 'いっかいだけみました (ikkai dake mimashita)', meaning: 'Saya hanya melihatnya sekali.' },
    ],
  },
  {
    character: '多',
    onyomi: 'タ (ta)',
    kunyomi: 'おおい (ooi)',
    meaning: 'Banyak',
    examples: [
      { japanese: '人が多いです。', reading: 'ひとがおおいです (hito ga ooi desu)', meaning: 'Orangnya banyak.' },
    ],
  },
  {
    character: '少',
    onyomi: 'ショウ (shou)',
    kunyomi: 'すこし (sukoshi), すくない (sukunai)',
    meaning: 'Sedikit',
    examples: [
      { japanese: 'お金が少ないです。', reading: 'おかねがすくないです (okane ga sukunai desu)', meaning: 'Saya punya sedikit uang.' },
    ],
  },
  {
    character: '上',
    onyomi: 'ジョウ (jou)',
    kunyomi: 'うえ (ue), あがる (agaru)',
    meaning: 'Atas',
    examples: [
      { japanese: '本は机の上にあります。', reading: 'ほんはつくえのうえにあります (hon wa tsukue no ue ni arimasu)', meaning: 'Buku ada di atas meja.' },
    ],
  },
  {
    character: '下',
    onyomi: 'カ (ka), ゲ (ge)',
    kunyomi: 'した (shita), さがる (sagaru)',
    meaning: 'Bawah',
    examples: [
      { japanese: '鞄はいすの下にあります。', reading: 'かばんはいすのしたにあります (kaban wa isu no shita ni arimasu)', meaning: 'Tas ada di bawah kursi.' },
    ],
  },
  {
    character: '左',
    onyomi: 'サ (sa)',
    kunyomi: 'ひだり (hidari)',
    meaning: 'Kiri',
    examples: [
      { japanese: '左手で書きます。', reading: 'ひだりでかきます (hidarite de kakimasu)', meaning: 'Saya menulis dengan tangan kiri.' },
    ],
  },
  {
    character: '右',
    onyomi: 'ウ (u), ユウ (yuu)',
    kunyomi: 'みぎ (migi)',
    meaning: 'Kanan',
    examples: [
      { japanese: '右に曲がってください。', reading: 'みぎにまがってください (migi ni magatte kudasai)', meaning: 'Silakan belok ke kanan.' },
    ],
  },
  {
    character: '長',
    onyomi: 'チョウ (chou)',
    kunyomi: 'ながい (nagai)',
    meaning: 'Panjang / Pemimpin',
    examples: [
      { japanese: '長い話を聞きました。', reading: 'ながいはなしをききました (nagai hanashi o kikimashita)', meaning: 'Saya mendengar cerita panjang.' },
    ],
  },
];

export const kanjiN4: any[] = [];
