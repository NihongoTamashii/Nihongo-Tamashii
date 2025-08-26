
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
    title: "Minna no Nihongo 1",
    rules: [
      {
        format: "[Verb ます] + ます",
        description: "Tindakan biasa",
        example: "たべます (Makan), ねます (Tidur)",
        translation: "",
      },
      {
        format: "[Noun] は [Noun] です",
        description: "Adalah",
        example: "わたしはがくせいです",
        translation: "Saya seorang siswa",
      },
      {
        format: "[Noun] は [Place] です",
        description: "Lokasi",
        example: "わたしはにほんにいます",
        translation: "Saya ada di Jepang",
      },
      {
        format: "[Noun] と [Noun] は",
        description: "Dan",
        example: "りんごとバナナ",
        translation: "Apel dan pisang",
      },
      {
        format: "[Noun] が [Verb]",
        description: "Ada",
        example: "ねこがいます",
        translation: "Ada kucing",
      },
      {
        format: "[Verb ます] + たいです",
        description: "Ingin",
        example: "たべたいです",
        translation: "Saya ingin makan",
      },
      {
        format: "[Noun] は [Noun] が います/あります",
        description: "Ada",
        example: "えんぴつがあります",
        translation: "Ada pensil",
      },
      {
        format: "[Noun] は [Noun] に あります/います",
        description: "Ada di tempat tertentu",
        example: "ほんはテーブルにあります",
        translation: "Buku ada di meja",
      },
      {
        format: "[Verb ます] + ませんか",
        description: "Ajakan",
        example: "いきませんか",
        translation: "Maukah pergi?",
      },
      {
        format: "[Noun] の [Noun]",
        description: "Penunjuk kepemilikan",
        example: "わたしのほん",
        translation: "Buku saya",
      },
      {
        format: "[Verb] + ますか",
        description: "Tanya",
        example: "たべますか",
        translation: "Apakah kamu makan?",
      },
      {
        format: "[Noun] は [Noun] ですか",
        description: "Pertanyaan",
        example: "あなたは学生ですか",
        translation: "Apakah kamu siswa?",
      },
      {
        format: "[Verb ます] + ません",
        description: "Negasi",
        example: "たべません",
        translation: "Tidak makan",
      },
      {
        format: "[Verb ます] + ました",
        description: "Lampau",
        example: "たべました",
        translation: "Makan",
      },
      {
        format: "[Verb ます] + ませんでした",
        description: "Lampau negasi",
        example: "たべませんでした",
        translation: "Tidak makan",
      },
      {
        format: "[Noun] は [Noun] ではありません",
        description: "Negasi",
        example: "わたしは学生ではありません",
        translation: "Saya bukan siswa",
      },
      {
        format: "[Verb] + ことができます",
        description: "Dapat melakukan",
        example: "日本語を話すことができます",
        translation: "Saya bisa berbicara bahasa Jepang",
      },
      {
        format: "[Noun] は [Place] へ行きます/来ます",
        description: "Pergi ke/tempat",
        example: "学校へ行きます",
        translation: "Pergi ke sekolah",
      },
      {
        format: "[Verb] + たいです",
        description: "Ingin melakukan",
        example: "みたいです",
        translation: "Ingin melihat",
      },
      {
        format: "[Verb] + ます",
        description: "Sopan",
        example: "たべます",
        translation: "Makan, bentuk sopan",
      },
    ],
  },
  {
    title: "Minna no Nihongo 2",
    rules: [
      {
        format: "[Verb ます] + すぎます",
        description: "Terlalu",
        example: "食べすぎます",
        translation: "Makan terlalu banyak",
      },
      {
        format: "[Verb ます] + ましょう",
        description: "Ayo lakukan bersama",
        example: "いきましょう",
        translation: "Mari pergi",
      },
      {
        format: "[Noun] で",
        description: "Dengan menggunakan",
        example: "バスで行きます",
        translation: "Pergi dengan bus",
      },
      {
        format: "[Verb] + と",
        description: "Jika",
        example: "たべるとおなかがいっぱいになります",
        translation: "Jika makan, perut akan kenyang",
      },
      {
        format: "[Verb ます] + ながら",
        description: "Sambil",
        example: "音楽を聞きながら勉強します",
        translation: "Belajar sambil mendengarkan musik",
      },
      {
        format: "[Verb ます] + ことができます",
        description: "Dapat melakukan",
        example: "日本語を話すことができます",
        translation: "Bisa berbicara bahasa Jepang",
      },
      {
        format: "[Noun] に + 行きます/来ます/帰ります",
        description: "Pergi ke/tempat tujuan",
        example: "いえに帰ります",
        translation: "Pulang ke rumah",
      },
      {
        format: "[Verb] + ようにしてください",
        description: "Tolong lakukan seperti ini",
        example: "ドアをしめるようにしてください",
        translation: "Tolong tutup pintunya",
      },
      {
        format: "[Verb] + でしょう",
        description: "Mungkin",
        example: "たべるでしょう",
        translation: "Mungkin akan makan",
      },
      {
        format: "[Verb] + つもりです",
        description: "Berencana untuk",
        example: "行くつもりです",
        translation: "Berencana untuk pergi",
      },
      {
        format: "[Verb] + ほうがいいです",
        description: "Lebih baik",
        example: "早く寝たほうがいいです",
        translation: "Lebih baik tidur lebih cepat",
      },
      {
        format: "[Noun] で",
        description: "Di tempat, digunakan untuk menyatakan tempat aktivitas",
        example: "学校で勉強します",
        translation: "Belajar di sekolah",
      },
      {
        format: "[Verb ます] + たいです",
        description: "Ingin melakukan",
        example: "みたいです",
        translation: "Ingin melihat",
      },
      {
        format: "[Noun] は [Noun] が います/あります",
        description: "Ada di tempat",
        example: "えんぴつがあります",
        translation: "Ada pensil",
      },
      {
        format: "[Verb] + とき",
        description: "Ketika",
        example: "食べるとき",
        translation: "Ketika makan",
      },
      {
        format: "[Noun] の前に",
        description: "Sebelum",
        example: "かばんの前に本があります",
        translation: "Buku ada di depan tas",
      },
      {
        format: "[Verb] + ように",
        description: "Supaya",
        example: "早く来るようにしてください",
        translation: "Tolong datang lebih cepat",
      },
      {
        format: "[Verb] + ないでください",
        description: "Tolong jangan",
        example: "ここでたばこをすわないでください",
        translation: "Tolong jangan merokok di sini",
      },
      {
        format: "[Verb] + ばかり",
        description: "Hanya melakukan sesuatu",
        example: "いつもゲームばかりしています",
        translation: "Saya selalu bermain game",
      },
      {
        format: "[Noun] は [Verb] が できます",
        description: "Bisa melakukan sesuatu",
        example: "日本語が話せます",
        translation: "Bisa berbicara bahasa Jepang",
      },
    ],
  },
];
