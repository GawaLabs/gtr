import { Routes } from '@angular/router';
import { HomePage } from './home/home-page';
import { Category7kPage } from './categories/category-7k-page';
import { LocationPage } from './location/location-page';
import { ContactPage } from './contact/contact-page';
import { Category18kPage } from './categories/category-18k-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage,
    title: 'GAWALISE NAMBASO TRAIL RUN 2026 | Trail Fun & Summit Trail',
  },
  {
    path: 'kategori/7k-fun-trail',
    component: Category7kPage,
    title: '7K Fun Trail Run | GAWALISE NAMBASO TRAIL RUN 2026',
  },
  {
    path: 'kategori/18k-summit-trail',
    component: Category18kPage,
    title: '18K Summit Trail | GAWALISE NAMBASO TRAIL RUN 2026',
  },
  {
    path: 'contact',
    component: ContactPage,
    title: 'Contact Us | GAWALISE NAMBASO TRAIL RUN 2026',
  },
  {
    path: 'lokasi',
    component: LocationPage,
    title: 'Lokasi Event | GAWALISE NAMBASO TRAIL RUN 2026',
  },
  { path: '**', redirectTo: '' },
];
