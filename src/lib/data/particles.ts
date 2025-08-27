
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

export const madeParticle: ParticleData = {
    title: "Partikel MADE まで",
    particle: "まで",
    meaning: "Secara umum berarti 'sampai'",
    usages: [
        {
            title: "1. Menunjukkan batas akhir sesuatu dilakukan/berlangsung.",
            description: "'sampai'",
            examples: [
                {
                    romaji: "Itsu made Indoneshia ni imasu ka.",
                    japanese: "いつまでインドネシアにいますか。",
                    translation: "Anda akan berada/tinggal di Indonesia sampai kapan?",
                },
                {
                    romaji: "Ame ga yamu made machimashō.",
                    japanese: "雨がやむまで待ちましょう。",
                    translation: "Mari kita menunggu sampai hujan berhenti.",
                },
                {
                    romaji: "Gakkō kara eki made arukimashita.",
                    japanese: "学校から駅まで歩きました。",
                    translation: "Saya telah berjalan kaki dari sekolah sampai stasiun.",
                },
            ],
        },
        {
            title: "2. Bentuk '... made ni ....' berarti 'selambat-lambatnya;sebelum'",
            description: "",
            examples: [
                {
                    romaji: "Oshiharai wa kongetsu no hatsuka made ni osumashi negaimasu.",
                    japanese: "お支払いは今月の二十日までにお済まし願います。",
                    translation: "Kami minta pembayaran dilunasi selambat-lambatnya tanggal 20 bulan ini.",
                },
            ],
        },
    ],
};

export const moParticle: ParticleData = {
  title: "Partikel MO も",
  particle: "も",
  meaning: "Secara umum berarti 'juga;pun'",
  usages: [
    {
      title: "1. Menunjukkan hal yang sama seperti lainnya.",
      description: "'juga'",
      examples: [
        {
          romaji: "Anata ga ikeba, watashi mo ikimasu.",
          japanese: "あなたが行けば、わたしも行きます。",
          translation: "Kalau kamu pergi, saya juga pergi.",
        },
      ],
    },
    {
      title: "2. Bentuk '... mo ... mo' menunjukkan beberapa hal semuanya sama.",
      description: "'Baik ... maupun ...'",
      examples: [
        {
          romaji: "Chichi mo haha mo aikawarazu genki desu.",
          japanese: "父も母も相変わらず元気です。",
          translation: "Baik ayah maupun ibuku semua sehat.",
        },
        {
          romaji: "Washoku mo Yōshoku mo suki desu.",
          japanese: "和食も洋食も好きです。",
          translation: "Baik masakan Jepang maupun masakan Barat saya suka.",
        },
      ],
    },
    {
      title: "3. Mengikuti derajat atau jumlah yang banyak.",
      description: "'sampai'",
      examples: [
        {
          romaji: "Kare wa biiru o roppon mo nomimashita.",
          japanese: "彼はビールを六本も飲みました。",
          translation: "Dia telah minum bir sampai enam botol.",
        },
      ],
    },
    {
      title: "4. Dalam bentuk '-te/de mo' menunjukkan arti 'walaupun;meskipun'",
      description: "",
      examples: [
        {
          romaji: "Nankai yonde mo wakarimasen.",
          japanese: "何回読んでも分かりません。",
          translation: "Walau membaca berapa kali pun tidak mengerti.",
        },
        {
          romaji: "Isoide itte mo maniawanai deshō.",
          japanese: "急いで行っても間に合わないでしょう。",
          translation: "Walapun kita bergegas pergi tidak akan keburu.",
        },
      ],
    },
    {
      title: "5. Dalam kalimat negatif.",
      description: "'... pun tidak ...'",
      examples: [
        {
          romaji: "Chūgoku-go ga sukoshi mo wakarimasen.",
          japanese: "中国語が少しも分かりません。",
          translation: "Saya tidak mengerti bahasa Mandarin sedikit pun.",
        },
        {
          romaji: "Nani mo arimasen.",
          japanese: "何もありません。",
          translation: "Apa pun tidak ada.",
        },
      ],
    },
  ],
};

