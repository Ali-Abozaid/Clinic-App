import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../core/models/clinic.models';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-service-card',
  imports: [IconComponent, RouterLink],
  template: `
    <article class="service-card">
      <div class="service-card__icon">
        <app-icon [name]="service().icon" />
      </div>
      <h3>{{ service().title }}</h3>
      <p>{{ service().summary }}</p>
      <a [routerLink]="['/leistungen']" [fragment]="service().id">Mehr erfahren</a>
    </article>
  `,
})
export class ServiceCardComponent {
  readonly service = input.required<ServiceItem>();
}
