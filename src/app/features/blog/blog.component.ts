import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClinicContentService } from '../../core/services/clinic-content.service';
import { PageHeroComponent } from '../../shared/components/page-hero.component';

@Component({
  selector: 'app-blog',
  imports: [PageHeroComponent, RouterLink],
  template: `
    <app-page-hero title="Blog" image="images/bg_2.jpg" />
    <section class="section">
      <div class="container">
        <header class="section-heading">
          <h2>Aus der Praxis</h2>
          <p>Hinweise zur Pflege und zum Ablauf. Sie ersetzen kein Gespräch in der Praxis.</p>
        </header>
        <div class="card-grid card-grid--3">
          @for (post of content.posts; track post.slug) {
            <article class="blog-card">
              <a [routerLink]="['/blog', post.slug]"><img [src]="post.image" [alt]="post.title" /></a>
              <div>
                <p class="meta">{{ post.date }} · {{ post.author }}</p>
                <h3><a [routerLink]="['/blog', post.slug]">{{ post.title }}</a></h3>
                <p>{{ post.excerpt }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {
  readonly content = inject(ClinicContentService);
}
