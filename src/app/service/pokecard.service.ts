import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokecard } from '../model/pokecard';
import { Pokecards } from '../model/pokecards';

@Injectable({
  providedIn: 'root'
})
export class PokecardService {

  constructor(public http: HttpClient) { }
  
  getPokemonCards(): Observable<Pokecards>{
    return this.http.get<Pokecards>("https://api.pokemontcg.io/v1/cards");
  }

}
