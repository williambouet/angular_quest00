import { Component, OnInit } from '@angular/core';
import { Square } from '../square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  square: Square = {
    id: 1,
    name: "ABC",
    imageSrc: "https://placekitten.com/100/100"
  };

  sayHello(): void {
    alert("Coucou toi !");
  }

}
