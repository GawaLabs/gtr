import { Component } from '@angular/core';
import { EVENT } from '../event-data';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer id="kontak" class="bg-brand-950 py-12 text-brand-100">
      <div class="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <span class="block aspect-[1.85] h-16 shrink-0 overflow-hidden">
            <img [src]="event.logo" alt="Logo Gawalise TrailRun" width="1417" height="1417" loading="lazy" class="size-full object-cover" />
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
      <p class="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 pt-6 text-sm sm:px-8 lg:px-10">
        &copy; 2026 {{ event.fullName }}.
      </p>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly event = EVENT;
}
