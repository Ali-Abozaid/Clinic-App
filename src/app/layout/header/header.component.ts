import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { UiStateService } from '../../core/services/ui-state.service';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, IconComponent],
  template: `
    <header class="site-header" [class.site-header--solid]="solid || ui.menuOpen()">
      <div class="container site-header__bar">
        <a class="logo" routerLink="/" (click)="ui.closeMenu()">
          {{ content.clinic.logoLead }}<span>{{ content.clinic.logoAccent }}</span>
        </a>
        <button
          class="menu-toggle"
          type="button"
          [attr.aria-expanded]="ui.menuOpen()"
          aria-label="Menü"
          (click)="ui.toggleMenu()"
        >
          <app-icon [name]="ui.menuOpen() ? 'close' : 'menu'" />
        </button>
        <nav [class.is-open]="ui.menuOpen()">
          @for (link of content.navigation; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              (click)="ui.closeMenu()"
            >
              {{ link.label }}
            </a>
          }
          <button class="btn btn-primary btn-nav" type="button" (click)="ui.openAppointment()">
            Termin vereinbaren
          </button>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly content = inject(ClinicContentService);
  readonly ui = inject(UiStateService);
  solid = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.solid = window.scrollY > 40;
  }
}
