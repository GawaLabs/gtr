import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    root = fixture.nativeElement as HTMLElement;
  });

  it('renders hero content', () => {
    expect(root.querySelector('h1')?.textContent).toContain('Gawalise Nambaso');
    expect(root.querySelector('h1')?.textContent).toContain('Trail Run');
    expect(root.textContent).toContain('20 Desember 2026');
    expect(root.textContent).toContain('Desa Kanuna');
  });

  it('has a target element for every in-page link', () => {
    const ids = Array.from(root.querySelectorAll('a[href^="#"]')).map((a) =>
      a.getAttribute('href')!.slice(1),
    );
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) expect(root.querySelector('#' + id), id).not.toBeNull();
  });

  it('shows both race categories with correct stats', () => {
    const fun = root.querySelector('#trail-fun')!.textContent!;
    const summit = root.querySelector('#summit-trail')!.textContent!;
    for (const t of ['7 KM', '410 m', '4 Jam']) expect(fun).toContain(t);
    for (const t of ['18 KM', '1.060 m', '12 Jam']) expect(summit).toContain(t);
  });

  it('links registration CTAs to the registration site and keeps About inert', () => {
    const url = 'https://gtr-nambaso2026-cloudflare.gawalise-trailrun.workers.dev/';
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('a')).filter((a) =>
      a.textContent!.includes('Daftar Sekarang'),
    );
    expect(links.length).toBe(2);
    for (const a of links) expect(a.getAttribute('href')).toBe(url);
    const about = Array.from(root.querySelectorAll('nav a')).find((a) => a.textContent!.trim() === 'About')!;
    expect(about.hasAttribute('href')).toBe(false);
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
});
