export interface NavLink {
  label: string;
  path: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  text: string;
}

export interface OpeningHour {
  days: string;
  hours: string;
}

export interface VisitStep {
  step: string;
  title: string;
  text: string;
}

export interface ClinicProfile {
  name: string;
  logoLead: string;
  logoAccent: string;
  tagline: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: string;
  cityLine: string;
  mapEmbedUrl: string;
  openingHours: OpeningHour[];
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  details: string;
  icon: ServiceIcon;
}

export type ServiceIcon =
  | 'whitening'
  | 'cleaning'
  | 'braces'
  | 'anesthesia'
  | 'calculus'
  | 'gum'
  | 'implant'
  | 'care';

export interface Highlight {
  title: string;
  text: string;
}

export interface Doctor {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  bio: string[];
  image: string;
  focus: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface PricePlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  paragraphs: string[];
}

export interface AboutTab {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
}
