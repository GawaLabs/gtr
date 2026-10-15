import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from '../event-data';
import { Reveal } from '../reveal.directive';

@Component({
  imports: [Reveal, RouterLink],
  selector: 'app-race-categories',
  templateUrl: './race-categories.html',
})
export class RaceCategories {
  protected readonly categories = CATEGORIES;
}
