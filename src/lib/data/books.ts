
export interface Ebook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  filePath: string;
}

export const ebooks: Ebook[] = [
  {
    id: "bahasa-jepang-itu-gampang",
    title: "Bahasa Jepang Itu Gampang",
    author: "Tim Nihongo Tamashii",
    coverImage: "https://picsum.photos/300/400?random=1",
    description: "Pelajari dasar-dasar tata bahasa dan kosakata bahasa Jepang dengan cara yang mudah dan menyenangkan.",
    filePath: "/ebooks/Bahasa Jepang Itu Mudah.pdf",
  },
  // Tambahkan buku lain di sini
];
