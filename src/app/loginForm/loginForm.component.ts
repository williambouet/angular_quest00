import { Component, OnInit } from '@angular/core';
import { UserAtelier } from '../model/user-atelier';

@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
  userAtelier: UserAtelier;
  
  constructor() {
    this.userAtelier = new UserAtelier('','');
   }

  ngOnInit() {
  }

  onSubmit() {
    alert("Bienvenue")
    this.userAtelier.email="";
    this.userAtelier.password="";
    
  }

}
