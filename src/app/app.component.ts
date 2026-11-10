import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentDialogComponent } from './layout/appointment-dialog/appointment-dialog.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent, AppointmentDialogComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
    <app-appointment-dialog />
  `,
})
export class AppComponent {}
