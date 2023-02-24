import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/pokedex.service';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent implements OnInit {
  public pokemons?: Pokemon[];
  public pokemonTarget?: Pokemon;
  
  constructor(public pokedexService: PokedexService) { 
    this.pokemonTarget = new Pokemon();
  }

  ngOnInit() {
    this.pokedexService.getPokemonsList().subscribe((pokemonsList) => {
      this.pokemons = pokemonsList;
    });
  }

  receivePokemonTarget(event: Pokemon) {
    this.pokemonTarget = event;
  }

  receivePokemonSearch(event: string) {
    this.pokedexService.getOnePokemon(event).subscribe((pokemon) => {
      this.pokemonTarget = pokemon;
    });
  }
}
