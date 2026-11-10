import { Component, HostListener, inject } from '@angular/core';
import { UiStateService } from '../../core/services/ui-state.service';
import { AppointmentFormComponent } from '../../shared/components/appointment-form.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-appointment-dialog',
  imports: [AppointmentFormComponent, IconComponent],
  template: `
    @if (ui.appointmentOpen()) {
      <div class="dialog-backdrop" (click)="ui.closeAppointment()">
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="appointment-title"
          (click)="$event.stopPropagation()"
        >
          <header>
            <h2 id="appointment-title">Termin vereinbaren</h2>
            <button type="button" aria-label="Schließen" (click)="ui.closeAppointment()">
              <app-icon name="close" />
            </button>
          </header>
          <app-appointment-form [withMessage]="true" />
        </div>
      </div>
    }
  `,
})
export class AppointmentDialogComponent {
  readonly ui = inject(UiStateService);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.ui.closeAppointment();
  }
}
