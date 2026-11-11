import { Component } from '@angular/core';
import { Reveal } from '../reveal.directive';

interface Logo {
  src: string;
  alt: string;
  /** Opsional: jika diisi, logo menjadi link yang dibuka di tab baru. */
  href?: string;
}

interface LogoGroup {
  title: string;
  label: string;
  /** Kosong = tampilkan placeholder sementara. */
  logos: Logo[];
}

/** Dua section terpisah berlatar putih penuh: Sponsored by dan Supported by. */
@Component({
  selector: 'app-logo-showcase',
  imports: [Reveal],
  host: { class: 'block' },
  template: `
    @for (g of groups; track g.title) {
      <section [attr.aria-label]="g.title" class="w-full bg-white py-16 text-brand-950 sm:py-20">
        <div appReveal class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <h2 class="text-center text-3xl font-extrabold uppercase sm:text-4xl">{{ g.title }}</h2>
          <ul class="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            @for (logo of g.logos; track logo.src) {
              <li class="relative flex aspect-[3/2] w-32 items-center justify-center p-2 transition-transform duration-300 ease-out hover:z-10 motion-safe:hover:scale-[1.08] motion-safe:has-[a:focus-visible]:scale-[1.05] sm:w-40 lg:w-44">
                @if (logo.href) {
                  <a
                    [href]="logo.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    [attr.aria-label]="logo.alt + ' (buka di tab baru)'"
                    class="flex size-full items-center justify-center rounded-lg focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                  >
                    <img [src]="logo.src" [alt]="logo.alt" loading="lazy" class="max-h-full max-w-full object-contain" />
                  </a>
                } @else {
                  <img [src]="logo.src" [alt]="logo.alt" loading="lazy" class="max-h-full max-w-full object-contain" />
                }
              </li>
            } @empty {
              @for (n of slots; track n) {
                <li class="flex aspect-[3/2] w-32 flex-col items-center justify-center gap-2 sm:w-40 lg:w-44 rounded-xl border border-dashed border-slate-300 p-2 text-slate-500">
                  <svg class="size-8 text-slate-400" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                    @switch (n % 3) {
                      @case (0) { <circle cx="16" cy="16" r="12" /> }
                      @case (1) { <rect x="5" y="5" width="22" height="22" rx="4" /> }
                      @default { <path d="M16 3l13 24H3z" /> }
                    }
                  </svg>
                  <span class="text-center text-xs font-medium">{{ g.label }}</span>
                </li>
              }
            }
          </ul>
          @if (!g.logos.length) {
            <p class="mt-4 text-center text-sm text-slate-500">Logo sementara, akan diganti logo resmi.</p>
          }
        </div>
      </section>
    }
  `,
})
export class LogoShowcase {
  protected readonly slots = [0, 1, 2, 3, 4, 5];

  // Isi `logos` dengan file di public/assets/images/ (mis. 'assets/images/supporters/nama.png').
  protected readonly groups: LogoGroup[] = [
    { title: 'Sponsored by', label: 'Sponsor Logo', logos: [
      { src: 'assets/images/sponsored/sak.webp', alt: 'SAK Official' },
      { src: 'assets/images/sponsored/forester.webp', alt: 'Forester' },
      { src: 'assets/images/sponsored/gulf+.webp', alt: 'Gulf+', href: 'https://gulf.co.id/' },
      { src: 'assets/images/sponsored/lpl.webp', alt: 'LPL Kargo', href: 'https://www.instagram.com/lpl_kargo_ekpress/' },
      { src: 'assets/images/sponsored/dapoer_mbok_jonggreng.webp', alt: 'Dapoer Mbok Jonggreng', href: 'https://www.instagram.com/dapoermbokjonggreng/' },
      { src: 'assets/images/sponsored/rumah_zakat.webp', alt: 'Rumah Zakat', href: 'https://www.instagram.com/rumahzakat/' },
      { src: 'assets/images/sponsored/banua_cedera.webp', alt: 'Banua Cedera', href: 'https://www.instagram.com/banuacedera/' },
      { src: 'assets/images/sponsored/duta-binjas.webp', alt: 'Duta Binjas', href: 'https://www.instagram.com/duta_bimbel_binjas_sulteng/' },
      { src: 'assets/images/sponsored/geprek-yuks.webp', alt: 'Geprek Yuks', href: 'https://www.instagram.com/geprekyuksss.id/' },
      { src: 'assets/images/sponsored/bosowa-parigi.webp', alt: 'Bosowa Berlian Parigi', href: 'https://www.instagram.com/bosowaberlianparigi/' },
      { src: 'assets/images/sponsored/mustika-gym.webp', alt: 'Mustika Gym', href: 'https://www.instagram.com/mustika.gym/' },
      { src: 'assets/images/sponsored/toko-maman.webp', alt: 'Toko Maman', href: 'https://www.instagram.com/tokomaman/' },
      { src: 'assets/images/sponsored/bsi.webp', alt: 'BSI', href: 'https://www.instagram.com/banksyariahindonesia/' },
      { src: 'assets/images/sponsored/adi-putra.webp', alt: 'Adhi Putra', href: 'https://www.instagram.com/bus.adhiputra/' },
    ] },
    { title: 'Supported by', label: 'Supporting Organization', logos: [
      { src: 'assets/images/supporters/sulteng.svg', alt: 'Pemerintah Provinsi Sulawesi Tengah', href: 'https://sultengprov.go.id/' },
      { src: 'assets/images/supporters/sigi.png', alt: 'Pemerintah Kabupaten Sigi', href: 'https://sigikab.go.id/' },
      { src: 'assets/images/supporters/koni-sulteng.png', alt: 'KONI Sulawesi Tengah', href: 'https://konisulteng.id/' },
      { src: 'assets/images/supporters/basarnas.webp', alt: 'Basarnas', href: 'https://www.instagram.com/kantorsar_palu/' },
      { src: 'assets/images/supporters/alti-sulteng.webp', alt: 'ALTI Sulawesi Tengah', href: 'https://altisulteng.or.id/' },
      { src: 'assets/images/sponsored/alti-donggala.webp', alt: 'ALTI Donggala', href: 'https://www.instagram.com/alti_donggala/' },
      { src: 'assets/images/supporters/champurun.png', alt: 'Champurun', href: 'https://www.instagram.com/champurun/' },
      { src: 'assets/images/supporters/infotrailrunpalu.png', alt: 'Inforailrunpalu', href: 'https://www.instagram.com/infotrailrunpalu/' },
      { src: 'assets/images/supporters/uwetumbu.png', alt: 'Uwetumbu Trail Run', href: 'https://www.instagram.com/uwetumbu_trailrun_palu/' },
      { src: 'assets/images/supporters/wildtrac.png', alt: 'Wildtrac', href: 'https://www.instagram.com/wildtrac.trailrunning/' },
    ] },
  ];
}
