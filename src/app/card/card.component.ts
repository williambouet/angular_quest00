import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User(
      "Cupidon",
      "",
      240,
      "C'est beau l'amour",
      "https://disney-planet.fr/wp-content/uploads/2015/12/satyre-personnage-raiponce-01.jpg");
   }

  ngOnInit() {
  }

  clearCitation(): void {
    this.user.quote = "";
  }

}
