
export interface ParticleExample {
  title: string;
  description: string;
  examples: Array<{
    romaji: string;
    japanese: string;
    translation: string;
  }>;
}

export interface ParticleData {
  title: string;
  particle: string;
  meaning: string;
  usages: ParticleExample[];
}

export const deParticle: ParticleData = {
  title: "Partikel DE で",
  particle: "で",
  meaning: "Secara umum berarti 'dengan, di, sebab'",
  usages: [
    {
      title: "1. Menunjukkan alat, bahan dsb yang digunakan.",
      description: "'dengan'",
      examples: [
        {
          romaji: "Yakan de yu o wakashimasu.",
          japanese: "やかんで湯を沸かします。",
          translation: "Memasak air dengan cerek.",
        },
        {
          romaji: "Ichinichi o dokusho de sugoshimasu.",
          japanese: "一日を読書で過ごします。",
          translation: "Melewatkan hari dengan membaca buku.",
        },
      ],
    },
    {
      title: "2. Menunjukkan tempat di mana sesuatu hal dilakukan/terjadi.",
      description: "'di'",
      examples: [
        {
          romaji: "Resutoran de rāmen o tabemasu.",
          japanese: "レストランでラーメンを食べます。",
          translation: "Makan ramen di restoran.",
        },
        {
          romaji: "Sakuban sakka no shiai o terebi de mimashita.",
          japanese: "昨晩サッカーの試合をテレビで見ました。",
          translation: "Tadi malam saya telah menonton pertandingan sepak bola di televisi.",
        },
      ],
    },
    {
      title: "3. Menunjukkan penyebab/alasan.",
      description: "'karena, sebab'",
      examples: [
        {
          romaji: "Kōtsū jiko de shinimashita.",
          japanese: "交通事故で死にました。",
          translation: "Telah mati karena kecelakaan lalu lintas.",
        },
        {
          romaji: "Mainichi gakkō no jugyō de isogashii desu.",
          japanese: "毎日学校の授業で忙しいです。",
          translation: "Tiap hari sibuk karena pelajaran universitas.",
        },
      ],
    },
    {
      title: "4. Menunjukkan waktu/jumlah/harga yg diperlukan.",
      description: "'dalam, dengan'",
      examples: [
        {
          romaji: "Gojikan de dekiagarimashita.",
          japanese: "五時間で出来上がりました。",
          translation: "Selesai/rampung dalam waktu 5 jam.",
        },
        {
          romaji: "Ichiman-en de kaimashita.",
          japanese: "一万円で買いました。",
          translation: "Telah membeli dengan harga 10000 yen.",
        },
      ],
    },
    {
      title: "5. Menunjukkan berapa orang mengerjakan sesuatu.",
      description: "",
      examples: [
        {
          romaji: "Futari de kono apāto ni sunde imasu.",
          japanese: "二人でこのアパートに住んでいます。",
          translation: "Saya tinggal berdua di apartemen ini",
        },
        {
          romaji: "Minna de issho ni utaimashō.",
          japanese: "みんなで一緒に歌いましょう。",
          translation: "Mari kita bernyanyi bersama beramai-ramai!",
        },
      ],
    },
  ],
};

export const eParticle: ParticleData = {
  title: "Partikel E へ",
  particle: "へ",
  meaning: "Partikel E へ (ditulis he へ) secara umum berarti 'ke'",
  usages: [
    {
      title: "1. Menunjukkan arah gerakan.",
      description: "'ke ...'",
      examples: [
        {
          romaji: "Itsu Bari e ikimasu ka.",
          japanese: "いつバリへ行きますか。",
          translation: "Kapan Anda akan pergi ke Bali.",
        },
        {
          romaji: "Kyō wa doko e odekake desu ka.",
          japanese: "今日はどこへお出かけですか。",
          translation: "Hari ini Anda mau pergi ke mana?",
        },
      ],
    },
    {
      title: "2. Menunjukkan penerima suatu perbuatan.",
      description: "'untuk;kepada'",
      examples: [
        {
          romaji: "Kore wa tomodachi e no omiyage desu.",
          japanese: "これは友だちへのお土産です。",
          translation: "Ini adalah oleh-oleh untuk teman.",
        },
        {
          romaji: "Tarō-san wa okusan e no tanjōbi no okurimono o kaimashita.",
          japanese: "太郎さんは奥さんへの誕生日の贈り物を買いました。",
          translation: "Taro telah membeli hadiah ulang tahun untuk istrinya.",
        },
      ],
    },
  ],
};

