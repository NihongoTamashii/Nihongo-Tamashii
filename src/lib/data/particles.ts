
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
