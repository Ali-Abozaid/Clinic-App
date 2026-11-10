import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  readonly appointmentOpen = signal(false);
  readonly menuOpen = signal(false);

  openAppointment(): void {
    this.menuOpen.set(false);
    this.appointmentOpen.set(true);
  }

  closeAppointment(): void {
    this.appointmentOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