export const gaParticle: ParticleData = {
  title: "Partikel GA が",
  particle: "が",
  meaning: "Partikel GA が memiliki banyak fungsi, yaitu:",
  usages: [
    {
      title: "1. Menunjukkan subjek dan kata bantu dari kata kerja intransitif",
      description: "",
      examples: [
        {
          romaji: "Ame ga furimasu.",
          japanese: "雨が降ります。",
          translation: "Hujan turun.",
        },
        {
          romaji: "Bukka ga agarimasu.",
          japanese: "物価が上がります。",
          translation: "Harga barang-barang naik.",
        },
      ],
    },
    {
      title: "2. Menunjukkan keberadaan sesuatu.",
      description: "(Bentuk GA ARIMASU (benda mati), GA IMASU (mahkluk hidup))",
      examples: [
        {
          romaji: "Chōdo asoko ni ebāguriin Nihongo gakkō ga arimasu.",
          japanese: "ちょうどあそこにエバーグリーン日本語学校があります。",
          translation: "Persis di sana ada sekolah Bahasa Jepang Evergreen.",
        },
        {
          romaji: "Kurasu ni gakusei ga jūnin imasu.",
          japanese: "クラスに学生が十人います。",
          translation: "Di kelas ada 10 orang siswa.",
        },
      ],
    },
    {
      title: "3. Menunjukkan kata ganti tanya berfungsi sbg subjek.",
      description: "",
      examples: [
        {
          romaji: "Nani ga oishii desu ka.",
          japanese: "何がおいしいですか。",
          translation: "Apa yang enak?",
        },
        {
          romaji: "Doko ga warui desu ka.",
          japanese: "どこが悪いですか。",
          translation: "Bagian mana yang sakit/rusak?",
        },
      ],
    },
    {
      title: "4. Memberi penegasan pada subjek.",
      description: "",
      examples: [
        {
          romaji: "Kore ga oishii desu.",
          japanese: "これがおいしいです。",
          translation: "Inilah yang enak. (di antara yang lain)",
        },
      ],
    },
    {
      title: "5. Menunjukkan benda yang menjadi objek dari kata2 seperti mempunyai, perlu, bisa, mengerti, suka dsb",
      description: "",
      examples: [
        {
          romaji: "Watashi wa hon ga takusan arimasu.",
          japanese: "わたしは本がたくさんあります。",
          translation: "Saya mempunyai banyak buku.",
        },
        {
          romaji: "Nihongo ga sukoshi dekimasu.",
          japanese: "日本語が少しできます。",
          translation: "Saya dapat berbahasa Jepang sedikit.",
        },
        {
          romaji: "Eigo ga wakarimasu ka.",
          japanese: "英語が分かりますか。",
          translation: "Apakah Anda mengerti bahasa Inggris?",
        },
        {
          romaji: "Anata no koto ga suki desu.",
          japanese: "あなたのことが好きです。",
          translation: "Saya suka kamu.",
        },
      ],
    },
    {
      title: "6. Menunjukkan memiliki sifat/keadaan.",
      description: "",
      examples: [
        {
          romaji: "Zō wa hana ga nagai desu.",
          japanese: "象は鼻が長いです。",
          translation: "Gajah belalainya panjang.",
        },
        {
          romaji: "Koko wa keshiki ga kirei desu.",
          japanese: "ここは景色がきれいです。",
          translation: "Di sini pemandangannya indah.",
        },
      ],
    },
  ],
};

