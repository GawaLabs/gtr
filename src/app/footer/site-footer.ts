import { Component } from '@angular/core';
import { EVENT } from '../event-data';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer id="kontak" class="bg-brand-950 py-12 text-brand-100">
      <div class="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <span class="block aspect-square size-24 max-w-full shrink-0">
            <img [src]="event.logo" alt="Logo Gawalise TrailRun" width="1417" height="1417" loading="lazy" class="size-full object-contain" />
          </span>
          <div>
            <p class="text-lg font-extrabold text-white">{{ event.fullName }}</p>
            <p>{{ event.date }}</p>
            <p>{{ event.location }}</p>
          </div>
        </div>

        <!-- Area kanan: disiapkan untuk menu footer (belum ada tautan). -->
        <div class="md:ml-auto"></div>
      </div>
      <div class="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 px-5 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>&copy; 2026 {{ event.fullName }}.</p>
        <p class="self-end font-mono text-xs text-brand-100/60">
          Site by
          <a
            href="https://www.instagram.com/ucuptopekox/"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded underline-offset-4 transition-colors hover:text-accent-yellow hover:underline focus-visible:text-accent-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-yellow"
            >Ucup Topekox<span class="sr-only"> (Instagram, buka di tab baru)</span></a
          >
        </p>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly event = EVENT;
}
