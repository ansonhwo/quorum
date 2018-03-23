import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const ROUTES: Routes = [{
   path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',   loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: 'landing', loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: '**', component: ErrorComponent
  }
];
