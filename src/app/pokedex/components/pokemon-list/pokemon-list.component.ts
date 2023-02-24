import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public pokemon?: Pokemon;

  @Input()
  public pokemons?: Pokemon[];

  @Output()
  public pokemonTarget: EventEmitter<Pokemon> = new EventEmitter();
  
  constructor() { 
    this.pokemon = new Pokemon();
  }

  ngOnInit() {
  }

  sendPokemonTarget() {
    this.pokemonTarget.emit(this.pokemon)
  }

  pokemonClicked(pokemonClicked: Pokemon) {
    this.pokemon = pokemonClicked;
    this.sendPokemonTarget();
  }

  

}
