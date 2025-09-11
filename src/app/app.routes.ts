import { Routes } from '@angular/router';
import { CreateAccount } from './pages/create-account/create-account';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
    path: 'CreateAccount',
    component: CreateAccount,
  },
  {
    path: '',
    component: Dashboard

  }
];
