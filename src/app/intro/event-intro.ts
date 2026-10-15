import { Component } from '@angular/core';
import { Reveal } from '../reveal.directive';

@Component({
  imports: [Reveal],
  selector: 'app-event-intro',
  template: `
    <section id="tentang" class="bg-white py-20 text-brand-950 sm:py-28">
      <div class="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-10">
        <div appReveal>
          <p class="text-sm font-bold tracking-widest text-brand-700 uppercase">Tentang Event</p>
          <h2 class="mt-3 text-4xl font-black uppercase text-balance sm:text-5xl">
            Rasakan jalur alam <span class="text-brand-700">Gawalise</span>
          </h2>
          <div class="mt-5 h-1.5 w-20 rounded-full bg-accent-yellow"></div>
        </div>
        <p appReveal [revealDelay]="120" class="max-w-prose self-center border-l-4 border-brand-700 pl-6 text-xl leading-relaxed text-pretty text-brand-900 sm:text-2xl sm:leading-relaxed">
          Taklukkan jalur ekstrem Pegunungan Gawalise, Sulawesi Tengah. Rasakan 
          sensasi lari lintas alam megah dengan pemandangan Lembah Palu &amp; Teluk Palu.
        </p>
      </div>
    </section>
  `,
})
export class EventIntro {}
