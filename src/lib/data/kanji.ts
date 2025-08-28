
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
  {
    character: '四',
    onyomi: 'シ (shi)',
    kunyomi: 'よん (yon), よっ(つ) (yot(tsu))',
    meaning: 'Empat',
    examples: [
      { japanese: '四日', reading: 'よっか', meaning: 'Tanggal 4' },
      { japanese: '四つ', reading: 'よっつ', meaning: 'Empat buah' },
      { japanese: '四月', reading: 'しがつ', meaning: 'April' },
    ],
  },
  {
    character: '金',
    onyomi: 'キン (kin)',
    kunyomi: 'かね (kane)',
    meaning: 'Emas, Uang',
    examples: [
      { japanese: '金曜日', reading: 'きんようび', meaning: 'Hari Jumat' },
      { japanese: 'お金', reading: 'おかね', meaning: 'Uang' },
      { japanese: '料金', reading: 'りょうきん', meaning: 'Biaya' },
    ],
  },
  {
    character: '九',
    onyomi: 'キュウ (kyuu), ク (ku)',
    kunyomi: 'ここの(つ) (kokono(tsu))',
    meaning: 'Sembilan',
    examples: [
      { japanese: '九日', reading: 'ここのか', meaning: 'Tanggal 9' },
      { japanese: '九つ', reading: 'ここのつ', meaning: 'Sembilan buah' },
      { japanese: '九月', reading: 'くがつ', meaning: 'September' },
    ],
  },
  {
    character: '入',
    onyomi: 'ニュウ (nyuu)',
    kunyomi: 'はい(る) (hai(ru)), い(れる) (i(reru))',
    meaning: 'Masuk',
    examples: [
      { japanese: '入る', reading: 'はいる', meaning: 'Masuk' },
      { japanese: '入れる', reading: 'いれる', meaning: 'Memasukkan' },
      { japanese: '入口', reading: 'いりぐち', meaning: 'Pintu masuk' },
    ],
  },
  {
    character: '学',
    onyomi: 'ガク (gaku)',
    kunyomi: 'まな(ぶ) (mana(bu))',
    meaning: 'Belajar',
    examples: [
      { japanese: '学校', reading: 'がっこう', meaning: 'Sekolah' },
      { japanese: '学生', reading: 'がくせい', meaning: 'Siswa' },
      { japanese: '大学', reading: 'だいがく', meaning: 'Universitas' },
    ],
  },
  {
    character: '高',
    onyomi: 'コウ (kou)',
    kunyomi: 'たか(い) (taka(i))',
    meaning: 'Tinggi, Mahal',
    examples: [
      { japanese: '高い', reading: 'たかい', meaning: 'Tinggi, mahal' },
      { japanese: '高校', reading: 'こうこう', meaning: 'SMA' },
      { japanese: '最高', reading: 'さいこう', meaning: 'Tertinggi, terbaik' },
    ],
  },
  {
    character: '円',
    onyomi: 'エン (en)',
    kunyomi: 'まる(い) (maru(i))',
    meaning: 'Yen, Bulat',
    examples: [
      { japanese: '百円', reading: 'ひゃくえん', meaning: 'Seratus yen' },
      { japanese: '円', reading: 'えん', meaning: 'Yen' },
      { japanese: '円い', reading: 'まるい', meaning: 'Bulat' },
    ],
  },
  {
    character: '子',
    onyomi: 'シ (shi), ス (su)',
    kunyomi: 'こ (ko)',
    meaning: 'Anak',
    examples: [
      { japanese: '子供', reading: 'こども', meaning: 'Anak-anak' },
      { japanese: '女の子', reading: 'おんなのこ', meaning: 'Anak perempuan' },
      { japanese: '男子', reading: 'だんし', meaning: 'Anak laki-laki' },
    ],
  },
  {
    character: '外',
    onyomi: 'ガイ (gai), ゲ (ge)',
    kunyomi: 'そと (soto), ほか (hoka)',
    meaning: 'Luar',
    examples: [
      { japanese: '外国', reading: 'がいこく', meaning: 'Luar negeri' },
      { japanese: '外', reading: 'そと', meaning: 'Luar' },
      { japanese: '海外', reading: 'かいがい', meaning: 'Luar negeri (seberang laut)' },
    ],
  },
  {
    character: '八',
    onyomi: 'ハチ (hachi)',
    kunyomi: 'やっ(つ) (yat(tsu))',
    meaning: 'Delapan',
    examples: [
      { japanese: '八日', reading: 'ようか', meaning: 'Tanggal 8' },
      { japanese: '八つ', reading: 'やっつ', meaning: 'Delapan buah' },
      { japanese: '八月', reading: 'はちがつ', meaning: 'Agustus' },
    ],
  },
  {
    character: '六',
    onyomi: 'ロク (roku)',
    kunyomi: 'むっ(つ) (mut(tsu))',
    meaning: 'Enam',
    examples: [
      { japanese: '六日', reading: 'むいか', meaning: 'Tanggal 6' },
      { japanese: '六つ', reading: 'むっつ', meaning: 'Enam buah' },
      { japanese: '六月', reading: 'ろくがつ', meaning: 'Juni' },
    ],
  },
  {
    character: '下',
    onyomi: 'カ (ka), ゲ (ge)',
    kunyomi: 'した (shita), さ(がる) (sa(garu))',
    meaning: 'Bawah',
    examples: [
      { japanese: '下', reading: 'した', meaning: 'Bawah' },
      { japanese: '地下鉄', reading: 'ちかてつ', meaning: 'Kereta bawah tanah' },
      { japanese: '下手', reading: 'へた', meaning: 'Tidak pandai' },
    ],
  },
  {
    character: '来',
    onyomi: 'ライ (rai)',
    kunyomi: 'く(る) (ku(ru))',
    meaning: 'Datang',
    examples: [
      { japanese: '来る', reading: 'くる', meaning: 'Datang' },
      { japanese: '来週', reading: 'らいしゅう', meaning: 'Minggu depan' },
      { japanese: '来年', reading: 'らいねん', meaning: 'Tahun depan' },
    ],
  },
  {
    character: '気',
    onyomi: 'キ (ki), ケ (ke)',
    kunyomi: 'いき (iki)',
    meaning: 'Udara, Roh',
    examples: [
      { japanese: '元気', reading: 'げんき', meaning: 'Sehat' },
      { japanese: '天気', reading: 'てんき', meaning: 'Cuaca' },
      { japanese: '電気', reading: 'でんき', meaning: 'Listrik' },
    ],
  },
  {
    character: '小',
    onyomi: 'ショウ (shou)',
    kunyomi: 'ちい(さい) (chii(sai))',
    meaning: 'Kecil',
    examples: [
      { japanese: '小さい', reading: 'ちいさい', meaning: 'Kecil' },
      { japanese: '小学校', reading: 'しょうがっこう', meaning: 'Sekolah Dasar' },
      { japanese: '小説', reading: 'しょうせつ', meaning: 'Novel' },
    ],
  },
  {
    character: '七',
    onyomi: 'シチ (shichi)',
    kunyomi: 'なな(つ) (nana(tsu))',
    meaning: 'Tujuh',
    examples: [
      { japanese: '七日', reading: 'なのか', meaning: 'Tanggal 7' },
      { japanese: '七つ', reading: 'ななつ', meaning: 'Tujuh buah' },
      { japanese: '七月', reading: 'しちがつ', meaning: 'Juli' },
    ],
  },
  {
    character: '山',
    onyomi: 'サン (san)',
    kunyomi: 'やま (yama)',
    meaning: 'Gunung',
    examples: [
      { japanese: '山', reading: 'やま', meaning: 'Gunung' },
      { japanese: '富士山', reading: 'ふじさん', meaning: 'Gunung Fuji' },
      { japanese: '火山', reading: 'かざん', meaning: 'Gunung berapi' },
    ],
  },
  {
    character: '話',
    onyomi: 'ワ (wa)',
    kunyomi: 'はな(す) (hana(su))',
    meaning: 'Berbicara',
    examples: [
      { japanese: '話す', reading: 'はなす', meaning: 'Berbicara' },
      { japanese: '電話', reading: 'でんわ', meaning: 'Telepon' },
      { japanese: '会話', reading: 'かいわ', meaning: 'Percakapan' },
    ],
  },
  {
    character: '女',
    onyomi: 'ジョ (jo)',
    kunyomi: 'おんな (onna)',
    meaning: 'Perempuan',
    examples: [
      { japanese: '女の人', reading: 'おんなのひと', meaning: 'Perempuan' },
      { japanese: '彼女', reading: 'かのじょ', meaning: 'Dia (perempuan)' },
      { japanese: '女性', reading: 'じょせい', meaning: 'Wanita' },
    ],
  },
  {
    character: '北',
    onyomi: 'ホク (hoku)',
    kunyomi: 'きた (kita)',
    meaning: 'Utara',
    examples: [
      { japanese: '北', reading: 'きた', meaning: 'Utara' },
      { japanese: '北口', reading: 'きたぐち', meaning: 'Pintu utara' },
      { japanese: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' },
    ],
  },
  {
    character: '午',
    onyomi: 'ゴ (go)',
    kunyomi: 'うま (uma)',
    meaning: 'Siang',
    examples: [
      { japanese: '午前', reading: 'ごぜん', meaning: 'Pagi hari (A.M.)' },
      { japanese: '午後', reading: 'ごご', meaning: 'Sore hari (P.M.)' },
      { japanese: '正午', reading: 'しょうご', meaning: 'Tengah hari' },
    ],
  },
  {
    character: '百',
    onyomi: 'ヒャク (hyaku)',
    kunyomi: 'もも (momo)',
    meaning: 'Seratus',
    examples: [
      { japanese: '百', reading: 'ひゃく', meaning: 'Seratus' },
      { japanese: '三百', reading: 'さんびゃく', meaning: 'Tiga ratus' },
      { japanese: '八百屋', reading: 'やおや', meaning: 'Toko sayur' },
    ],
  },
  {
    character: '書',
    onyomi: 'ショ (sho)',
    kunyomi: 'か(く) (ka(ku))',
    meaning: 'Menulis',
    examples: [
      { japanese: '書く', reading: 'かく', meaning: 'Menulis' },
      { japanese: '図書館', reading: 'としょかん', meaning: 'Perpustakaan' },
      { japanese: '辞書', reading: 'じしょ', meaning: 'Kamus' },
    ],
  },
  {
    character: '先',
    onyomi: 'セン (sen)',
    kunyomi: 'さき (saki)',
    meaning: 'Dahulu',
    examples: [
      { japanese: '先生', reading: 'せんせい', meaning: 'Guru' },
      { japanese: '先週', reading: 'せんしゅう', meaning: 'Minggu lalu' },
      { japanese: '先月', reading: 'せんげつ', meaning: 'Bulan lalu' },
    ],
  },
  {
    character: '名',
    onyomi: 'メイ (mei), ミョウ (myou)',
    kunyomi: 'な (na)',
    meaning: 'Nama',
    examples: [
      { japanese: '名前', reading: 'なまえ', meaning: 'Nama' },
      { japanese: '有名', reading: 'ゆうめい', meaning: 'Terkenal' },
      { japanese: '名人', reading: 'めいじん', meaning: 'Ahli' },
    ],
  },
  {
    character: '川',
    onyomi: 'セン (sen)',
    kunyomi: 'かわ (kawa)',
    meaning: 'Sungai',
    examples: [
      { japanese: '川', reading: 'かわ', meaning: 'Sungai' },
      { japanese: '山川', reading: 'やまかわ', meaning: 'Yamakawa (nama)' },
      { japanese: '小川', reading: 'おがわ', meaning: 'Anak sungai' },
    ],
  },
  {
    character: '千',
    onyomi: 'セン (sen)',
    kunyomi: 'ち (chi)',
    meaning: 'Seribu',
    examples: [
      { japanese: '千', reading: 'せん', meaning: 'Seribu' },
      { japanese: '三千', reading: 'さんぜん', meaning: 'Tiga ribu' },
      { japanese: '千葉', reading: 'ちば', meaning: 'Chiba (prefektur)' },
    ],
  },
  {
    character: '水',
    onyomi: 'スイ (sui)',
    kunyomi: 'みず (mizu)',
    meaning: 'Air',
    examples: [
      { japanese: '水', reading: 'みず', meaning: 'Air' },
      { japanese: '水曜日', reading: 'すいようび', meaning: 'Hari Rabu' },
      { japanese: '水泳', reading: 'すいえい', meaning: 'Berenang' },
    ],
  },
  {
    character: '半',
    onyomi: 'ハン (han)',
    kunyomi: 'なか(ば) (naka(ba))',
    meaning: 'Setengah',
    examples: [
      { japanese: '半分', reading: 'はんぶん', meaning: 'Setengah bagian' },
      { japanese: '三時半', reading: 'さんじはん', meaning: 'Jam setengah empat' },
      { japanese: '半年', reading: 'はんとし', meaning: 'Setengah tahun' },
    ],
  },
  {
    character: '男',
    onyomi: 'ダン (dan), ナン (nan)',
    kunyomi: 'おとこ (otoko)',
    meaning: 'Laki-laki',
    examples: [
      { japanese: '男の人', reading: 'おとこのひと', meaning: 'Laki-laki' },
      { japanese: '男の子', reading: 'おとこのこ', meaning: 'Anak laki-laki' },
      { japanese: '男性', reading: 'だんせい', meaning: 'Pria' },
    ],
  },
  {
    character: '西',
    onyomi: 'セイ (sei), サイ (sai)',
    kunyomi: 'にし (nishi)',
    meaning: 'Barat',
    examples: [
      { japanese: '西', reading: 'にし', meaning: 'Barat' },
      { japanese: '西口', reading: 'にしぐち', meaning: 'Pintu barat' },
      { japanese: '東西', reading: 'とうざい', meaning: 'Timur dan Barat' },
    ],
  },
  {
    character: '電',
    onyomi: 'デン (den)',
    kunyomi: '',
    meaning: 'Listrik',
    examples: [
      { japanese: '電気', reading: 'でんき', meaning: 'Listrik' },
      { japanese: '電話', reading: 'でんわ', meaning: 'Telepon' },
      { japanese: '電車', reading: 'でんしゃ', meaning: 'Kereta listrik' },
    ],
  },
  {
    character: '校',
    onyomi: 'コウ (kou)',
    kunyomi: '',
    meaning: 'Sekolah',
    examples: [
      { japanese: '学校', reading: 'がっこう', meaning: 'Sekolah' },
      { japanese: '小学校', reading: 'しょうがっこう', meaning: 'Sekolah Dasar' },
      { japanese: '校長', reading: 'こうちょう', meaning: 'Kepala sekolah' },
    ],
  },
  {
    character: '語',
    onyomi: 'ゴ (go)',
    kunyomi: 'かた(る) (kata(ru))',
    meaning: 'Bahasa, Kata',
    examples: [
      { japanese: '日本語', reading: 'にほんご', meaning: 'Bahasa Jepang' },
      { japanese: '英語', reading: 'えいご', meaning: 'Bahasa Inggris' },
      { japanese: '物語', reading: 'ものがたり', meaning: 'Cerita' },
    ],
  },
  {
    character: '土',
    onyomi: 'ド (do), ト (to)',
    kunyomi: 'つち (tsuchi)',
    meaning: 'Tanah',
    examples: [
      { japanese: '土曜日', reading: 'どようび', meaning: 'Hari Sabtu' },
      { japanese: '土地', reading: 'とち', meaning: 'Tanah' },
      { japanese: '土', reading: 'つち', meaning: 'Tanah' },
    ],
  },
  {
    character: '木',
    onyomi: 'ボク (boku), モク (moku)',
    kunyomi: 'き (ki), こ- (ko-)',
    meaning: 'Pohon, Kayu',
    examples: [
      { japanese: '木', reading: 'き', meaning: 'Pohon' },
      { japanese: '木曜日', reading: 'もくようび', meaning: 'Hari Kamis' },
      { japanese: '木村', reading: 'きむら', meaning: 'Kimura (nama)' },
    ],
  },
  {
    character: '聞',
    onyomi: 'ブン (bun), モン (mon)',
    kunyomi: 'き(く) (ki(ku))',
    meaning: 'Mendengar',
    examples: [
      { japanese: '聞く', reading: 'きく', meaning: 'Mendengar' },
      { japanese: '新聞', reading: 'しんぶん', meaning: 'Koran' },
      { japanese: '聞こえる', reading: 'きこえる', meaning: 'Terdengar' },
    ],
  },
  {
    character: '食',
    onyomi: 'ショク (shoku)',
    kunyomi: 'た(べる) (ta(beru))',
    meaning: 'Makan',
    examples: [
      { japanese: '食べる', reading: 'たべる', meaning: 'Makan' },
      { japanese: '食堂', reading: 'しょくどう', meaning: 'Kantin' },
      { japanese: '食べ物', reading: 'たべもの', meaning: 'Makanan' },
    ],
  },
  {
    character: '車',
    onyomi: 'シャ (sha)',
    kunyomi: 'くるま (kuruma)',
    meaning: 'Mobil, Kendaraan',
    examples: [
      { japanese: '車', reading: 'くるま', meaning: 'Mobil' },
      { japanese: '電車', reading: 'でんしゃ', meaning: 'Kereta listrik' },
      { japanese: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'Tempat parkir' },
    ],
  },
  {
    character: '何',
    onyomi: 'カ (ka)',
    kunyomi: 'なに (nani), なん (nan)',
    meaning: 'Apa',
    examples: [
      { japanese: '何', reading: 'なに', meaning: 'Apa' },
      { japanese: '何時', reading: 'なんじ', meaning: 'Jam berapa' },
      { japanese: '何か', reading: 'なにか', meaning: 'Sesuatu' },
    ],
  },
  {
    character: '南',
    onyomi: 'ナン (nan)',
    kunyomi: 'みなみ (minami)',
    meaning: 'Selatan',
    examples: [
      { japanese: '南', reading: 'みなみ', meaning: 'Selatan' },
      { japanese: '南口', reading: 'みなみぐち', meaning: 'Pintu selatan' },
      { japanese: '東南', reading: 'とうなん', meaning: 'Tenggara' },
    ],
  },
  {
    character: '万',
    onyomi: 'マン (man), バン (ban)',
    kunyomi: '',
    meaning: 'Sepuluh ribu',
    examples: [
      { japanese: '一万', reading: 'いちまん', meaning: 'Sepuluh ribu' },
      { japanese: '百万人', reading: 'ひゃくまんにん', meaning: 'Satu juta orang' },
      { japanese: '万歳', reading: 'ばんざい', meaning: 'Hore! (Banzai)' },
    ],
  },
  {
    character: '毎',
    onyomi: 'マイ (mai)',
    kunyomi: 'ごと (goto)',
    meaning: 'Setiap',
    examples: [
      { japanese: '毎日', reading: 'まいにち', meaning: 'Setiap hari' },
      { japanese: '毎週', reading: 'まいしゅう', meaning: 'Setiap minggu' },
      { japanese: '毎月', reading: 'まいつき', meaning: 'Setiap bulan' },
    ],
  },
  {
    character: '白',
    onyomi: 'ハク (haku), ビャク (byaku)',
    kunyomi: 'しろ(い) (shiro(i))',
    meaning: 'Putih',
    examples: [
      { japanese: '白い', reading: 'しろい', meaning: 'Putih' },
      { japanese: '白鳥', reading: 'はくちょう', meaning: 'Angsa' },
      { japanese: '面白い', reading: 'おもしろい', meaning: 'Menarik' },
    ],
  },
  {
    character: '天',
    onyomi: 'テン (ten)',
    kunyomi: 'あめ (ame), あま (ama)',
    meaning: 'Langit',
    examples: [
      { japanese: '天気', reading: 'てんき', meaning: 'Cuaca' },
      { japanese: '天国', reading: 'てんごく', meaning: 'Surga' },
      { japanese: '天才', reading: 'てんさい', meaning: 'Jenius' },
    ],
  },
  {
    character: '母',
    onyomi: 'ボ (bo)',
    kunyomi: 'はは (haha)',
    meaning: 'Ibu',
    examples: [
      { japanese: '母', reading: 'はは', meaning: 'Ibu (saya)' },
      { japanese: 'お母さん', reading: 'おかあさん', meaning: 'Ibu (orang lain)' },
      { japanese: '母国語', reading: 'ぼこくご', meaning: 'Bahasa ibu' },
    ],
  },
  {
    character: '火',
    onyomi: 'カ (ka)',
    kunyomi: 'ひ (hi), -び (-bi)',
    meaning: 'Api',
    examples: [
      { japanese: '火曜日', reading: 'かようび', meaning: 'Hari Selasa' },
      { japanese: '花火', reading: 'はなび', meaning: 'Kembang api' },
      { japanese: '火事', reading: 'かじ', meaning: 'Kebakaran' },
    ],
  },
  {
    character: '右',
    onyomi: 'ウ (u), ユウ (yuu)',
    kunyomi: 'みぎ (migi)',
    meaning: 'Kanan',
    examples: [
      { japanese: '右', reading: 'みぎ', meaning: 'Kanan' },
      { japanese: '右手', reading: 'みぎて', meaning: 'Tangan kanan' },
      { japanese: '左右', reading: 'さゆう', meaning: 'Kiri dan kanan' },
    ],
  },
  {
    character: '読',
    onyomi: 'ドク (doku), トク (toku)',
    kunyomi: 'よ(む) (yo(mu))',
    meaning: 'Membaca',
    examples: [
      { japanese: '読む', reading: 'よむ', meaning: 'Membaca' },
      { japanese: '読書', reading: 'どくしょ', meaning: 'Membaca buku' },
      { japanese: '読み方', reading: 'よみかた', meaning: 'Cara membaca' },
    ],
  },
  {
    character: '友',
    onyomi: 'ユウ (yuu)',
    kunyomi: 'とも (tomo)',
    meaning: 'Teman',
    examples: [
      { japanese: '友達', reading: 'ともだち', meaning: 'Teman' },
      { japanese: '親友', reading: 'しんゆう', meaning: 'Sahabat' },
      { japanese: '友人', reading: 'ゆうじん', meaning: 'Teman' },
    ],
  },
  {
    character: '左',
    onyomi: 'サ (sa)',
    kunyomi: 'ひだり (hidari)',
    meaning: 'Kiri',
    examples: [
      { japanese: '左', reading: 'ひだり', meaning: 'Kiri' },
      { japanese: '左手', reading: 'ひだりて', meaning: 'Tangan kiri' },
      { japanese: '左側', reading: 'ひだりがわ', meaning: 'Sisi kiri' },
    ],
  },
  {
    character: '休',
    onyomi: 'キュウ (kyuu)',
    kunyomi: 'やす(む) (yasu(mu))',
    meaning: 'Istirahat',
    examples: [
      { japanese: '休む', reading: 'やすむ', meaning: 'Istirahat' },
      { japanese: '休み', reading: 'やすみ', meaning: 'Libur' },
      { japanese: '休憩', reading: 'きゅうけい', meaning: 'Istirahat sejenak' },
    ],
  },
  {
    character: '父',
    onyomi: 'フ (fu)',
    kunyomi: 'ちち (chichi)',
    meaning: 'Ayah',
    examples: [
      { japanese: '父', reading: 'ちち', meaning: 'Ayah (saya)' },
      { japanese: 'お父さん', reading: 'おとうさん', meaning: 'Ayah (orang lain)' },
      { japanese: '祖父', reading: 'そふ', meaning: 'Kakek' },
    ],
  },
  {
    character: '雨',
    onyomi: 'ウ (u)',
    kunyomi: 'あめ (ame), あま- (ama-)',
    meaning: 'Hujan',
    examples: [
      { japanese: '雨', reading: 'あめ', meaning: 'Hujan' },
      { japanese: '大雨', reading: 'おおあめ', meaning: 'Hujan deras' },
      { japanese: '雨天', reading: 'うてん', meaning: 'Cuaca hujan' },
    ],
  }
];

export const kanjiN4: any[] = [];

