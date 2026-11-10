import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ClinicContentService } from '../../core/services/clinic-content.service';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink],
  template: `
    @if (post(); as article) {
      <article>
        <header class="page-hero" [style.background-image]="'url(' + article.image + ')'">
          <div class="page-hero__overlay"></div>
          <div class="container page-hero__content">
            <p class="breadcrumbs"><a routerLink="/blog">Blog</a><span>Beitrag</span></p>
            <h1>{{ article.title }}</h1>
          </div>
        </header>
        <div class="section">
          <div class="container article">
            <p class="meta">{{ article.date }} · {{ article.author }}</p>
            @for (paragraph of article.paragraphs; track paragraph) {
              <p>{{ paragraph }}</p>
            }
            <a class="btn btn-outline" routerLink="/blog">Alle Beiträge</a>
          </div>
        </div>
      </article>
    } @else {
      <section class="section container">
        <h1>Beitrag nicht gefunden</h1>
        <a routerLink="/blog">Zurück zum Blog</a>
      </section>
    }
  `,
})
export class BlogDetailComponent {
  private readonly content = inject(ClinicContentService);
  private readonly route = inject(ActivatedRoute);

  readonly post = toSignal(
    this.route.paramMap.pipe(map((params) => this.content.postBySlug(params.get('slug') ?? ''))),
  );
}
