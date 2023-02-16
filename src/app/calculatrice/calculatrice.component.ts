import { Component, OnInit } from '@angular/core';
import { Calculatrice } from '../model/calculatrice';
@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  calculatrice: Calculatrice = {
    figure1: undefined,
    figure2: undefined, 
    result: undefined,
  };

  constructor() { }
  
  ngOnInit(): void {
  }

  setFigure1(): void {
    this.calculatrice.figure1 = this.getRandom();
  }

  setFigure2(): void {
    this.calculatrice.figure2 = this.getRandom();
  }

  getRandom(): number {
    return Math.floor(Math.random() * 1000);
  }

  multiplication(): void {
    if (this.calculatrice.figure1 != undefined && this.calculatrice.figure2 != undefined) {
      this.calculatrice.result = this.calculatrice.figure1 * this.calculatrice.figure2;
    }
  }

  addition(): void {
    if (this.calculatrice.figure1 != undefined && this.calculatrice.figure2 != undefined) {
      this.calculatrice.result = this.calculatrice.figure1 + this.calculatrice.figure2;
    }
  }

  soustract(): void {
    if (this.calculatrice.figure1 != undefined && this.calculatrice.figure2 != undefined) {
      this.calculatrice.result = this.calculatrice.figure1 - this.calculatrice.figure2;
    }
  }

  division(): void {
    if (this.calculatrice.figure1 != undefined && this.calculatrice.figure2 != undefined) {

      this.calculatrice.figure2 === 0 ? alert("Division par zéro impossible") : this.calculatrice.result = this.calculatrice.figure1 / this.calculatrice.figure2;
    }
  }

}
