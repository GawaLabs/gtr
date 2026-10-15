import { Component } from '@angular/core';
import { EVENT, MAP } from '../event-data';
import { Reveal } from '../reveal.directive';
import { EventMap } from './event-map';

@Component({
  selector: 'app-location-page',
  imports: [Reveal, EventMap],
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
          Lokasi Event
        </h1>
        <p class="hero-in mt-6 max-w-2xl text-lg text-brand-100 [--hero-delay:200ms] sm:text-xl">{{ event.location }}</p>
      </div>
    </section>

    <section aria-labelledby="judul-info-lokasi" class="bg-brand-100 py-16 text-brand-950 sm:py-24">
      <div appReveal class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <p class="text-sm font-bold tracking-widest text-brand-700 uppercase">Race Info</p>
        <h2 id="judul-info-lokasi" class="mt-3 text-4xl font-black uppercase sm:text-5xl">Informasi Lokasi</h2>
        <dl class="mt-10 grid gap-4 sm:grid-cols-2">
          @for (i of info; track i.label) {
            <div class="rounded-2xl bg-white p-6 shadow-sm" [class]="i.wide ? 'sm:col-span-2' : ''">
              <dt class="text-xs font-semibold tracking-widest text-brand-700 uppercase">{{ i.label }}</dt>
              <dd class="mt-2 text-2xl font-extrabold">{{ i.value }}</dd>
            </div>
          }
        </dl>
      </div>
    </section>

    <section aria-labelledby="judul-peta" class="bg-white py-16 text-brand-950 sm:py-24">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div appReveal class="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-900 to-brand-700 p-6 text-white sm:p-10">
          <h2 id="judul-peta" class="text-3xl font-black uppercase sm:text-4xl">Peta Lokasi</h2>
          <a
            [href]="event.mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-accent-yellow px-8 py-3 font-bold text-brand-950 transition-colors hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Buka di Google Maps<span class="sr-only"> (buka di tab baru)</span>
          </a>
          <div class="relative isolate mt-8 overflow-hidden rounded-2xl border border-white/20 bg-brand-950/40">
            <app-event-map />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LocationPage {
  protected readonly event = EVENT;
  protected readonly info = [
    { label: 'Nama Lokasi', value: MAP.label, wide: false },
    { label: 'Tanggal', value: EVENT.date, wide: false },
    { label: 'Event', value: EVENT.fullName, wide: true },
    { label: 'Alamat', value: EVENT.location, wide: true },
  ];
}
