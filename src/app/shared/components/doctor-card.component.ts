import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Doctor } from '../../core/models/clinic.models';

@Component({
  selector: 'app-doctor-card',
  imports: [RouterLink],
  template: `
    <article class="doctor-card">
      <a class="doctor-card__photo" [routerLink]="['/aerzte', doctor().slug]">
        <img [src]="doctor().image" [alt]="doctor().name" />
      </a>
      <div class="doctor-card__body">
        <h3><a [routerLink]="['/aerzte', doctor().slug]">{{ doctor().name }}</a></h3>
        <p class="doctor-card__role">{{ doctor().role }}</p>
        <p>{{ doctor().shortBio }}</p>
      </div>
    </article>
  `,
})
export class DoctorCardComponent {
  readonly doctor = input.required<Doctor>();
}
