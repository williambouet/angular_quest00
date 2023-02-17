import { Component, OnInit } from '@angular/core';
import { UserForm } from '../model/user-form';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: UserForm;
  submitted: boolean;
  pattern: string;
  constructor() {
    this.model = new UserForm("", "", "", "");
    this.submitted = false;
    this.pattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    alert("Formulaire soumis");
  }

}
