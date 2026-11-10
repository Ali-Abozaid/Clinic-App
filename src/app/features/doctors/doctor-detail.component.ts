import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ClinicContentService } from '../../core/services/clinic-content.service';

@Component({
  selector: 'app-doctor-detail',
  imports: [RouterLink],
  template: `
    @if (doctor(); as person) {
      <article class="section profile">
        <div class="container profile__grid">
          <img [src]="person.image" [alt]="person.name" />
          <div>
            <p class="breadcrumbs breadcrumbs--plain"><a routerLink="/aerzte">Ärzteteam</a><span>{{ person.name }}</span></p>
            <h1>{{ person.name }}</h1>
            <p class="doctor-card__role">{{ person.role }}</p>
            @for (paragraph of person.bio; track paragraph) {
              <p>{{ paragraph }}</p>
            }
            <h2>Schwerpunkte</h2>
            <ul class="focus-list">
              @for (item of person.focus; track item) {
                <li>{{ item }}</li>
              }
            </ul>
            <a class="btn btn-primary" routerLink="/kontakt">Kontakt aufnehmen</a>
          </div>
        </div>
      </article>
    } @else {
      <section class="section container">
        <h1>Profil nicht gefunden</h1>
        <a routerLink="/aerzte">Zurück zum Team</a>
      </section>
    }
  `,
})
export class DoctorDetailComponent {
  private readonly content = inject(ClinicContentService);
  private readonly route = inject(ActivatedRoute);

  readonly doctor = toSignal(
    this.route.paramMap.pipe(map((params) => this.content.doctorBySlug(params.get('slug') ?? ''))),
  );
}
