import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

constructor(public http: HttpClient) { }

  getPokemonsList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>("https://pokebuildapi.fr/api/v1/pokemon");
  }

  getOnePokemon(pokemonName: string): Observable<Pokemon>{
    return this.http.get<Pokemon>("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonName);
  }
  
}
