import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { UiStateService } from '../../core/services/ui-state.service';
import { AppointmentFormComponent } from '../../shared/components/appointment-form.component';
import { DoctorCardComponent } from '../../shared/components/doctor-card.component';
import { ServiceCardComponent } from '../../shared/components/service-card.component';
import { StatsBandComponent } from '../../shared/components/stats-band.component';
import { TestimonialSliderComponent } from '../../shared/components/testimonial-slider.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    AppointmentFormComponent,
    ServiceCardComponent,
    DoctorCardComponent,
    StatsBandComponent,
    TestimonialSliderComponent,
    IconComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {
  readonly content = inject(ClinicContentService);
  readonly ui = inject(UiStateService);
  readonly slideIndex = signal(0);
  private readonly timer = setInterval(() => this.next(), 7000);

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  next(): void {
    this.slideIndex.update((index) => (index + 1) % this.content.slides.length);
  }
}
