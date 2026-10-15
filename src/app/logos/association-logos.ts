import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-association-logos',
  template: `
    <ul class="flex flex-wrap items-center" [class]="listClass()">
      @for (logo of visibleLogos(); track logo.src) {
        <li>
          <img
            [src]="logo.src"
            [alt]="logo.alt"
            [attr.width]="logo.width"
            [attr.height]="logo.height"
            [class]="height()"
            class="block w-auto max-w-full"
          />
        </li>
      }
    </ul>
  `,
})
export class AssociationLogos {
  /** Kelas tinggi Tailwind untuk logo, mis. `h-10`. */
  readonly height = input('h-10');
  /** Kelas tata letak tambahan untuk daftar logo (arah, gap, alignment). */
  readonly listClass = input('gap-3');
  /** Tampilkan logo ITRA National League di posisi paling kanan (setelah ITRA dan UTMB). */
  readonly includeNationalLeague = input(false);

  // Logo sudah berlatar transparan (PNG RGBA / palette dengan alpha).
  private readonly nationalLeague = { src: 'assets/images/itra-nl.png', alt: 'ITRA National League', width: 1024, height: 353 };

  protected readonly visibleLogos = computed(() =>
    this.includeNationalLeague() ? [...this.logos, this.nationalLeague] : this.logos,
  );

  protected readonly logos = [
    { src: 'assets/images/logo-itra.png', alt: 'ITRA International Trail Running Association', width: 597, height: 156 },
    { src: 'assets/images/logo-utmb.png', alt: 'UTMB Index', width: 740, height: 179 },
  ];
}
