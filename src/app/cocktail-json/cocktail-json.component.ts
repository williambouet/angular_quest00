import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../model/cocktail';
import { CocktailJsonService } from '../service/cocktail-json.service';

@Component({
  selector: 'app-cocktail-json',
  templateUrl: './cocktail-json.component.html',
  styleUrls: ['./cocktail-json.component.css']
})
export class CocktailJsonComponent implements OnInit {
  public cocktails: Cocktail[] = [];

  constructor(public cocktailJsonService: CocktailJsonService) { 
    this.cocktailJsonService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
  
  ngOnInit() {
    console.log(this.cocktails)

  }

}
