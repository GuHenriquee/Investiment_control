import { Routes } from '@angular/router';
import { CreateAccount } from './componentes/create-account/create-account';
import { Dashboard } from './componentes/dashboard/dashboard';

export const routes: Routes = [
    {
    path: 'createAccount',
    component: CreateAccount,
  },
  {
    path: '',
    component: Dashboard

  }
];
