import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  title: string = "Raclette party !";
  isThisIngredientVital: boolean = false;
  isGuestListDisplayed: boolean = true;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

  constructor() { }

  ngOnInit() { }

}
