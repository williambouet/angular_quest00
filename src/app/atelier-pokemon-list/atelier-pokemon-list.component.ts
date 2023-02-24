import { Component, OnInit } from '@angular/core';
import { Pokecard } from '../model/pokecard';
import { PokecardService } from '../service/pokecard.service';


@Component({
  selector: 'app-atelier-pokemon-list',
  templateUrl: './atelier-pokemon-list.component.html',
  styleUrls: ['./atelier-pokemon-list.component.css']
})
export class AtelierPokemonListComponent implements OnInit {

  public pokecards?: Pokecard[];

  constructor(private pokecardService: PokecardService) {
    this.pokecards = [];
 
  }

  ngOnInit() {
    this.pokecardService.getPokemonCards().subscribe((pokecards) => {
      this.pokecards = pokecards.cards;
      console.log(this.pokecards)

    })
  }

}
