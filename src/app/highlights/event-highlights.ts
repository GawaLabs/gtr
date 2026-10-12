import { Component } from '@angular/core';
import { Reveal } from '../reveal.directive';

@Component({
  imports: [Reveal],
  selector: 'app-event-highlights',
  template: `
    <section aria-labelledby="sorotan" class="bg-brand-800 py-16 text-white sm:py-20">
      <div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <h2 id="sorotan" class="sr-only">Sorotan Event</h2>
        <ul class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          @for (h of highlights; track h.value; let i = $index) {
            <li appReveal [revealDelay]="i * 90" class="rounded-2xl border border-white/15 bg-brand-900/60 p-5 sm:p-6">
              <p class="font-display text-3xl font-black text-accent-yellow sm:text-4xl">{{ h.value }}</p>
              <p class="mt-1 font-semibold text-brand-100">{{ h.label }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class EventHighlights {
  protected readonly highlights = [
    { value: '2', label: 'Kategori Lomba' },
    { value: '7 KM', label: 'Trail Fun' },
    { value: '18 KM', label: 'Summit Trail' },
    { value: '20 Desember 2026', label: 'Tanggal Event' },
  ];
}
