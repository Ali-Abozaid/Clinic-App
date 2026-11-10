import { Component, inject } from '@angular/core';
import { ClinicContentService } from '../../core/services/clinic-content.service';

@Component({
  selector: 'app-stats-band',
  template: `
    <section class="stats-band">
      <div class="container stats-band__grid">
        <div class="stats-band__intro">
          <h2>Was die Praxis ausmacht</h2>
          <p>Eine feste Adresse in der Kölner Innenstadt, ein überschaubares Team und Behandlungen, die nach dem Befund geplant werden.</p>
        </div>
        <div class="stats-band__numbers">
          @for (stat of content.stats; track stat.label) {
            <div>
              <strong>{{ stat.value }}{{ stat.suffix }}</strong>
              <span>{{ stat.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class StatsBandComponent {
  readonly content = inject(ClinicContentService);
}
