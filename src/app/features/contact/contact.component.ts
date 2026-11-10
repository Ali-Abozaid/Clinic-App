import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { MessageFormComponent } from '../../shared/components/message-form.component';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-contact',
  imports: [PageHeroComponent, MessageFormComponent, IconComponent],
  template: `
    <app-page-hero title="Kontakt" image="images/bg_1.jpg" />
    <section class="section">
      <div class="container">
        <h2>So erreichen Sie die Praxis</h2>
        <div class="contact-facts">
          <p><app-icon name="pin" /> <span><strong>Adresse</strong>{{ content.clinic.address }}, {{ content.clinic.cityLine }}</span></p>
          <p><app-icon name="phone" /> <span><strong>Telefon</strong><a [href]="content.clinic.phoneHref">{{ content.clinic.phoneDisplay }}</a></span></p>
          <p><app-icon name="mail" /> <span><strong>E-Mail</strong><a [href]="'mailto:' + content.clinic.email">{{ content.clinic.email }}</a></span></p>
          <p><app-icon name="whatsapp" /> <span><strong>WhatsApp</strong><a [href]="content.whatsappUrl()" target="_blank" rel="noopener noreferrer">Nachricht senden</a></span></p>
        </div>
        <div class="contact-layout">
          <app-message-form />
          <iframe
            title="Karte der Praxis Helia Zahn in Köln"
            [src]="mapUrl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly content = inject(ClinicContentService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.content.clinic.mapEmbedUrl,
  );
}
