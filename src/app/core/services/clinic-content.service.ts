import { Injectable } from '@angular/core';
import {
  ABOUT_TABS,
  BLOG_POSTS,
  CLINIC,
  DOCTORS,
  GALLERY,
  HERO_SLIDES,
  HIGHLIGHTS,
  NAV_LINKS,
  PRICE_PLANS,
  PROCEDURE_POINTS,
  SERVICES,
  VISIT_STEPS,
  STATS,
  TESTIMONIALS,
} from '../data/clinic.content';
import { BlogPost, Doctor, ServiceItem } from '../models/clinic.models';

@Injectable({ providedIn: 'root' })
export class ClinicContentService {
  readonly clinic = CLINIC;
  readonly navigation = NAV_LINKS;
  readonly slides = HERO_SLIDES;
  readonly services = SERVICES;
  readonly highlights = HIGHLIGHTS;
  readonly doctors = DOCTORS;
  readonly stats = STATS;
  readonly plans = PRICE_PLANS;
  readonly testimonials = TESTIMONIALS;
  readonly gallery = GALLERY;
  readonly posts = BLOG_POSTS;
  readonly aboutTabs = ABOUT_TABS;
  readonly procedurePoints = PROCEDURE_POINTS;
  readonly visitSteps = VISIT_STEPS;

  featuredServices(limit = 4): ServiceItem[] {
    return this.services.slice(0, limit);
  }

  latestPosts(limit = 3): BlogPost[] {
    return this.posts.slice(0, limit);
  }

  postBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((post) => post.slug === slug);
  }

  doctorBySlug(slug: string): Doctor | undefined {
    return this.doctors.find((doctor) => doctor.slug === slug);
  }

  whatsappUrl(message = this.clinic.whatsappMessage): string {
    return `https://wa.me/${this.clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
