import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsComponent {}
