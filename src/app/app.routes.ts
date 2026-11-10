import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Helia Zahn | Zahnarztpraxis in Köln',
  },
  {
    path: 'ueber-uns',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'Über uns | Helia Zahn',
  },
  {
    path: 'leistungen',
    loadComponent: () => import('./features/services/services.component').then((m) => m.ServicesComponent),
    title: 'Leistungen | Helia Zahn',
  },
  {
    path: 'aerzte',
    loadComponent: () => import('./features/doctors/doctors.component').then((m) => m.DoctorsComponent),
    title: 'Ärzteteam | Helia Zahn',
  },
  {
    path: 'aerzte/:slug',
    loadComponent: () =>
      import('./features/doctors/doctor-detail.component').then((m) => m.DoctorDetailComponent),
    title: 'Profil | Helia Zahn',
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent),
    title: 'Blog | Helia Zahn',
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./features/blog/blog-detail.component').then((m) => m.BlogDetailComponent),
    title: 'Beitrag | Helia Zahn',
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Kontakt | Helia Zahn',
  },
  { path: '**', redirectTo: '' },
];
