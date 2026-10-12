export const EVENT = {
  nameLines: ['Gawalise Nambaso', 'Trail Run'],
  year: '2026',
  fullName: 'GAWALISE NAMBASO TRAIL RUN 2026',
  tagline: 'Bersiaplah menaklukkan jalur alam Gawalise!',
  date: '20 Desember 2026',
  location: 'Desa Kanuna',
  logo: 'assets/images/gtr-logo.png',
  registerUrl: 'https://gtr-nambaso2026-cloudflare.gawalise-trailrun.workers.dev/',
} as const;

export interface RaceCategory {
  id: string;
  distance: string;
  name: string;
  elevation: string;
  cutOff: string;
  description: string;
  cta: string;
  accent: 'yellow' | 'orange';
}

export const CATEGORIES: readonly RaceCategory[] = [
  {
    id: 'trail-fun',
    distance: '7 KM',
    name: 'Trail Fun',
    elevation: '410 m',
    cutOff: '4 Jam',
    description:
      'Pilihan untuk pelari yang ingin menikmati pengalaman trail running dengan jarak yang lebih singkat.',
    cta: 'Jelajahi Trail Fun',
    accent: 'yellow',
  },
  {
    id: 'summit-trail',
    distance: '18 KM',
    name: 'Summit Trail',
    elevation: '1.060 m',
    cutOff: '12 Jam',
    description:
      'Tantangan jarak lebih panjang bagi pelari yang ingin menguji ketahanan dan kemampuan di jalur trail.',
    cta: 'Jelajahi Summit Trail',
    accent: 'orange',
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  children?: readonly NavLink[];
}

/**
 * Tujuan menu About belum diberikan. Isi dengan URL resmi (atau anchor) saat tersedia;
 * selama masih undefined, item ditampilkan nonaktif dan tidak menavigasi ke mana pun.
 */
export const ABOUT_HREF: string | undefined = undefined;

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  {
    id: 'kategori',
    label: 'Kategori',
    children: [
      { label: '7 KM Trail Fun', href: '#trail-fun' },
      { label: '18 KM Summit Trail', href: '#summit-trail' },
    ],
  },
  { id: 'race-info', label: 'Race Info', children: [{ label: 'Lokasi', href: '#lokasi' }] },
  { id: 'about', label: 'About', href: ABOUT_HREF },
  { id: 'kontak', label: 'Kontak', href: '#kontak' },
];

export const SECTION_IDS = ['home', 'kategori', 'lokasi', 'kontak'] as const;
