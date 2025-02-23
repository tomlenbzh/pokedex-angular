import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsComponent {}
