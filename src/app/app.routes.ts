import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Products } from './products/products';
import { Pages } from './pages/pages';
import { Settings } from './settings/settings';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'products', component: Products },
  { path: 'pages', component: Pages },
  { path: 'settings', component: Settings },
];
