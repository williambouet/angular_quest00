import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserForm } from '../model/user-form';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: UserForm;

  constructor(private fb: FormBuilder) {
    this.userForm = new UserForm();
  }
  
  modelForm = this.fb.group({
    firstname: ["", [Validators.required, Validators.maxLength(255)], ],
    lastname: ["", [Validators.required, Validators.maxLength(255)],],
    email: ["", [Validators.required, Validators.maxLength(255), Validators.email],],
    password: ["", [Validators.required, Validators.maxLength(255), Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],],
//^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$
  })
  
  onSubmit() {

    alert(this.modelForm.value['email']);
    }

}
