import { Routes } from '@angular/router';
import { HomePage } from './home/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full',
  },
  {
    path: 'spells',
    loadComponent: () =>
      import('./spells/pages/spells/spells.component').then(
        (c) => c.SpellsComponent
      ),
  },
];
