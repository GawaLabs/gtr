import { Component } from '@angular/core';
import { AssociationSection } from './logos/association-section';
import { RaceCategories } from './categories/race-categories';
import { EventHighlights } from './highlights/event-highlights';
import { EventIntro } from './intro/event-intro';
import { HeroSection } from './hero/hero-section';
import { LocationSection } from './location/location-section';
import { LogoShowcase } from './logos/logo-showcase';
import { SiteFooter } from './footer/site-footer';
import { SiteHeader } from './header/site-header';

@Component({
  imports: [
    SiteHeader,
    HeroSection,
    EventIntro,
    RaceCategories,
    EventHighlights,
    LocationSection,
    LogoShowcase,
    AssociationSection,
    SiteFooter,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
