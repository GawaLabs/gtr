import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './footer/site-footer';
import { SiteHeader } from './header/site-header';

@Component({
  imports: [SiteHeader, RouterOutlet, SiteFooter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