export const niParticle: ParticleData = {
    title: "Partikel NI に",
    particle: "に",
    meaning: "Secara umum berarti 'di;pada;ke;untuk'",
    usages: [
        {
            title: "1. Menunjukkan letak/beradanya sesuatu 'di'",
            description: "",
            examples: [
                {
                    romaji: "Gakusei tachi wa kyōshitsu ni imasu.",
                    japanese: "学生たちは教室にいます。",
                    translation: "Murid-murid ada di ruangan kelas.",
                },
                {
                    romaji: "Basurūmu ni shawā ga tsukete arimasu ka.",
                    japanese: "バスルームにシャワーが付けてありますか。",
                    translation: "Apakah di kamar mandi ada dipasang shower?",
                },
            ],
        },
        {
            title: "2. Menunjukkan pada apa kita melakukan sesuatu 'di;pada'",
            description: "",
            examples: [
                {
                    romaji: "Nōto ni kakimasu.",
                    japanese: "ノートに書きます。",
                    translation: "Menulis di buku catatan.",
                },
                {
                    romaji: "Koko ni goshomei kudasai.",
                    japanese: "ここにご署名ください。",
                    translation: "Silahkan tanda tangan di sini.",
                },
            ],
        },
        {
            title: "3. Untuk menyatakan waktu. 'pada'",
            description: "",
            examples: [
                {
                    romaji: "Jippun hodo mae ni tōchaku shimashita.",
                    japanese: "十分ほど前に到着しました。",
                    translation: "Saya tiba pada kira-kira sepuluh menit lalu.",
                },
                {
                    romaji: "Ichiji ni kōen e ikimashita.",
                    japanese: "一時に公園へ行きました。",
                    translation: "Saya telah pergi ke taman pada jam 1.",
                },
            ],
        },
        {
            title: "4. Menunjukkan menghadap/menuju/memasukkan ke suatu arah/tempat. 'ke'",
            description: "",
            examples: [
                {
                    romaji: "Watakushi no uchi wa kita ni muite imasu.",
                    japanese: "私の家は北に向いています。",
                    translation: "Rumah saya menghadap ke utara.",
                },
                {
                    romaji: "Baketsu ni mizu o iremasu.",
                    japanese: "バケツに水を入れます。",
                    translation: "Memasukkan air ke ember.",
                },
            ],
        },
        {
            title: "5. Menunjukkan objek yang dituju/dipengaruhi. 'kepada'",
            description: "",
            examples: [
                {
                    romaji: "Anata ni dake hanashimasu.",
                    japanese: "あなたにだけ話します。",
                    translation: "Saya hanya berbicara kepada kamu saja.",
                },
                {
                    romaji: "Nihon no yōsu ni tsuite tomodachi ni kikimashita.",
                    japanese: "日本の様子について友達に聞きました。",
                    translation: "Saya telah bertanya kepada teman tentang keadaan Jepang.",
                },
            ],
        },
    ],
};

