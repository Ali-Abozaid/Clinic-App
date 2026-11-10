import { Component, input } from '@angular/core';
import { ServiceIcon } from '../../core/models/clinic.models';

@Component({
  selector: 'app-icon',
  template: `
    @switch (name()) {
      @case ('whitening') {
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 6c-6 0-10 4-11 10-1 8 1 14 3 20 1 3 3 6 5 6 2 0 2-3 3-6 1 3 1 6 3 6s4-3 5-6c2-6 4-12 3-20C34 10 30 6 24 6z" />
          <path d="M18 18h4M26 16h4M20 24h8" />
        </svg>
      }
      @case ('cleaning') {
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M16 8h6l2 8h10l-3 22c-1 4-3 6-6 6h-2c-4 0-6-3-7-8L16 8z" />
          <path d="M14 16h20" />
        </svg>
      }
      @case ('braces') {
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="8" y="16" width="8" height="10" rx="1" />
          <rect x="20" y="14" width="8" height="12" rx="1" />
          <rect x="32" y="16" width="8" height="10" rx="1" />
          <path d="M8 21h32" />
        </svg>
      }
      @case ('anesthesia') {
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="20" y="6" width="8" height="14" rx="3" />
          <path d="M24 20v16M18 30h12M16 40c2 3 14 3 16 0" />
        </svg>
      }
      @case ('calculus') {
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M14 30c2-10 6-18 10-18s8 8 10 18c1 6-2 10-6 10h-8c-4 0-7-4-6-10z" />
          <path d="M18 28h3M24 24h4M22 32h6" />
        </svg>
      }
      @case ('gum') {
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M10 24c2-8 8-12 14-12s12 4 14 12c1 6-2 14-6 16-3 1-4-3-8-4-4 1-5 5-8 4-4-2-7-10-6-16z" />
        </svg>
      }
      @case ('implant') {
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M18 8h12l-2 10H20L18 8z" />
          <path d="M22 18h4l-1 8h-2l-1-8zM21 26h6l-1 8-2 4-2-4-1-8z" />
        </svg>
      }
      @case ('care') {
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="16" r="6" />
          <path d="M12 38c2-8 6-12 12-12s10 4 12 12" />
        </svg>
      }
      @case ('check') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12.5 9.2 17 19 7" />
        </svg>
      }
      @case ('phone') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 13l4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 4 5a2 2 0 0 1 3-2z" />
        </svg>
      }
      @case ('pin') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      }
      @case ('mail') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      }
      @case ('quote') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 7H5v6h4v4H5M19 7h-4v6h4v4h-4" />
        </svg>
      }
      @case ('menu') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      }
      @case ('close') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      }
      @case ('whatsapp') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            stroke="none"
            d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92s.73-2.07 1-2.35c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.49-.09.19-.14.31-.28.48-.14.16-.29.36-.41.48-.14.14-.28.29-.12.55.16.27.72 1.18 1.54 1.91 1.06.94 1.95 1.23 2.23 1.37.28.14.44.12.6-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z"
          />
        </svg>
      }
    }
  `,
  styles: `
    :host {
      display: inline-flex;
    }
    svg {
      width: 1em;
      height: 1em;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.7;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
})
export class IconComponent {
  readonly name = input.required<ServiceIcon | 'check' | 'phone' | 'pin' | 'mail' | 'quote' | 'menu' | 'close' | 'whatsapp'>();
}
