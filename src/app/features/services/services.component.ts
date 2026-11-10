import { Component, inject } from '@angular/core';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { StatsBandComponent } from '../../shared/components/stats-band.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-services',
  imports: [PageHeroComponent, StatsBandComponent, IconComponent],
  template: `
    <app-page-hero title="Leistungen" />

    <section class="section">
      <div class="container">
        <header class="section-heading">
          <h2>Was wir in der Praxis anbieten</h2>
          <p>Jede Leistung beginnt mit einer Untersuchung. Die Texte beschreiben den Ablauf, sie ersetzen keine Diagnose.</p>
        </header>
        <div class="service-list">
          @for (service of content.services; track service.id) {
            <article [id]="service.id">
              <div class="service-card__icon"><app-icon [name]="service.icon" /></div>
              <div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.details }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <app-stats-band />

    <section class="section section--steps">
      <div class="container">
        <header class="section-heading">
          <h2>So läuft der erste Besuch</h2>
          <p>Gesetzliche Leistungen rechnen wir nach dem Katalog ab. Alles darüber sagen wir vor der Behandlung.</p>
        </header>
        <div class="steps">
          @for (step of content.visitSteps; track step.step) {
            <article>
              <span>{{ step.step }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  readonly content = inject(ClinicContentService);
}
