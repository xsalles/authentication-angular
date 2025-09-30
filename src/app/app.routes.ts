import { Routes } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up/sign-up-page.component';

export const routes: Routes = [
  {
    path: '',
    component: SignInPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent
  }
];
