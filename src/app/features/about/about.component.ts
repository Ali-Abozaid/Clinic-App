import { Component, inject, signal } from '@angular/core';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { StatsBandComponent } from '../../shared/components/stats-band.component';
import { TestimonialSliderComponent } from '../../shared/components/testimonial-slider.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-about',
  imports: [PageHeroComponent, StatsBandComponent, TestimonialSliderComponent, IconComponent],
  template: `
    <app-page-hero title="Über uns" image="images/bg_2.jpg" />

    <section class="section">
      <div class="container about-layout">
        <div>
          <div class="tabs" role="tablist">
            @for (tab of content.aboutTabs; track tab.id) {
              <button
                type="button"
                role="tab"
                [attr.aria-selected]="active() === tab.id"
                [class.is-active]="active() === tab.id"
                (click)="active.set(tab.id)"
              >
                {{ tab.label }}
              </button>
            }
          </div>
          <div class="tabs__panel">
            <h2>{{ current().title }}</h2>
            @for (paragraph of current().paragraphs; track paragraph) {
              <p>{{ paragraph }}</p>
            }
          </div>
        </div>
        <img src="images/about.jpg" alt="Beratung in der Praxis Helia Zahn" />
      </div>
    </section>

    <section class="split">
      <div class="split__photo" style="background-image: url('images/about-2.jpg')"></div>
      <div class="split__copy">
        <h2>Helia Zahn mit persönlicher Betreuung</h2>
        <p>Dieselben Behandler, dieselbe Adresse, ein Ablauf, der sich nicht bei jedem Termin neu erfindet.</p>
        @for (item of content.highlights; track item.title) {
          <article>
            <span><app-icon name="check" /></span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        }
      </div>
    </section>

    <app-testimonial-slider />
    <app-stats-band />
  `,
})
export class AboutComponent {
  readonly content = inject(ClinicContentService);
  readonly active = signal(this.content.aboutTabs[0].id);

  current() {
    return this.content.aboutTabs.find((tab) => tab.id === this.active()) ?? this.content.aboutTabs[0];
  }
}
