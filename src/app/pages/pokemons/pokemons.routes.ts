import { Routes } from '@angular/router';

export const PokemonRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pokemons.component').then((r) => r.PokemonsComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pokemon-details/pokemon-details.component').then((r) => r.PokemonDetailsComponent),
  },
];
