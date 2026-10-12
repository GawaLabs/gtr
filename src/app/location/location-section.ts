import { Component } from '@angular/core';
import { Reveal } from '../reveal.directive';
import { EVENT } from '../event-data';

@Component({
  imports: [Reveal],
  selector: 'app-location-section',
  template: `
    <section id="lokasi" class="bg-white py-20 text-brand-950 sm:py-28">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div appReveal class="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-900 to-brand-700 p-8 text-white sm:p-14">
          <svg class="pointer-events-none absolute -right-10 -bottom-10 h-72 w-auto text-white/10" viewBox="0 0 400 300" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
            <path d="M0 280 L120 140 L190 210 L290 60 L400 250" />
            <path d="M0 300 L130 170 L195 235 L290 100 L400 280" />
          </svg>
          <div class="relative max-w-2xl">
            <p class="flex items-center gap-2 text-sm font-bold tracking-widest text-accent-yellow uppercase">
              <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clip-rule="evenodd" />
              </svg>
              Titik Event
            </p>
            <h2 class="mt-3 text-4xl font-black uppercase sm:text-5xl">Lokasi Event</h2>
            <p class="mt-4 text-3xl font-extrabold">{{ event.location }}</p>
            <p class="mt-4 text-lg text-brand-100">
              Informasi detail titik start, titik finish, dan akses menuju lokasi akan diumumkan
              melalui kanal resmi penyelenggara.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LocationSection {
  protected readonly event = EVENT;
}
