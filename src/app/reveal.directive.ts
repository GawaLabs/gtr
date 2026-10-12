import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Fade-in + geser ke atas saat elemen masuk viewport (sekali saja).
 * Kelas tersembunyi hanya ditambahkan lewat JS, sehingga konten tetap terlihat
 * jika JS gagal, IntersectionObserver tidak tersedia, atau pengguna memilih reduced motion.
 */
@Directive({ selector: '[appReveal]' })
export class Reveal implements OnInit, OnDestroy {
  readonly delay = input(0, { alias: 'revealDelay' });
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') return;

    this.el.classList.add('reveal-init');
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (this.delay()) this.el.style.transitionDelay = `${this.delay()}ms`;
        this.el.classList.add('reveal-in');
        this.observer?.disconnect();
        setTimeout(() => {
          // Lepas kelas reveal agar transisi lain (mis. hover) tidak tertimpa.
          this.el.style.transitionDelay = '';
          this.el.classList.remove('reveal-init', 'reveal-in');
        }, 1200);
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(this.el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