export const noParticle: ParticleData = {
  title: "Partikel NO の",
  particle: "の",
  meaning: "Secara umum berarti 'punya;kepunyaan'",
  usages: [
    {
      title: "1. Menunjukkan milik dari seseorang/sesuatu.",
      description: "",
      examples: [
        {
          romaji: "Watashi no baggu.",
          japanese: "わたしのバッグ。",
          translation: "Tas (punya) saya.",
        },
        {
          romaji: "Ano basu wa kaisha no desu.",
          japanese: "あのバスは会社のです。",
          translation: "Bus itu milik perusahaan.",
        },
        {
          romaji: "Indoneshia-jin no fūzoku wa Nihon-jin no to mattaku chigaimasu.",
          japanese: "インドネシア人の風俗は日本人のとまったく違います。",
          translation: "Adat istiadat orang Indonesia berbeda sama sekali dengan orang Jepang.",
        },
      ],
    },
    {
      title: "2. Menggabung dua kata benda.",
      description: "(Kata benda pertama menerangkan kata benda selanjutnya)",
      examples: [
        {
          romaji: "Nihon-go no sensei.",
          japanese: "日本語の先生。",
          translation: "Guru bahasa Jepang.",
        },
        {
          romaji: "Kotoshi no kome no shūkaku wa ōi desu.",
          japanese: "ことしの米の収穫は多いです。",
          translation: "Panen beras tahun ini banyak.",
        },
        {
          romaji: "Watashi no tomodachi no Tono-san wa chūgakkō de gengogaku no sensei o shite imasu.",
          japanese: "わたしの友達のトノさんは中学校で言語学の先生をしています。",
          translation: "Temanku Tono adalah guru bahasa di SMP negeri.",
        },
      ],
    },
    {
      title: "3. Menunjukkan tempat berada.",
      description: "",
      examples: [
        {
          romaji: "Jakaruta no shoppingu sentā wa itsumo nigiyaka desu.",
          japanese: "ジャカルタのショッピングセンターはいつもにぎやかです。",
          translation: "Pusat perbelanjaan di Jakarta selalu ramai.",
        },
        {
          romaji: "Nihon no haru wa totemo kirei desu.",
          japanese: "日本の春はとてもきれいです。",
          translation: "Musim semi di Jepang sangat indah.",
        },
      ],
    },
    {
      title: "4. Untuk menominakan anak kalimat yg berbentuk kata kerja atau kata sifat",
      description: "",
      examples: [
        {
          romaji: "Kanji o oboeru no wa taihen muzukashii desu.",
          japanese: "漢字を覚えるのは大変難しいです。",
          translation: "Susah sekali mengingat kanji.",
        },
        {
          romaji: "Kare wa daigaku o yameta no wa okane ga nai tame desu.",
          japanese: "彼は大学をやめたのはお金がないためです。",
          translation: "Dia berhenti kuliah karena tidak mempunyai uang.",
        },
      ],
    },
    {
      title: "5. Diletakkan di akhir kalimat untuk",
      description: "Dalam ucapan informal, の sering diganti dengan ん",
      examples: [
        {
          romaji: "Dō shita no.",
          japanese: "どうしたの。",
          translation: "Kenapa kamu? (bertanya secara akrab)",
        },
        {
          romaji: "Ashita yōji ga aru no desu.",
          japanese: "あした用事があるのです。",
          translation: "Besok saya ada urusan. (penegasan)",
        },
        {
          romaji: "Neru mae ni ha o migaku no.",
          japanese: "寝る前に歯をみがくの。",
          translation: "Sebelum tidur kamu harus menggosok gigi. (memberi perintah bernada keras)",
        },
        {
          romaji: "Suki na no?",
          japanese: "好きなの?",
          translation: "Suka? (untuk Kata sifat II, kata benda, kata ganti dsb. harus ditambah kata NA な)",
        },
      ],
    },
  ],
};

export const oParticle: ParticleData = {
  title: "Partikel O を",
  particle: "を",
  meaning: "Partikel O を (ditulis wo) berfungsi sebagai kata bantu untuk kata kerja.",
  usages: [
    {
      title: "1. Menunjukkan objek dari kata kerja.",
      description: "",
      examples: [
        {
          romaji: "Biiru o nomimasu.",
          japanese: "ビールを飲みます。",
          translation: "Minum bir.",
        },
        {
          romaji: "Hambāgā o tabemasu.",
          japanese: "ハンバーガーを食べます。",
          translation: "Makan hamburger.",
        },
        {
          romaji: "Nihongo no benkyō o shimasu.",
          japanese: "日本語の勉強をします。",
          translation: "Belajar Bahasa Jepang.",
        },
      ],
    },
    {
      title: "2. Menunjukkan tempat dilalui/dilewati.",
      description: "",
      examples: [
        {
          romaji: "Niwa o arukimasu.",
          japanese: "庭を歩きます。",
          translation: "Berjalan di pekarangan.",
        },
        {
          romaji: "Hashi o watarimasu.",
          japanese: "橋を渡ります。",
          translation: "Menyeberangi jembatan.",
        },
      ],
    },
    {
      title: "3. Menunjukkan tempat titik tolak dari verba intransitif.",
      description: "",
      examples: [
        {
          romaji: "Uchi o dete, gakkō e ikimasu.",
          japanese: "家を出て、学校へ行きます。",
          translation: "Keluar rumah, pergi ke sekolah.",
        },
        {
          romaji: "Daigaku o sotsugyō shimashita.",
          japanese: "大学を卒業しました。",
          translation: "Tamat universitas/kuliah.",
        },
      ],
    },
    {
      title: "4. Bekerja atau menjabat sesuatu.",
      description: "(bentuk ... o shite imasu をしています)",
      examples: [
        {
          romaji: "Otōsan wa keikan o shite imasu.",
          japanese: "おとうさんは警官をしています。",
          translation: "Ayahnya adalah seorang polisi.",
        },
        {
          romaji: "Kanojo wa shachō o shite imasu.",
          japanese: "彼女は社長をしています。",
          translation: "Dia adalah seorang presiden direktur.",
        },
      ],
    },
  ],
};

