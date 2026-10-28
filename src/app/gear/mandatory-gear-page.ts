import { Component } from '@angular/core';
import { EVENT } from '../event-data';
import { Reveal } from '../reveal.directive';

type Status = 'wajib' | 'opsional' | 'disarankan';

interface GearItem {
  name: string;
  note?: string;
  k7: Status;
  k18: Status;
}

@Component({
  selector: 'app-mandatory-gear-page',
  imports: [Reveal],
  template: `
    <section
      class="relative isolate overflow-hidden bg-linear-to-br from-brand-950 via-brand-900 to-brand-700 text-white"
    >
      <div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <p class="hero-in text-sm font-bold tracking-widest text-accent-yellow uppercase">{{ event.fullName }}</p>
        <h1 class="hero-in mt-3 text-5xl leading-[0.95] font-black uppercase [--hero-delay:100ms] sm:text-7xl">
          Mandatory Gear
        </h1>
        <p class="hero-in mt-6 max-w-xl text-lg text-brand-100 [--hero-delay:200ms] sm:text-xl">
          Daftar perlengkapan wajib, opsional, dan disarankan untuk kategori 7K dan 18K.
        </p>
      </div>
    </section>

    <section aria-labelledby="judul-gear" class="bg-brand-100 py-16 text-brand-950 sm:py-24">
      <div appReveal class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <p class="text-sm font-bold tracking-widest text-brand-700 uppercase">Race Info</p>
        <h2 id="judul-gear" class="mt-3 text-4xl font-black uppercase sm:text-5xl">Daftar Perlengkapan</h2>

        <div class="mt-10 overflow-x-auto rounded-3xl bg-white shadow-sm">
          <table class="w-full min-w-136 text-left">
            <caption class="sr-only">Perlengkapan wajib menurut kategori lomba</caption>
            <thead>
              <tr class="border-b border-brand-100 text-sm tracking-widest text-brand-700 uppercase">
                <th scope="col" class="px-5 py-4">Perlengkapan</th>
                <th scope="col" class="px-5 py-4">7K</th>
                <th scope="col" class="px-5 py-4">18K</th>
              </tr>
            </thead>
            <tbody>
              @for (g of gear; track g.name) {
                <tr class="border-b border-brand-100 last:border-0">
                  <th scope="row" class="px-5 py-4 font-bold">
                    {{ g.name }}
                    @if (g.note) {
                      <span class="block text-sm font-normal text-brand-700">{{ g.note }}</span>
                    }
                  </th>
                  <td class="px-5 py-4 font-semibold">{{ label[g.k7] }}</td>
                  <td class="px-5 py-4 font-semibold">{{ label[g.k18] }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <img
            src="assets/images/mandatori-1.webp"
            alt="Infografis Mandatory Gear 7K dan 18K"
            width="2000"
            height="2000"
            loading="lazy"
            class="w-full rounded-3xl shadow-sm"
          />
          <img
            src="assets/images/mandatori-2.webp"
            alt="Ilustrasi perlengkapan Mandatory Gear GTR Nambaso 2026"
            width="2000"
            height="2000"
            loading="lazy"
            class="w-full rounded-3xl shadow-sm"
          />
        </div>
      </div>
    </section>
  `,
})
export class MandatoryGearPage {
  protected readonly event = EVENT;
  protected readonly label: Record<Status, string> = {
    wajib: 'Wajib',
    opsional: 'Opsional',
    disarankan: 'Disarankan',
  };
  protected readonly gear: readonly GearItem[] = [
    { name: 'File GPX Rute Lomba', k7: 'wajib', k18: 'wajib' },
    { name: 'Nomor BIB', k7: 'wajib', k18: 'wajib' },
    { name: 'Air / Flask', note: 'Min. 500 ML / 2', k7: 'wajib', k18: 'wajib' },
    { name: 'Jaket Windproof / Jas Hujan Ringan', k7: 'opsional', k18: 'wajib' },
    { name: 'Handphone', k7: 'wajib', k18: 'wajib' },
    { name: 'Makanan Ringan / Makanan Berenergi', k7: 'wajib', k18: 'wajib' },
    { name: 'Obat Pribadi', k7: 'wajib', k18: 'wajib' },
    { name: 'Peluit', k7: 'wajib', k18: 'wajib' },
    { name: 'Gelas Lipat / Gelas Pribadi', note: 'Praktis dan ringan', k7: 'wajib', k18: 'wajib' },
    { name: 'Vest Lari / Tas', k7: 'opsional', k18: 'wajib' },
    { name: 'Headlamp', k7: 'opsional', k18: 'wajib' },
    { name: 'Sarung Tangan Hangat', k7: 'disarankan', k18: 'disarankan' },
    { name: 'Trekking Pole', k7: 'opsional', k18: 'disarankan' },
    { name: 'Kaca Mata', k7: 'opsional', k18: 'opsional' },
    { name: 'Topi Pelindung dari Sinar Matahari', k7: 'opsional', k18: 'opsional' },
  ];
}
