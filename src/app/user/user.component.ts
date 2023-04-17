import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserReactive } from '../model/user-reactive';
import { emailValidator } from './email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: UserReactive;
  credentials = this.fb.group({
    username : ['', [Validators.required, Validators.minLength(4)]],
    email : ['', [Validators.required, emailValidator]],
    password : ['', [Validators.required, this.passwordValidator]],
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
  
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const passwordRegex = RegExp('(?=.*[A-Z])');
    const valid = passwordRegex.test(control.value);
    const errors = {
        password: {
            rules: 'doit contenit au moins une majuscule'
        }
    };

    return !valid ? errors : null;
}

}
