export const EVENT = {
  nameLines: ['Gawalise Nambaso', 'Trail Run'],
  year: '2026',
  fullName: 'GAWALISE NAMBASO TRAIL RUN 2026',
  tagline: 'Bersiaplah menaklukkan jalur alam Gawalise!',
  date: '20 Desember 2026',
  location: 'Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah',
  logo: 'assets/images/gtr-logo.png',
  mapsUrl:
    'https://www.google.com/maps/place/Kantor+desa+kanuna+kec.kinovaro+kab.sigi/@-0.8963267,119.8277849,100m/data=!3m1!1e3!4m14!1m7!3m6!1s0x2d8bed7d84aa5819:0x1f6fc67298c1ecf4!2sKantor+desa+kanuna+kec.kinovaro+kab.sigi!8m2!3d-0.8962992!4d119.8276689!16s%2Fg%2F11s0bbm6vz!3m5!1s0x2d8bed7d84aa5819:0x1f6fc67298c1ecf4!8m2!3d-0.8962992!4d119.8276689!16s%2Fg%2F11s0bbm6vz?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D',
  registerUrl: 'https://gtr-nambaso2026-cloudflare.gawalise-trailrun.workers.dev/',
} as const;

/** Peta Leaflet + OpenStreetMap. Kebijakan tile: https://operations.osmfoundation.org/policies/tiles/ */
export const MAP = {
  label: 'Desa Kanuna',
  lat: -0.8962992,
  lng: 119.8276689,
  zoom: 15,
  tileUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
  iconPath: 'assets/leaflet/',
} as const;

export interface Benefit {
  label: string;
  highlight?: boolean;
}

export interface RaceCategory {
  id: string;
  distance: string;
  name: string;
  elevation: string;
  cutOff: string;
  benefits: readonly Benefit[];
  /** Rute halaman detail (jika sudah ada). */
  route?: string;
  /** Gambar rute dan elevation profile pada halaman detail. */
  detailImage?: string;
  description: string;
  cta: string;
  accent: 'yellow' | 'orange';
}

export const CATEGORIES: readonly RaceCategory[] = [
  {
    id: 'trail-fun',
    route: '/kategori/7k-fun-trail',
    detailImage: 'assets/images/categories/7K.webp',
    distance: '7 KM',
    name: 'Trail Fun',
    elevation: '410 m',
    cutOff: '4 Jam',
    benefits: [
      { label: 'Jersey Race Peserta 7K' },
      { label: 'BIB Number' },
      { label: 'Medali Finisher' },
      { label: 'Refreshment & Water Station' },
      { label: 'Meal' },
      { label: 'E-Certificate' },
    ],
    description:
      'Pilihan untuk pelari yang ingin menikmati pengalaman trail running dengan jarak yang lebih singkat.',
    cta: 'Detail Trail Fun',
    accent: 'yellow',
  },
  {
    id: 'summit-trail',
    route: '/kategori/18k-summit-trail',
    detailImage: 'assets/images/categories/18.webp',
    distance: '18 KM',
    name: 'Summit Trail',
    elevation: '1.860 m',
    cutOff: '12 Jam',
    benefits: [
      { label: 'Jersey Race Peserta 18K' },
      { label: 'Jaket WINDBREAKER Finisher 18K', highlight: true },
      { label: 'BIB Number & Medali Finisher' },
      { label: 'Water Station & Refreshment' },
      { label: 'Meal' },
      { label: 'E-Certificate' },
    ],
    description:
      'Tantangan jarak lebih panjang bagi pelari yang ingin menguji ketahanan dan kemampuan di jalur trail.',
    cta: 'Detail Summit Trail',
    accent: 'orange',
  },
];

export interface NavLink {
  label: string;
  href: string;
  /** Rute Angular Router; jika ada, dipakai menggantikan href anchor. */
  route?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  /** Rute Angular Router; jika ada, dipakai menggantikan href anchor. */
  route?: string;
  children?: readonly NavLink[];
}

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  {
    id: 'kategori',
    label: 'Kategori',
    children: [
      { label: '7 KM Trail Fun', href: '#trail-fun', route: '/kategori/7k-fun-trail' },
      { label: '18 KM Summit Trail', href: '#summit-trail', route: '/kategori/18k-summit-trail' },
    ],
  },
  { id: 'race-info', label: 'Race Info', children: [{ label: 'Lokasi', href: '#lokasi', route: '/lokasi' }] },
  { id: 'kontak', label: 'Contact', route: '/contact' },
];

export const SECTION_IDS = ['home', 'kategori', 'lokasi'] as const;
