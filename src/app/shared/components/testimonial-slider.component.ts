import { Component, inject, signal } from '@angular/core';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-testimonial-slider',
  imports: [IconComponent],
  template: `
    <section class="testimonials">
      <div class="container">
        <header class="section-heading">
          <h2>Stimmen aus der Praxis</h2>
          <span>Was Patientinnen und Patienten sagen</span>
        </header>
        <div class="testimonial">
          <button type="button" class="testimonial__nav" (click)="step(-1)" aria-label="Vorherige Stimme">‹</button>
          <figure>
            <img [src]="current().image" [alt]="current().name" />
            <span class="testimonial__quote" aria-hidden="true"><app-icon name="quote" /></span>
            <blockquote>{{ current().quote }}</blockquote>
            <figcaption>
              <strong>{{ current().name }}</strong>
              <span>{{ current().role }}</span>
            </figcaption>
          </figure>
          <button type="button" class="testimonial__nav" (click)="step(1)" aria-label="Nächste Stimme">›</button>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialSliderComponent {
  private readonly content = inject(ClinicContentService);
  private readonly index = signal(0);

  current() {
    return this.content.testimonials[this.index()];
  }

  step(direction: number): void {
    const total = this.content.testimonials.length;
    this.index.update((value) => (value + direction + total) % total);
  }
}
