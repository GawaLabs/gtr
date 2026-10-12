import { Component } from '@angular/core';
import { AssociationLogos } from './association-logos';
import { Reveal } from '../reveal.directive';

@Component({
  selector: 'app-association-section',
  imports: [AssociationLogos, Reveal],
  template: `
    <section aria-label="Logo ITRA dan UTMB Index" class="relative isolate overflow-hidden bg-linear-to-br from-brand-950 via-brand-900 to-brand-700 py-20 sm:py-28">
      <svg class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full w-full text-brand-100/10" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M0 340 L250 180 L400 270 L620 90 L840 280 L1000 200 L1200 330" />
        <path d="M0 390 L270 230 L410 320 L620 150 L830 330 L1000 260 L1200 380" />
      </svg>
      <div appReveal class="mx-auto flex max-w-3xl items-center justify-center px-5 sm:px-8">
        <app-association-logos height="h-14 sm:h-20" listClass="justify-center gap-x-10 gap-y-6 sm:gap-x-16" />
      </div>
    </section>
  `,
})
export class AssociationSection {}
