import type { Flavor, Product, FaqItem, Testimonial } from './types';

export const FLAVORS: Flavor[] = [
  {
    id: 'coklat',
    name: 'Double Cokelat',
    badge: 'GABIN',
    calories: 270,
    bgHex: '#7b4f40',
    accentColor: '#f7eee9',
    tagline: 'Menggunakan 100% Ice Cream',
    description: '🍫 Gabin + Ice Cream Coklat = Bikin Nagih! 🍦\nRenyah, creamy, dingin, dan manis dalam satu gigitan! 🤎',
    image: '/assets/images/regenerated_image_1790069101310.png',
  },
  {
    id: 'stroberi',
    name: 'Strawbär Swirl',
    badge: 'GABIN',
    calories: 220,
    bgHex: '#d86154',
    accentColor: '#fdf0f2',
    tagline: 'Menggunakan 100% Ice Cream',
    description: 'Es krim stroberi lembut dengan swirl saus buah stroberi asli yang melimpah, dipadukan renyahnya biskuit keemasan di setiap gigitan.',
    image: '/assets/images/regenerated_image_1790067144916.png',
  },
  {
    id: 'apple-pie',
    name: 'Swedish Apple Pie',
    badge: 'GABIN',
    calories: 250,
    bgHex: '#c98555',
    accentColor: '#fcf4ec',
    tagline: 'Menggunakan 100% Ice Cream',
    description: 'Perpaduan rasa pie apel klasik Swedia dengan rempah kayu manis harum dan es krim vanila creamy di antara biskuit mentega renyah.',
    image: '/assets/images/regenerated_image_1790066337042.png',
  },
  {
    id: 'mint-chip',
    name: 'Mint Chokladchip',
    badge: 'GABIN',
    calories: 240,
    bgHex: '#428b86',
    accentColor: '#edf7ee',
    tagline: 'Menggunakan 100% Ice Cream',
    description: 'Sensasi dingin menyegarkan dari es krim daun mint murni dipadu serpihan cokelat hitam renyah dan biskuit gabin gurih.',
    image: '/assets/images/mint-chokladchip.jpg',
  },
  {
    id: 'cookies-cream',
    name: 'Cookies & Kräm',
    badge: 'GABIN',
    calories: 280,
    bgHex: '#3f3532',
    accentColor: '#faefe1',
    tagline: 'Menggunakan 100% Ice Cream',
    description: 'Biskuit renyah keemasan dengan isian es krim cookies & cream melimpah dan taburan biskuit Oreo gurih tiada tanding.',
    image: '/assets/images/cookies-and-kram.jpg',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Gabin Oreo',
    subtitle: 'Gabin Oreo',
    price: 'Rp 10.000',
    calories: 280,
    image: '/assets/images/regenerated_image_1790068969600.png',
    category: 'Cookies & Cream',
  },
  {
    id: 'prod-2',
    title: 'Gabin Matcha',
    subtitle: 'Gabin Matcha',
    price: 'Rp 10.000',
    calories: 240,
    image: '/assets/images/regenerated_image_1790068971665.png',
    category: 'Matcha',
  },
  {
    id: 'prod-3',
    title: 'Gabin Stroberi',
    subtitle: 'Gabin Stroberi',
    price: 'Rp 10.000',
    calories: 220,
    image: '/assets/images/regenerated_image_1790068973671.png',
    category: 'Fruit Fresh',
  },
  {
    id: 'prod-4',
    title: 'Gabin Cokelat',
    subtitle: 'Gabin Cokelat',
    price: 'Rp 10.000',
    calories: 270,
    image: '/assets/images/regenerated_image_1790068975921.png',
    category: 'Rich Chocolate',
  },
  {
    id: 'prod-5',
    title: 'Gabin Vanila',
    subtitle: 'Gabin Vanila',
    price: 'Rp 10.000',
    calories: 250,
    image: '/assets/images/regenerated_image_1790068977977.png',
    category: 'Classic Vanilla',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apa yang membuat Gabin Ice Cream begitu istimewa?',
    answer: 'Kami menggunakan 100% es krim berkualitas tinggi yang dipadukan dengan biskuit gabin renyah pilihan. Tanpa pemanis buatan berlebih, menghasilkan sensasi gurih renyah di luar dan lumer lembut di dalam.',
  },
  {
    id: 'faq-2',
    question: 'Apakah melayani pesan antar / delivery?',
    answer: 'Ya! Kami melayani pengiriman area Pekanbaru dan sekitarnya menggunakan kemasan berinsulasi khusus agar es krim tetap beku dan biskuit tetap renyah saat tiba di tempat Anda.',
  },
  {
    id: 'faq-3',
    question: 'Berapa lama daya simpan Gabin Ice Cream?',
    answer: 'Jika disimpan dalam freezer bersuhu -18°C, Gabin Ice Cream dapat bertahan hingga 1 bulan dengan kerenyahan biskuit dan tekstur es krim yang tetap terjaga sempurna.',
  },
  {
    id: 'faq-4',
    question: 'Bisakah memesan dalam jumlah banyak untuk pesta atau acara?',
    answer: 'Tentu saja! Kami menyediakan paket porsi pesta, arisan, hingga acara kantor dengan penawaran harga spesial. Hubungi kami langsung via kontak untuk pemesanan katering.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Biskuit gabinnya renyah banget dan es krim di dalamnya beneran padat dan lumer di mulut. Varian Oreo sama Coklat jadi favorit keluarga kami di rumah!',
    name: 'Rina Wulandari',
    role: 'Pekanbaru',
    initials: 'RW',
  },
  {
    id: 'test-2',
    quote: 'Rasanya pas, manisnya pas nggak bikin eneg karena menggunakan 100% ice cream asli. Dikemas rapi dan tetap beku pas sampai di Panam. Recommended banget!',
    name: 'Budi Santoso',
    role: 'Panam, Pekanbaru',
    initials: 'BS',
  },
  {
    id: 'test-3',
    quote: 'Matcha Green Tea-nya wangi banget, berpadu sempurna sama gurihnya biskuit gabin. Cocok banget buat camilan santai bareng teman-teman di sore hari!',
    name: 'Siti Nurhaliza',
    role: 'Mahasiswi, Pekanbaru',
    initials: 'SN',
  },
];

export const SCOOP_IMAGE = '/assets/images/scoop.jpg';
