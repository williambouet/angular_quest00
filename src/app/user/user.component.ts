import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserReactive } from '../model/user-reactive';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: UserReactive;
  username = new FormControl('le nom');
  email = new FormControl('l\'email');
  password = new FormControl('le password');
  street = new FormControl('la rue');
  zipcode = new FormControl('le code postal');
  city = new FormControl('la ville');

  constructor() { 
    this.user = new UserReactive('', '', '', '', '', '');
   }
  
  createUser() {
    this.user.username = (this.username.value ?? 'x');
    this.user.email = (this.email.value ?? '');
    this.user.password = (this.password.value ?? '');
    this.user.street = (this.street.value ?? '');
    this.user.zipcode = (this.zipcode.value ?? '');
    this.user.city = (this.city.value ?? '');
}

}
