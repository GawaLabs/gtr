import { Component } from '@angular/core';
import { EVENT } from '../event-data';
import { Reveal } from '../reveal.directive';

interface ContactPerson {
  name: string;
  /** Nomor sebagaimana ditulis (dengan angka 0 di depan). */
  phone: string;
}

/** `0852...` → `+62852...` (format internasional untuk tel:). */
const toInternational = (phone: string) => '62' + phone.replace(/\D/g, '').replace(/^0/, '');

@Component({
  selector: 'app-contact-page',
  imports: [Reveal],
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
          Contact Us
        </h1>
        <p class="hero-in mt-6 max-w-xl text-lg text-brand-100 [--hero-delay:200ms] sm:text-xl">
          Punya pertanyaan seputar {{ event.fullName }}? Hubungi panitia melalui narahubung di bawah ini.
        </p>
      </div>
    </section>

    <section aria-labelledby="judul-kontak" class="bg-brand-100 py-16 text-brand-950 sm:py-24">
      <div appReveal class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <p class="text-sm font-bold tracking-widest text-brand-700 uppercase">Narahubung</p>
        <h2 id="judul-kontak" class="mt-3 text-4xl font-black uppercase sm:text-5xl">Contact Person</h2>
        <ul class="mt-10 grid gap-6 md:grid-cols-2">
          @for (p of people; track p.name) {
            <li class="flex flex-col rounded-3xl bg-white p-8 shadow-sm">
              <h3 class="text-3xl font-extrabold">{{ p.name }}</h3>
              <p class="mt-4 text-xs font-semibold tracking-widest text-brand-700 uppercase">Phone</p>
              <a
                [href]="'tel:+' + intl(p.phone)"
                class="mt-1 w-fit rounded text-2xl font-extrabold text-brand-700 hover:underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                [attr.aria-label]="'Telepon ' + p.name + ' di ' + p.phone"
              >
                {{ p.phone }}
              </a>
              <a
                [href]="'https://wa.me/' + intl(p.phone)"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-brand-700 px-8 py-3 font-bold text-white transition-colors hover:bg-brand-800 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                Hubungi via WhatsApp<span class="sr-only"> {{ p.name }} (buka di tab baru)</span>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class ContactPage {
  protected readonly event = EVENT;
  protected readonly intl = toInternational;
  protected readonly people: readonly ContactPerson[] = [
    { name: 'Deddy', phone: '085255122830' },
    { name: 'Arman', phone: '0811452222' },
  ];
}
