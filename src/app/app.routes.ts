import { Routes } from '@angular/router';
import { HomePage } from './modules/home/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
    pathMatch: 'full',
  },
  {
    path: 'spells',
    loadComponent: () =>
      import('./modules/spells/pages/spells/spells.component').then(
        (c) => c.SpellsComponent
      ),
  },
  {
    path: 'monsters',
    loadComponent: () =>
      import('./modules/monsters/pages/monsters/monsters.component').then(
        (c) => c.MonstersComponent
      ),
  },
];
