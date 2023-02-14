import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-UserProfile',
  templateUrl: './UserProfile.component.html',
  styleUrls: ['./UserProfile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = {
    firstname: "Will",
    lastname: "iam",
    age: 24,
    quote: "Banane ça commence par un B mais normalement ça commence par un N...",
    avatar: "https://img.passeportsante.net/1200x675/2021-05-03/i101971-banane-nu.webp"
  }

  constructor() { }

  ngOnInit() {
  }

  showOrHideAge() {
    document.getElementById("age")?.classList.toggle('hidden');
  }

}
