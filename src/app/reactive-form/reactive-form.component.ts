import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(private fb: FormBuilder) { }
  
  modelForm = this.fb.group({
    firstname: ["", [Validators.required, Validators.maxLength(255)], ],
    lastname: ["", [Validators.required, Validators.maxLength(255)],],
    email: ["", [Validators.required, Validators.maxLength(255), Validators.email],],
    password: ["", [Validators.required, Validators.maxLength(255), Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],],

  })
  
  onSubmit() {
    alert(this.modelForm.value['email']);
    }

}