export const toParticle: ParticleData = {
    title: "Partikel TO と",
    particle: "と",
    meaning: "Partikel TO と secara umum berarti 'dan;dengan'",
    usages: [
        {
            title: "1. Menunjukkan lebih dari satu benda atau sejenisnya.",
            description: "'dan'",
            examples: [
                {
                    romaji: "Surippa to sutokkingu o issoku zutsu kaimashita.",
                    japanese: "スリッパとストキングを一足ずつ買いました。",
                    translation: "Saya telah membeli sandal dan stocking masing-masing satu pasang.",
                },
                {
                    romaji: "Indoneshia to Nihon to wa mukashi kara kankei ga fukai desu.",
                    japanese: "インドネシアと日本とは昔から関係が深いです。",
                    translation: "Indonesia dan Jepang berhubungan erat sejak zaman dahulu.",
                },
            ],
        },
        {
            title: "2. Menunjukkan pihak lain sebagai lawan dalam melakukan sesuatu.",
            description: "'bersama;dengan'",
            examples: [
                {
                    romaji: "Yonin no tomodachi to kuruma ni norimashita.",
                    japanese: "四人の友だちと車に乗りました。",
                    translation: "Telah naik kendaraan bersama-sama 4 orang teman.",
                },
                {
                    romaji: "Unmei to tatakatte imasu.",
                    japanese: "運命と戦っています。",
                    translation: "Bertarung dengan nasib.",
                },
            ],
        },
        {
            title: "3. Menunjukkan objek perbandingan.",
            description: "'dengan'",
            examples: [
                {
                    romaji: "Kore to onaji saizu no kutsu o kudasai.",
                    japanese: "これと同じサイズのくつをください。",
                    translation: "Berikan saya sepatu yang ukurannya sama dengan yang ini.",
                },
                {
                    romaji: "Otōto wa ani to chigatte, sei ga takai desu.",
                    japanese: "弟は兄と違って、背が高いです。",
                    translation: "Adik lelaki saya badannya tinggi, berbeda dengan kakak lelaki.",
                },
            ],
        },
        {
            title: "4. Menunjukkan isi dari apa yang dikatakan/ditanya/didengar dsb (menggunakan bentuk informal).",
            description: "",
            examples: [
                {
                    romaji: "Onamae wa nan to iimasu ka.",
                    japanese: "お名前は何と言いますか。",
                    translation: "Siapa nama Anda?",
                },
                {
                    romaji: "Kimura-san wa mō sugu kekkon suru to kikimashita.",
                    japanese: "木村さんはもうすぐ結婚すると聞きました。",
                    translation: "Saya dengar Kimura sebentar lagi menikah.",
                },
                 {
                    romaji: "Ii to omoimasu.",
                    japanese: "いいと思います。",
                    translation: "Saya pikir/kira baik/boleh.",
                },
            ],
        },
        {
            title: "5. Menunjukkan suatu hal terjadi/dilakukan segera setelah suatu hal terjadi.",
            description: "'begitu ...;segera'",
            examples: [
                {
                    romaji: "Uchi ni kaeru to, gohan o tabemashita.",
                    japanese: "家に帰ると、ご飯を食べました。",
                    translation: "Begitu pulang ke rumah, saya segera makan.",
                },
                 {
                    romaji: "Nihon ni tsuku to, sugu uchi ni denwa o kakemashita.",
                    japanese: "日本に着くと、すぐ家に電話をかけました。",
                    translation: "Setiba di Jepang, segera telepon ke rumah.",
                },
            ],
        },
        {
            title: "6. Menunjukkan suatu hal pasti terjadi bila keadaan seperti itu.",
            description: "'bila'",
            examples: [
                {
                    romaji: "Yoru ni naru to, kuraku narimasu.",
                    japanese: "夜になると、暗くなります。",
                    translation: "Begitu malam tiba, akan menjadi gelap.",
                },
                 {
                    romaji: "Ame ga furanai to, taihen atsuku narimasu.",
                    japanese: "雨が降らないと、大変暑くなります。",
                    translation: "Bila tidak turun hujan, akan menjadi sangat panas.",
                },
            ],
        },
    ],
};
