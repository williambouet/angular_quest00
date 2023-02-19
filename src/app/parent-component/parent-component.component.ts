import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  public numberOfCookies!: number;
  public flourQuantity!: number; 
  public saltQuantity!: number; 
  public sugarQuantity!: number;
  public eggQuantity!: number;
  public cook: boolean = false; 

  
  constructor(
  ) { }

  startCooking() {
    this.cook = true;
    alert('ça cuit ! ' + this.sugarQuantity)
  }

  ngOnInit() {
  }

}
