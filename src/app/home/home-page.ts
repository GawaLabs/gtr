import { Component } from '@angular/core';
import { AssociationSection } from '../logos/association-section';
import { RaceCategories } from '../categories/race-categories';
import { EventHighlights } from '../highlights/event-highlights';
import { EventIntro } from '../intro/event-intro';
import { HeroSection } from '../hero/hero-section';
import { LocationSection } from '../location/location-section';
import { LogoShowcase } from '../logos/logo-showcase';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroSection,
    EventIntro,
    RaceCategories,
    EventHighlights,
    LocationSection,
    LogoShowcase,
    AssociationSection,
  ],
  template: `
    <app-hero-section />
    <app-event-intro />
    <app-race-categories />
    <app-event-highlights />
    <app-location-section />
    <app-logo-showcase />
    <app-association-section />
  `,
})
export class HomePage {}
