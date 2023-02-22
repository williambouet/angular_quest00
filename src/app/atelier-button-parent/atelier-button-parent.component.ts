import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atelier-button-parent',
  templateUrl: './atelier-button-parent.component.html',
  styleUrls: ['./atelier-button-parent.component.css']
})
export class AtelierButtonParentComponent implements OnInit {
  public class: string;
  public class2: string;
  public class3: string;
  public class4: string;

  public style1: { [prop: string]: any; };
  public style2:  { [prop: string]: any; };
  

  constructor() { 
    this.class = "btn-primary p-5";
    this.class2 = "btn-danger m-5";
    this.class3 = "btn-secondary";
    this.class4 = "btn-info";

    this.style1 = { 'color': 'red', 'font-weight':'bolder' };
    this.style2 = { 'color': 'yellow' };

  }

  ngOnInit() {
  }

}
