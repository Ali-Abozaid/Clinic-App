import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <header class="section-heading" [class.section-heading--light]="light()">
      <h2>{{ title() }}</h2>
      @if (text()) {
        <p>{{ text() }}</p>
      }
      @if (eyebrow()) {
        <span>{{ eyebrow() }}</span>
      }
    </header>
  `,
})
export class SectionHeadingComponent {
  readonly title = input.required<string>();
  readonly text = input<string>();
  readonly eyebrow = input<string>();
  readonly light = input(false);
}
