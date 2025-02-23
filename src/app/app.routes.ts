import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'pokemons',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/pokemons/pokemons.component').then((c) => c.PokemonsComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/pokemons/pokemon-details/pokemon-details.component').then(
            (c) => c.PokemonDetailsComponent,
          ),
      },
    ],
  },
  {
    path: 'page-not-found',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found' },
];
