import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  public isAdmin: Boolean = false;
  public title: string = "La quête 03.1"
  public label: string = "C'est magique !"
  
  constructor() { }

  ngOnInit() {
  }

  goToModify() {
    alert("Tu peux modifier un truc");
  }

  goToSee() {
    alert("Tu ne peux que voir");
  }

  setAdmin() {
    if (this.isAdmin) {
      this.isAdmin = false;
      this.label = "admin = false ";
    } else {
      this.isAdmin = true;
      this.label = "admin = true";

    }


  }

}
