import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, IconComponent],
  template: `
    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div>
          <h2>{{ content.clinic.logoLead }}<span>{{ content.clinic.logoAccent }}</span></h2>
          <p>
            Zahnarztpraxis in Köln. Wir zeigen Leistungen, Team und Öffnungszeiten –
            die Terminvergabe auf dieser Seite ist eine Demo ohne Server.
          </p>
        </div>
        <div>
          <h2>Seiten</h2>
          <ul>
            @for (link of content.navigation; track link.path) {
              <li><a [routerLink]="link.path">{{ link.label }}</a></li>
            }
          </ul>
        </div>
        <div>
          <h2>Aus dem Blog</h2>
          @for (post of content.latestPosts(2); track post.slug) {
            <a class="footer-post" [routerLink]="['/blog', post.slug]">
              <img [src]="post.image" [alt]="post.title" />
              <span>
                <strong>{{ post.title }}</strong>
                <small>{{ post.date }}</small>
              </span>
            </a>
          }
        </div>
        <div>
          <h2>Praxis</h2>
          <ul class="contact-list">
            <li>
              <app-icon name="pin" />
              <span>{{ content.clinic.address }}<br />{{ content.clinic.cityLine }}</span>
            </li>
            <li>
              <app-icon name="phone" />
              <a [href]="content.clinic.phoneHref">{{ content.clinic.phoneDisplay }}</a>
            </li>
            <li>
              <app-icon name="mail" />
              <a [href]="'mailto:' + content.clinic.email">{{ content.clinic.email }}</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="site-footer__legal">© {{ year }} {{ content.clinic.name }}. Alle Rechte vorbehalten.</p>
    </footer>
    <aside class="zagros">
      <div class="zagros__inner">
        <a class="zagros__logo" href="https://zagros-werbeagentur.com" target="_blank" rel="noopener noreferrer">
          <img src="zagros-logo.png" alt="Zagros Werbeagentur" />
        </a>
        <div>
          <h2>Sie möchten eine Website wie diese?</h2>
          <p>Praxisauftritt mit Leistungen, Team und WhatsApp. Wir gestalten und bauen die Seite für Ihre Praxis.</p>
          <div class="zagros__links">
            <a href="https://zagros-werbeagentur.com" target="_blank" rel="noopener noreferrer">zagros-werbeagentur.com</a>
            <a href="https://wa.me/491784013235" target="_blank" rel="noopener noreferrer">WhatsApp +49 178 401 3235</a>
          </div>
        </div>
      </div>
    </aside>
  `,
})
export class FooterComponent {
  readonly content = inject(ClinicContentService);
  readonly year = new Date().getFullYear();
}
