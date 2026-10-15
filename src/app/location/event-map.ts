import { Component, ElementRef, OnDestroy, afterNextRender, viewChild } from '@angular/core';
import * as L from 'leaflet';
import { MAP } from '../event-data';

/** Peta Leaflet + OpenStreetMap, dipakai bersama oleh section dan halaman lokasi. */
@Component({
  selector: 'app-event-map',
  host: { class: 'block' },
  template: `
    <div
      #mapEl
      role="region"
      aria-label="Peta interaktif lokasi: Desa Kanuna, Kecamatan Kinovaro, Kabupaten Sigi"
      class="h-80 w-full sm:h-96 lg:h-112"
    ></div>
  `,
})
export class EventMap implements OnDestroy {
  private readonly mapEl = viewChild.required<ElementRef<HTMLElement>>('mapEl');
  private map?: L.Map;
  private resizeObserver?: ResizeObserver;

  constructor() {
    afterNextRender(() => this.initMap());
  }

  private initMap(): void {
    if (this.map) return;
    const el = this.mapEl().nativeElement;
    const center: L.LatLngTuple = [MAP.lat, MAP.lng];
    this.map = L.map(el, { center, zoom: MAP.zoom, scrollWheelZoom: false });
    L.tileLayer(MAP.tileUrl, { maxZoom: 19, attribution: MAP.attribution }).addTo(this.map);
    const icon = L.icon({
      iconUrl: MAP.iconPath + 'marker-icon.png',
      iconRetinaUrl: MAP.iconPath + 'marker-icon-2x.png',
      shadowUrl: MAP.iconPath + 'marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    L.marker(center, { icon, title: MAP.label, alt: MAP.label })
      .addTo(this.map)
      .bindPopup(MAP.label)
      .openPopup();
    // Hitung ulang ukuran jika kontainer berubah (animasi reveal, resize, rotasi layar).
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.map?.invalidateSize());
      this.resizeObserver.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.map?.remove();
    this.map = undefined;
  }
}