export const kaParticle: ParticleData = {
    title: "Partikel KA か",
    particle: "か",
    meaning: "Secara umum berarti '...kah; apakah?'",
    usages: [
        {
            title: "1. Diletakkan pada akhir kalimat digunakan untuk bertanya.",
            description: "",
            examples: [
                {
                    romaji: "Anata wa donata desu ka.",
                    japanese: "あなたはどなたですか。",
                    translation: "Kamu siapa?",
                },
                {
                    romaji: "Kore wa nan desu ka.",
                    japanese: "これは何ですか。",
                    translation: "Ini apa?",
                },
            ],
        },
        {
            title: "2. Diletakkan di belakang kata tanya untuk menunjukkan sesuatu yang tidak jelas/tentu.",
            description: "",
            examples: [
                {
                    romaji: "Poribukuro no naka ni nanika arimasu.",
                    japanese: "ポリ袋の中に何かあります。",
                    translation: "Di dalam kantong plastik ada sesuatu.",
                },
                {
                    romaji: "Itsuka tenki no ii hi ni tsuri ni ikitai desu.",
                    japanese: "いつか天気のいい日につりに行きたいです。",
                    translation: "Kapan-kapan pada hari yang bercuaca baik saya ingin pergi memancing.",
                },
            ],
        },
        {
            title: "3. Digunakan dua hal atau lebih untuk menunjukkan salah satu.",
            description: "'atau'",
            examples: [
                {
                    romaji: "Suika ka meron ka papaiya no you na kudamono o kudasai.",
                    japanese: "すいかかメロンかパパイヤのような果物をください。",
                    translation: "Berikan saya buah seperti semangka atau melon atau pepaya.",
                },
                {
                    romaji: "Iku ka ikanai ka tenki shidai desu.",
                    japanese: "行くか行かないか天気次第です。",
                    translation: "Pergi atau tidak tergantung cuaca.",
                },
            ],
        },
    ],
};

export const karaParticle: ParticleData = {
    title: "Partikel KARA から",
    particle: "から",
    meaning: "Partikel KARA から secara umum berarti 'dari;karena'",
    usages: [
        {
            title: "1. Menunjukkan tempat/arah/angka.",
            description: "'dari'",
            examples: [
                {
                    romaji: "Anohito-tachi wa kurasu kara demashita.",
                    japanese: "あの人たちはクラスから出ました。",
                    translation: "Mereka telah keluar dari kelas.",
                },
                {
                    romaji: "Uchi kara gakkō made arukimasu.",
                    japanese: "家から学校まで歩きます。",
                    translation: "Berjalan kaki dari rumah sampai sekolah.",
                },
            ],
        },
        {
            title: "2. Menunjukkan batas waktu.",
            description: "'dari;sejak'",
            examples: [
                {
                    romaji: "Ashita kara nisenjūnen ni narimasu.",
                    japanese: "あしたから二千十年になります。",
                    translation: "Mulai besok masuk tahun 2010.",
                },
                {
                    romaji: "Kore kara motto majime ni benkyō shimasu.",
                    japanese: "これからもっとまじめに勉強します。",
                    translation: "Mulai sekarang saya akan belajar lebih serius.",
                },
            ],
        },
        {
            title: "3. Menunjukkan penyebab/alasan sesuatu hal dilakukan.",
            description: "'karena'",
            examples: [
                {
                    romaji: "Tōi kara, hakkiri miemasen.",
                    japanese: "遠いから、はっきり見えません。",
                    translation: "Karena jauh, tak tampak jelas.",
                },
                {
                    romaji: "Ōame ga furimashita kara, ikemasen deshita.",
                    japanese: "大雨が降りましたから、行けませんでした。",
                    translation: "Karena telah turun hujan besar, tidak bisa pergi.",
                },
            ],
        },
        {
            title: "4. Bentuk '-te kara' menunjukkan arti 'setelah;sesudah'",
            description: "",
            examples: [
                {
                    romaji: "Te o aratte kara, gohan o tabemasu.",
                    japanese: "手を洗ってから、ご飯を食べます。",
                    translation: "Makan setelah mencuci tangan.",
                },
                {
                    romaji: "Umarete kara, zutto kono machi ni sunde imasu.",
                    japanese: "生まれてから、ずっとこの町に住んでいます。",
                    translation: "Sejak lahir saya terus tinggal di kota ini.",
                },
            ],
        },
    ],
};
