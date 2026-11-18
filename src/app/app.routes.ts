import { Routes } from '@angular/router';
import { Mainpage } from './layout/mainpage/mainpage';
import { Imprint } from './layout/imprint/imprint';

export const routes: Routes = [
  { path: '', component: Mainpage },
  // { path: 'imprint', component: Imprint },
  { path: '**', redirectTo: '' },
];
