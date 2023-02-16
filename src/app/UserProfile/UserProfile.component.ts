import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-UserProfile',
  templateUrl: './UserProfile.component.html',
  styleUrls: ['./UserProfile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: User;
  
  constructor() {
    this.user = new User(
      "Will",
      "iam",
      24,
      "Banane ça commence par un B mais normalement ça commence par un N...",
      "https://img.passeportsante.net/1200x675/2021-05-03/i101971-banane-nu.webp"
)
   }

  ngOnInit() {
  }

  showOrHideAge() {
    document.getElementById("age")?.classList.toggle('hidden');
  }

}
