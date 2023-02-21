import { Component, OnInit } from '@angular/core';
import { UserAtelier } from '../model/user-atelier';

@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
  userAtelier: UserAtelier;
  PATTERN = <const> "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  
  constructor() {
    this.userAtelier = new UserAtelier('','');
   }

  ngOnInit() {
  }

  onSubmit() {
    alert("Bienvenue")
  }

}
