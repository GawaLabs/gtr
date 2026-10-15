import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/');
    await fixture.whenStable();
    root = fixture.nativeElement as HTMLElement;
  });

  it('renders hero content', () => {
    expect(root.querySelector('h1')?.textContent).toContain('Gawalise Nambaso');
    expect(root.querySelector('h1')?.textContent).toContain('Trail Run');
    expect(root.textContent).toContain('20 Desember 2026');
    expect(root.textContent).toContain('Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah');
  });

  it('has a target element for every in-page link', () => {
    const ids = Array.from(root.querySelectorAll('a[href^="#"]:not(.leaflet-container a)')).map((a) =>
      a.getAttribute('href')!.slice(1),
    );
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) expect(root.querySelector('#' + id), id).not.toBeNull();
  });

  it('shows both race categories with correct stats', () => {
    const fun = root.querySelector('#trail-fun')!.textContent!;
    const summit = root.querySelector('#summit-trail')!.textContent!;
    for (const t of ['7 KM', '410 m', '4 Jam']) expect(fun).toContain(t);
    for (const t of ['18 KM', '1.860 m', '12 Jam', 'Jaket WINDBREAKER Finisher 18K']) expect(summit).toContain(t);
    for (const t of ['Jersey Race Peserta 7K', 'BIB Number', 'Medali Finisher', 'Refreshment & Water Station', 'Meal', 'E-Certificate']) expect(fun).toContain(t);
  });

  it('links registration CTAs to the registration site and has no About menu item', () => {
    const url = 'https://gtr-nambaso2026-cloudflare.gawalise-trailrun.workers.dev/';
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('a')).filter((a) =>
      a.textContent!.includes('Daftar Sekarang'),
    );
    expect(links.length).toBe(2);
    for (const a of links) expect(a.getAttribute('href')).toBe(url);
    expect(root.querySelector('header nav')!.textContent).not.toContain('About');
    expect(root.querySelector('a[href="#kategori"]')?.textContent).toBeTruthy();
  });

  it('toggles the Kategori submenu', async () => {
    const btn = root.querySelector<HTMLButtonElement>('button[aria-controls="submenu-kategori"]')!;
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    btn.click();
    await fixture.whenStable();
    expect(btn.getAttribute('aria-expanded')).toBe('true');
  });

  it('shows logos in the card above the footer and white partner sections', () => {
    expect(root.textContent).not.toContain('Bersiap Menaklukkan');
    const srcs = Array.from(root.querySelectorAll('img')).map((i) => i.getAttribute('src'));
    expect(srcs.filter((s) => s === 'assets/images/logo-itra.png').length).toBe(2);
    expect(srcs.filter((s) => s === 'assets/images/logo-utmb.png').length).toBe(2);
    for (const name of ['Sponsored by', 'Supported by']) {
      const section = root.querySelector(`section[aria-label="${name}"]`)!;
      expect(section.classList).toContain('bg-white');
      expect(section.querySelectorAll('li').length).toBeGreaterThan(0);
    }
  });

  it('links the Kategori menu items to their detail pages', () => {
    const links = Array.from(root.querySelectorAll('#submenu-kategori a'));
    expect(links.map((l) => l.getAttribute('href'))).toEqual(['/kategori/7k-fun-trail', '/kategori/18k-summit-trail']);
  });

  it('links the 18K card to its detail page', () => {
    expect(root.querySelector('#summit-trail a[href="/kategori/18k-summit-trail"]')).not.toBeNull();
  });

  it('links the 7K card to its detail page', () => {
    const link = root.querySelector('#trail-fun a[href="/kategori/7k-fun-trail"]');
    expect(link).not.toBeNull();
  });

  it('renders the 7K detail page on a direct route', async () => {
    await TestBed.inject(Router).navigateByUrl('/kategori/7k-fun-trail');
    await fixture.whenStable();
    const text = root.textContent ?? '';
    expect(root.querySelector('h1')?.textContent).toContain('7K Fun Trail Run');
    for (const t of ['7 KM', '410 m', '4 Jam', '20 Desember 2026', 'Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah', 'Rute dan Elevation Profile', 'Buka di Google Maps', 'Jersey Race Peserta 7K', 'BIB Number', 'Medali Finisher', 'Refreshment & Water Station', 'Meal', 'E-Certificate'])
      expect(text).toContain(t);
    expect(root.querySelector('img[src="assets/images/categories/7K.webp"]')).not.toBeNull();
    expect(root.querySelector('footer')).not.toBeNull();
  });

  it('renders the 18K detail page on a direct route', async () => {
    await TestBed.inject(Router).navigateByUrl('/kategori/18k-summit-trail');
    await fixture.whenStable();
    const text = root.textContent ?? '';
    expect(root.querySelector('h1')?.textContent).toContain('18K Summit Trail');
    for (const t of ['18 KM', '1.860 m+', '12 Jam', '20 Desember 2026', 'Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah', 'Rute dan Elevation Profile', 'Buka di Google Maps', 'Jersey Race Peserta 18K', 'Jaket WINDBREAKER Finisher 18K', 'BIB Number & Medali Finisher', 'Water Station & Refreshment', 'Meal', 'E-Certificate'])
      expect(text).toContain(t);
    expect(text).not.toContain('1.060');
    expect(root.querySelector('img[src="assets/images/categories/18.webp"]')).not.toBeNull();
    expect(root.querySelector('footer')).not.toBeNull();
  });

  it('links the Contact menu item to the contact page', () => {
    const link = Array.from(root.querySelectorAll('header nav a')).find((a) => a.textContent?.trim() === 'Contact');
    expect(link?.getAttribute('href')).toBe('/contact');
  });

  it('renders the contact page on a direct route with dialable links', async () => {
    await TestBed.inject(Router).navigateByUrl('/contact');
    await fixture.whenStable();
    const text = root.textContent ?? '';
    expect(root.querySelector('h1')?.textContent).toContain('Contact Us');
    for (const t of ['Deddy', '085255122830', 'Arman', '0811452222']) expect(text).toContain(t);
    const hrefs = Array.from(root.querySelectorAll('main a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual([
      'tel:+6285255122830',
      'https://wa.me/6285255122830',
      'tel:+62811452222',
      'https://wa.me/62811452222',
    ]);
  });

  it('links the Race Info menu Lokasi item to the location page', () => {
    const links = Array.from(root.querySelectorAll('#submenu-race-info a'));
    expect(links.map((l) => l.getAttribute('href'))).toEqual(['/lokasi']);
  });

  it('renders the location page on a direct route', async () => {
    await TestBed.inject(Router).navigateByUrl('/lokasi');
    await fixture.whenStable();
    const text = root.textContent ?? '';
    expect(root.querySelector('h1')?.textContent).toContain('Lokasi Event');
    for (const t of ['Desa Kanuna', 'Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi, Provinsi Sulawesi Tengah', 'GAWALISE NAMBASO TRAIL RUN 2026', '20 Desember 2026', 'Buka di Google Maps'])
      expect(text).toContain(t);
    expect(root.querySelectorAll('.leaflet-container').length).toBe(1);
    const maps = root.querySelector('main a[href^="https://www.google.com/maps/place/Kantor+desa+kanuna"]');
    expect(maps?.getAttribute('target')).toBe('_blank');
  });
});
