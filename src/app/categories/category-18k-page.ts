import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES, EVENT } from '../event-data';
import { LocationSection } from '../location/location-section';
import { Reveal } from '../reveal.directive';

@Component({
  selector: 'app-category-18k-page',
  imports: [Reveal, RouterLink, LocationSection],
  template: `
    <section
      class="relative isolate overflow-hidden bg-linear-to-br from-brand-950 via-brand-900 to-brand-700 text-white"
    >
      <svg
        class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3 w-full text-brand-100/15"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M0 520 L220 330 L360 420 L600 150 L820 380 L960 290 L1200 480" />
        <path d="M0 560 L240 380 L370 460 L600 220 L810 430 L960 350 L1200 520" />
      </svg>
      <div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <p class="hero-in text-sm font-bold tracking-widest text-accent-yellow uppercase">{{ event.fullName }}</p>
        <h1 class="hero-in mt-3 text-5xl leading-[0.95] font-black uppercase [--hero-delay:100ms] sm:text-7xl">
          18K Summit Trail
        </h1>
        <p class="hero-in mt-6 max-w-xl text-lg text-brand-100 [--hero-delay:200ms] sm:text-xl">{{ event.tagline }}</p>

        <dl class="hero-in mt-10 grid max-w-2xl grid-cols-3 gap-3 [--hero-delay:300ms] sm:gap-4">
          @for (s of stats; track s.label) {
            <div class="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4">
              <dt class="text-[10px] font-semibold tracking-widest text-brand-100/80 uppercase sm:text-xs">{{ s.label }}</dt>
              <dd class="mt-1 text-xl font-extrabold sm:text-3xl">{{ s.value }}</dd>
            </div>
          }
        </dl>

        <div class="hero-in mt-10 flex flex-col gap-3 [--hero-delay:450ms] sm:flex-row sm:gap-4">
          <a
            [href]="event.registerUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-12 items-center justify-center rounded-full bg-accent-yellow px-8 py-3 font-bold text-brand-950 transition-colors hover:bg-accent-orange focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Daftar Sekarang<span class="sr-only"> (buka di tab baru)</span>
          </a>
          <a
            routerLink="."
            fragment="rute"
            class="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/70 px-8 py-3 font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Lihat Rute &amp; Profil
          </a>
        </div>
      </div>
    </section>

    <section aria-labelledby="info-race" class="bg-brand-100 py-16 text-brand-950 sm:py-24">
      <div appReveal class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <p class="text-sm font-bold tracking-widest text-brand-700 uppercase">Race Information</p>
        <h2 id="info-race" class="mt-3 text-4xl font-black uppercase sm:text-5xl">Informasi Lomba</h2>
        <dl class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (i of info; track i.label) {
            <div class="rounded-2xl bg-white p-6 shadow-sm" [class]="i.wide ? 'sm:col-span-2 lg:col-span-2' : ''">
              <dt class="text-xs font-semibold tracking-widest text-brand-700 uppercase">{{ i.label }}</dt>
              <dd class="mt-2 text-2xl font-extrabold">{{ i.value }}</dd>
            </div>
          }
        </dl>
      </div>
    </section>

    <section id="rute" aria-labelledby="judul-rute" class="bg-white py-16 text-brand-950 sm:py-24">
      <div appReveal class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <p class="text-sm font-bold tracking-widest text-brand-700 uppercase">Peta &amp; Profil</p>
        <h2 id="judul-rute" class="mt-3 text-4xl font-black uppercase sm:text-5xl">Rute dan Elevation Profile</h2>
        <a
          [href]="image"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-10 block overflow-hidden rounded-3xl shadow-xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
        >
          <img
            [src]="image"
            width="4767"
            height="4767"
            loading="lazy"
            alt="Peta rute dan elevation profile 18K Summit Trail di Desa Kanuna: jalur dari Desa Kanuna menuju CP Puncak Gawalise di km 9 melalui Pos 1, Alang-alang dan Batu Gantung, grafik ketinggian 0 sampai 20 km dengan EG 1860 m, cut-off time 12 jam, start 05.00 dan finish 17.00."
            class="h-auto w-full"
          />
          <span class="sr-only">(buka gambar ukuran penuh di tab baru)</span>
        </a>
        <p class="mt-3 text-sm text-brand-700">Ketuk atau klik gambar untuk membuka ukuran penuh di tab baru.</p>
      </div>
    </section>

    <section aria-labelledby="judul-benefit" class="bg-brand-100 py-16 text-brand-950 sm:py-24">
      <div appReveal class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <p class="text-sm font-bold tracking-widest text-brand-700 uppercase">Untuk Peserta</p>
        <h2 id="judul-benefit" class="mt-3 text-4xl font-black uppercase sm:text-5xl">Benefit Peserta</h2>
        <ul class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          @for (b of benefits; track b.label) {
            <li
              class="flex items-center gap-3 rounded-2xl p-5 font-semibold shadow-sm"
              [class]="b.highlight ? 'bg-accent-orange font-bold text-brand-950 ring-2 ring-brand-950' : 'bg-white'"
            >
              <svg class="size-6 shrink-0" [class]="b.highlight ? 'text-brand-950' : 'text-brand-700'" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clip-rule="evenodd" />
              </svg>
              <span>{{ b.label }}</span>
              @if (b.highlight) {
                <span class="ml-auto rounded-full bg-brand-950 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">Eksklusif</span>
              }
            </li>
          }
        </ul>
        <a
          [href]="event.registerUrl"
            target="_blank"
            rel="noopener noreferrer"
          class="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-700 px-8 py-3 font-bold text-white transition-colors hover:bg-brand-800 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        >
          Daftar Sekarang
        </a>
      </div>
    </section>

    <app-location-section />
  `,
})
export class Category18kPage {
  protected readonly event = EVENT;
  private readonly category = CATEGORIES.find((c) => c.id === 'summit-trail')!;
  protected readonly benefits = this.category.benefits;
  protected readonly image = this.category.detailImage!;
  protected readonly stats = [
    { label: 'Jarak', value: this.category.distance },
    { label: 'Elevation Gain', value: this.category.elevation + '+' },
    { label: 'Cut-off Time', value: this.category.cutOff },
  ];
  protected readonly info = [
    ...this.stats.map((s) => ({ ...s, wide: false })),
    { label: 'Tanggal Event', value: EVENT.date, wide: false },
    // Info start/finish dan checkpoint diambil dari gambar rute 18.webp.
    { label: 'Start', value: '05.00', wide: false },
    { label: 'Finish', value: '17.00', wide: false },
    { label: 'COP Batu Gantung', value: 'Km 7, pukul 12.00', wide: false },
    { label: 'CP Puncak Gawalise', value: 'Km 9', wide: false },
    { label: 'Lokasi', value: EVENT.location, wide: true },
  ];
}
