import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-hero',
  imports: [RouterLink],
  template: `
    <section class="page-hero" [style.background-image]="'url(' + image() + ')'">
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <p class="breadcrumbs">
          <a routerLink="/">Startseite</a>
          <span>{{ title() }}</span>
        </p>
        <h1>{{ title() }}</h1>
      </div>
    </section>
  `,
})
export class PageHeroComponent {
  readonly title = input.required<string>();
  readonly image = input('images/bg_1.jpg');
}
