import { Component, inject } from '@angular/core';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { DoctorCardComponent } from '../../shared/components/doctor-card.component';
import { PageHeroComponent } from '../../shared/components/page-hero.component';

@Component({
  selector: 'app-doctors',
  imports: [PageHeroComponent, DoctorCardComponent],
  template: `
    <app-page-hero title="Ärzteteam" image="images/bg_3.jpg" />
    <section class="section">
      <div class="container">
        <header class="section-heading">
          <h2>Wer Sie behandelt</h2>
          <p>Ein festes Team für Vorsorge, Ästhetik, Implantate und Kieferorthopädie.</p>
        </header>
        <div class="card-grid card-grid--4">
          @for (doctor of content.doctors; track doctor.slug) {
            <app-doctor-card [doctor]="doctor" />
          }
        </div>
      </div>
    </section>
  `,
})
export class DoctorsComponent {
  readonly content = inject(ClinicContentService);
}
