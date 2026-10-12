import { Component } from '@angular/core';
import { CATEGORIES } from '../event-data';
import { Reveal } from '../reveal.directive';

@Component({
  imports: [Reveal],
  selector: 'app-race-categories',
  templateUrl: './race-categories.html',
})
export class RaceCategories {
  protected readonly categories = CATEGORIES;
}
