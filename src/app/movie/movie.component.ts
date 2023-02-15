import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public title: string = "Liste de films";
  public movies: string[] = [
    'film 1',
    'film 2',
    'film 3', 
  ];

  constructor() { }

  ngOnInit() {
  }

}
