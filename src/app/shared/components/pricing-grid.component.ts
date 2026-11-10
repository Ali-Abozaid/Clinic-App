import { Component, inject } from '@angular/core';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { UiStateService } from '../../core/services/ui-state.service';

@Component({
  selector: 'app-pricing-grid',
  template: `
    <div class="pricing-grid">
      @for (plan of content.plans; track plan.name) {
        <article class="price-card" [class.price-card--active]="plan.highlighted">
          <h3>{{ plan.name }}</h3>
          <p class="price-card__amount">
            <strong>{{ plan.price }}</strong>
            <span>{{ plan.period }}</span>
          </p>
          <ul>
            @for (feature of plan.features; track feature) {
              <li>{{ feature }}</li>
            }
          </ul>
          <button type="button" class="btn btn-outline" (click)="ui.openAppointment()">Anfragen</button>
        </article>
      }
    </div>
  `,
})
export class PricingGridComponent {
  readonly content = inject(ClinicContentService);
  readonly ui = inject(UiStateService);
}
