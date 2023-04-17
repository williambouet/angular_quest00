import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserReactive } from '../model/user-reactive';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: UserReactive;
  credentials = this.fb.group({
    username : [''],
    email : [''],
    password : [''],
    address: this.fb.group({
      street: [''],
      zipcode: [''],
      city: ['']
    })
})
  
  constructor(private fb: FormBuilder) { 
    this.user = new UserReactive('', '', '', '', '', '');
  }
  
  onSubmit() {
    this.user.username = (this.credentials.value['username'] ?? '');
    this.user.email = (this.credentials.value['email'] ?? '');
    this.user.password = (this.credentials.value['password'] ?? '');
    this.user.street = (this.credentials.get('address.street')?.value ?? '');
    this.user.zipcode = (this.credentials.get('address.zipcode')?.value  ?? '');
    this.user.city = (this.credentials.get('address.city')?.value  ?? '');
}

}
