
export interface GrammarRule {
  format: string;
  description: string;
  example: string;
  translation: string;
}

export interface GrammarSection {
  title: string;
  rules: GrammarRule[];
}

export const grammarSections: GrammarSection[] = [
  {
    title: "50 Pola Kalimat Minna no Nihongo",
    rules: [
      {
        format: "[Verb ます] + ます",
        description: "Tindakan biasa",
        example: "たべます (Makan)",
        translation: "arti: makan, romaji: tabemasu"
      },
      {
        format: "[Noun] は [Noun] です",
        description: "Adalah",
        example: "わたしはがくせいです (Saya siswa)",
        translation: "arti: Saya siswa, romaji: watashi wa gakusei desu"
      },
      {
        format: "[Noun] は [Place] です",
        description: "Lokasi",
        example: "わたしはにほんにいます (Saya di Jepang)",
        translation: "arti: Saya di Jepang, romaji: watashi wa nihon ni imasu"
      },
      {
        format: "[Noun] と [Noun] は",
        description: "Dan",
        example: "りんごとバナナ (Apel dan pisang)",
        translation: "arti: Apel dan pisang, romaji: ringo to banana"
      },
      {
        format: "[Noun] が [Verb]",
        description: "Ada",
        example: "ねこがいます (Ada kucing)",
        translation: "arti: Ada kucing, romaji: neko ga imasu"
      },
      {
        format: "[Verb ます] + たいです",
        description: "Ingin",
        example: "たべたいです (Ingin makan)",
        translation: "arti: Ingin makan, romaji: tabetai desu"
      },
      {
        format: "[Verb ます] + ませんか",
        description: "Ajakan",
        example: "いきませんか (Maukah pergi?)",
        translation: "arti: Maukah pergi?, romaji: ikimasen ka"
      },
      {
        format: "[Noun] の [Noun]",
        description: "Penunjuk kepemilikan",
        example: "わたしのほん (Buku saya)",
        translation: "arti: Buku saya, romaji: watashi no hon"
      },
      {
        format: "[Verb] + ますか",
        description: "Tanya",
        example: "たべますか (Apakah makan?)",
        translation: "arti: Apakah makan?, romaji: tabemasu ka"
      },
      {
        format: "[Verb ます] + すぎます",
        description: "Terlalu melakukan",
        example: "たべすぎます (Makan terlalu banyak)",
        translation: "arti: Makan terlalu banyak, romaji: tabesugimasu"
      },
      {
        format: "[Verb ます] + ましょう",
        description: "Ayo lakukan bersama",
        example: "いきましょう (Mari pergi)",
        translation: "arti: Mari pergi, romaji: ikimashou"
      },
      {
        format: "[Noun] で",
        description: "Dengan menggunakan",
        example: "バスでいきます (Pergi dengan bus)",
        translation: "arti: Pergi dengan bus, romaji: basu de ikimasu"
      },
      {
        format: "[Verb] + と",
        description: "Jika",
        example: "たべるとおなかがいっぱいになります (Jika makan, perut kenyang)",
        translation: "arti: Jika makan, perut kenyang, romaji: taberu to onaka ga ippai ni narimasu"
      },
      {
        format: "[Verb] + ながら",
        description: "Sambil",
        example: "うたをききながらべんきょうします (Belajar sambil mendengarkan lagu)",
        translation: "arti: Belajar sambil mendengarkan lagu, romaji: uta o kiki nagara benkyou shimasu"
      },
      {
        format: "[Verb] + つもりです",
        description: "Berencana pergi",
        example: "いくつもりです (Berencana pergi)",
        translation: "arti: Berencana pergi, romaji: iku tsumori desu"
      },
      {
        format: "[Noun] に + 行きます",
        description: "Pergi ke tempat tujuan",
        example: "いえにかえります (Pulang ke rumah)",
        translation: "arti: Pulang ke rumah, romaji: ie ni kaerimasu"
      },
      {
        format: "[Verb] + ようにしてください",
        description: "Tolong lakukan seperti ini",
        example: "ドアをしめるようにしてください (Tolong tutup pintu)",
        translation: "arti: Tolong tutup pintu, romaji: doa o shimeru you ni shite kudasai"
      },
      {
        format: "[Verb] + ないでください",
        description: "Tolong jangan",
        example: "ここでたばこをすわないでください (Tolong jangan merokok di sini)",
        translation: "arti: Tolong jangan merokok di sini, romaji: koko de tabako o suwanai de kudasai"
      },
      {
        format: "[Noun] の前に",
        description: "Sebelum",
        example: "かばんの前にほんがあります (Buku ada di depan tas)",
        translation: "arti: Buku ada di depan tas, romaji: kaban no mae ni hon ga arimasu"
      },
      {
        format: "[Verb] + とき",
        description: "Ketika",
        example: "食べるとき (Ketika makan)",
        translation: "arti: Ketika makan, romaji: taberu toki"
      },
      {
        format: "[Noun] で (Tempat kegiatan)",
        description: "Di tempat, digunakan untuk menyatakan tempat aktivitas",
        example: "学校で勉強します (Belajar di sekolah)",
        translation: "arti: Belajar di sekolah, romaji: gakkou de benkyou shimasu"
      },
      {
        format: "[Verb] + てください",
        description: "Tolong lakukan",
        example: "待ってください (Tolong tunggu)",
        translation: "arti: Tolong tunggu, romaji: matte kudasai"
      },
      {
        format: "[Verb] + たり、[Verb] + たり",
        description: "Melakukan ini dan itu",
        example: "おきたり、ねたりします (Bangun dan tidur)",
        translation: "arti: Bangun dan tidur, romaji: okitari, netari shimasu"
      },
      {
        format: "[Verb] + たことがあります",
        description: "Pernah melakukan",
        example: "日本にいったことがあります (Pernah pergi ke Jepang)",
        translation: "arti: Pernah pergi ke Jepang, romaji: nihon ni itta koto ga arimasu"
      },
      {
        format: "[Verb] + たことがない",
        description: "Belum pernah melakukan",
        example: "いったことがない (Belum pernah pergi)",
        translation: "arti: Belum pernah pergi, romaji: itta koto ga nai"
      },
      {
        format: "[Verb] + なければなりません",
        description: "Harus melakukan",
        example: "勉強しなければなりません (Harus belajar)",
        translation: "arti: Harus belajar, romaji: benkyou shinakereba narimasen"
      },
      {
        format: "[Verb] + なくてもいいです",
        description: "Tidak perlu melakukan",
        example: "行かなくてもいいです (Tidak perlu pergi)",
        translation: "arti: Tidak perlu pergi, romaji: ikanakute mo ii desu"
      },
      {
        format: "[Verb] + ように",
        description: "Supaya",
        example: "早く来るようにしてください (Tolong datang lebih cepat)",
        translation: "arti: Tolong datang lebih cepat, romaji: hayaku kuru you ni shite kudasai"
      },
      {
        format: "[Verb] + てあげます",
        description: "Memberi (tindakan)",
        example: "手伝ってあげます (Akan membantu)",
        translation: "arti: Akan membantu, romaji: tetsudatte agemasu"
      },
      {
        format: "[Verb] + てくれますか",
        description: "Meminta tolong",
        example: "助けてくれますか (Bisakah membantu?)",
        translation: "arti: Bisakah membantu?, romaji: tasukete kuremasu ka"
      },
      {
        format: "[Verb] + てもいいです",
        description: "Boleh melakukan",
        example: "使ってもいいです (Boleh digunakan)",
        translation: "arti: Boleh digunakan, romaji: tsukatte mo ii desu"
      },
      {
        format: "[Verb] + こと",
        description: "Hal (membendakan kata kerja)",
        example: "話すこと (Berbicara)",
        translation: "arti: Berbicara, romaji: hanasu koto"
      },
      {
        format: "[Verb] + ほうがいい",
        description: "Lebih baik melakukan",
        example: "早く寝たほうがいい (Lebih baik tidur lebih cepat)",
        translation: "arti: Lebih baik tidur lebih cepat, romaji: hayaku neta hou ga ii"
      },
      {
        format: "[Verb] + たらどうですか",
        description: "Bagaimana jika",
        example: "すこし休んだらどうですか (Bagaimana jika istirahat sebentar?)",
        translation: "arti: Bagaimana jika istirahat sebentar?, romaji: sukoshi yasundara dou desu ka"
      },
      {
        format: "[Noun] は [Verb] ます (Polite Verb)",
        description: "Bentuk sopan",
        example: "私は日本語を勉強します (Saya belajar bahasa Jepang)",
        translation: "arti: Saya belajar bahasa Jepang, romaji: watashi wa nihongo o benkyou shimasu"
      },
      {
        format: "[Verb] + ませんか (Sopan Ajakan)",
        description: "Ajakan sopan",
        example: "見ませんか (Maukah menonton?)",
        translation: "arti: Maukah menonton?, romaji: mimasen ka"
      },
      {
        format: "[Verb] + だろう (Mungkin)",
        description: "Mungkin",
        example: "行くだろう (Mungkin pergi)",
        translation: "arti: Mungkin pergi, romaji: iku darou"
      },
      {
        format: "[Verb] + てから (Setelah melakukan)",
        description: "Setelah",
        example: "勉強してから、遊びます (Setelah belajar, saya bermain)",
        translation: "arti: Setelah belajar, saya bermain, romaji: benkyou shite kara, asobimasu"
      },
      {
        format: "[Verb] + ている (Sedang melakukan)",
        description: "Sedang",
        example: "走っている (Sedang berlari)",
        translation: "arti: Sedang berlari, romaji: hashitte iru"
      },
      {
        format: "[Verb] + る (Kebiasaan)",
        description: "Bentuk kamus/kebiasaan",
        example: "毎日走る (Lari setiap hari)",
        translation: "arti: Lari setiap hari, romaji: mainichi hashiru"
      },
      {
        format: "[Verb] + ません (Tidak melakukan)",
        description: "Negasi sopan",
        example: "行きません (Tidak pergi)",
        translation: "arti: Tidak pergi, romaji: ikimasen"
      },
      {
        format: "[Verb] + すぎる (Terlalu melakukan)",
        description: "Terlalu",
        example: "食べすぎる (Terlalu makan)",
        translation: "arti: Terlalu makan, romaji: tabesugiru"
      },
      {
        format: "[Noun] + が + ほしい (Ingin sesuatu)",
        description: "Ingin benda",
        example: "ペンがほしい (Saya ingin pena)",
        translation: "arti: Saya ingin pena, romaji: pen ga hoshii"
      },
      {
        format: "[Verb] + たくない (Tidak ingin melakukan)",
        description: "Tidak ingin",
        example: "行きたくない (Tidak ingin pergi)",
        translation: "arti: Tidak ingin pergi, romaji: ikitakunai"
      },
      {
        format: "[Verb] + ように (Supaya)",
        description: "Supaya",
        example: "早く寝るように (Tolong tidur lebih cepat)",
        translation: "arti: Tolong tidur lebih cepat, romaji: hayaku neru you ni"
      },
      {
        format: "[Verb] + と (Jika)",
        description: "Jika (kondisional pasti)",
        example: "食べると元気になる (Jika makan, akan sehat)",
        translation: "arti: Jika makan, akan sehat, romaji: taberu to genki ni naru"
      },
      {
        format: "[Verb] + ない (Negasi)",
        description: "Negasi biasa",
        example: "食べない (Tidak makan)",
        translation: "arti: Tidak makan, romaji: tabenai"
      },
      {
        format: "[Verb] + ました (Sudah dilakukan)",
        description: "Lampau sopan",
        example: "食べました (Sudah makan)",
        translation: "arti: Sudah makan, romaji: tabemashita"
      }
    ],
  },
];

    