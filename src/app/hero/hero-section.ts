import { Component } from '@angular/core';
import { EVENT } from '../event-data';
import { AssociationLogos } from '../logos/association-logos';

@Component({
  imports: [AssociationLogos],
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
})
export class HeroSection {
  protected readonly event = EVENT;
}
