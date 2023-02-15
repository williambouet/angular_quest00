import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  title: string = "Raclette party !";
  isThisIngredientVital: boolean = true;
  isGuestListDisplayed: boolean = false;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

  constructor() { }

  ngOnInit() { }

}
