import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { EVENT, NAV_ITEMS, NavItem, SECTION_IDS } from '../event-data';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
})
export class SiteHeader implements OnInit, OnDestroy {
  protected readonly event = EVENT;
  protected readonly items = NAV_ITEMS;
  protected readonly mobileOpen = signal(false);
  protected readonly openMenu = signal<string | null>(null);
  protected readonly active = signal('home');
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) this.active.set(e.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  protected toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
    this.openMenu.set(null);
  }

  protected toggleMenu(id: string): void {
    this.openMenu.update((cur) => (cur === id ? null : id));
  }

  protected hover(id: string | null): void {
    // Hover hanya membuka dropdown pada desktop dengan pointer mouse.
    if (window.matchMedia('(min-width: 1024px) and (hover: hover)').matches) this.openMenu.set(id);
  }

  protected closeAll(): void {
    this.mobileOpen.set(false);
    this.openMenu.set(null);
  }

  protected focusOut(event: FocusEvent, host: HTMLElement): void {
    if (!host.contains(event.relatedTarget as Node | null)) this.openMenu.set(null);
  }

  protected isActive(item: NavItem): boolean {
    const id = this.active();
    return item.id === 'race-info' ? id === 'lokasi' : item.id === id;
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeAll();
  }
}
