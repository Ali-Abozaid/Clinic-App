import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  imports: [ReactiveFormsModule],
  template: `
    <form class="stack-form" [formGroup]="form" (ngSubmit)="submit()">
      <div class="stack-form__row">
        <label>
          <span class="sr-only">Name</span>
          <input type="text" formControlName="name" placeholder="Vollständiger Name" />
        </label>
        <label>
          <span class="sr-only">E-Mail</span>
          <input type="email" formControlName="email" placeholder="E-Mail" />
        </label>
      </div>
      @if (showPhone()) {
        <div class="stack-form__row">
          <label>
            <span class="sr-only">Telefon</span>
            <input type="tel" formControlName="phone" placeholder="Telefon" />
          </label>
          <label>
            <span class="sr-only">Betreff</span>
            <input type="text" formControlName="subject" [placeholder]="subjectLabel()" />
          </label>
        </div>
      }
      <label>
        <span class="sr-only">Nachricht</span>
        <textarea rows="6" formControlName="message" placeholder="Nachricht"></textarea>
      </label>
      <button class="btn btn-primary" type="submit">{{ submitLabel() }}</button>
      @if (submitted()) {
        <p class="form-note" role="status">
          Danke für Ihre Nachricht. In dieser Demo gibt es kein Backend, deshalb bleibt alles im Browser.
          Für eine echte Anfrage nutzen Sie bitte WhatsApp oder das Telefon.
        </p>
      } @else if (form.invalid && form.touched) {
        <p class="form-note form-note--error">Bitte Name, E-Mail und eine kurze Nachricht ausfüllen.</p>
      }
    </form>
  `,
})
export class MessageFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly submitLabel = input('Nachricht senden');
  readonly subjectLabel = input('Betreff');
  readonly showPhone = input(true);
  readonly submitted = signal(false);

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: [''],
    message: ['', Validators.required],
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
