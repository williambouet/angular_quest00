import { Component, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input()
  public pokemon?: Pokemon;
  


  constructor() {}

  ngOnInit() {}

}
