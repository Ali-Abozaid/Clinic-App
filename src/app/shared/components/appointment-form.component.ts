import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClinicContentService } from '../../core/services/clinic-content.service';

@Component({
  selector: 'app-appointment-form',
  imports: [ReactiveFormsModule],
  template: `
    <form class="appointment-form" [formGroup]="form" (ngSubmit)="submit()">
      <div class="appointment-form__grid">
        <label>
          <span class="sr-only">Leistung</span>
          <select formControlName="service">
            <option value="">Leistung wählen</option>
            @for (service of content.services; track service.id) {
              <option [value]="service.title">{{ service.title }}</option>
            }
          </select>
        </label>
        <label>
          <span class="sr-only">Name</span>
          <input type="text" formControlName="name" placeholder="Name" />
        </label>
        <label>
          <span class="sr-only">E-Mail</span>
          <input type="email" formControlName="email" placeholder="E-Mail" />
        </label>
        <label>
          <span class="sr-only">Datum</span>
          <input type="date" formControlName="date" />
        </label>
        <label>
          <span class="sr-only">Uhrzeit</span>
          <input type="time" formControlName="time" />
        </label>
        <label>
          <span class="sr-only">Telefon</span>
          <input type="tel" formControlName="phone" placeholder="Telefon" />
        </label>
      </div>
      @if (withMessage()) {
        <label>
          <span class="sr-only">Nachricht</span>
          <textarea rows="4" formControlName="message" placeholder="Nachricht"></textarea>
        </label>
      }
      <button class="btn btn-primary" type="submit">Termin anfragen</button>
      @if (submitted()) {
        <p class="form-note" role="status">
          Vielen Dank, {{ form.controls.name.value }}. Dies ist eine Vorstellung der Praxis ohne
          Server – die Anfrage wurde nicht versendet. Schreiben Sie uns direkt über das WhatsApp-Symbol.
        </p>
      } @else if (form.invalid && form.touched) {
        <p class="form-note form-note--error">Bitte Name und eine gültige E-Mail angeben.</p>
      }
    </form>
  `,
})
export class AppointmentFormComponent {
  readonly content = inject(ClinicContentService);
  private readonly formBuilder = inject(FormBuilder);

  readonly withMessage = input(false);
  readonly submitted = signal(false);

  readonly form = this.formBuilder.nonNullable.group({
    service: [''],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    date: [''],
    time: [''],
    phone: [''],
    message: [''],
  });

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.submitted.set(false);
      return;
    }
    this.submitted.set(true);
  }
}
