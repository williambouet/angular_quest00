import { Component } from '@angular/core';
import { Calculatrice } from '../calculatrice';
@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {

  calculatrice: Calculatrice = {
    figure1: 0,
    figure2: 0, 
    result: 0,
  };

  constructor() { }

  setFigure1(): void {
    this.calculatrice.figure1 = Math.floor(Math.random()) ;
  }

  setFigure2(): void {
    this.calculatrice.figure2 = Math.floor(Math.random());
  }

  multiplication(): void {
    alert(this.calculatrice.figure2 * this.calculatrice.figure1);
  }

  addition(): void {
    alert(this.calculatrice.figure2 + this.calculatrice.figure1);
  }
  soustract(): void {
    alert(this.calculatrice.figure2 - this.calculatrice.figure1);
  }
  division(): void {
    alert( this.calculatrice.figure1 === 0 ? "Division par zéro impossible" : this.calculatrice.figure2 / this.calculatrice.figure1);
  }


}
