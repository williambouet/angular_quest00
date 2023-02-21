import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail';
import { COCKTAILS } from './mock-cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  
  constructor() {}

  getCocktails(): Cocktail[] {
    return COCKTAILS;
  }
}