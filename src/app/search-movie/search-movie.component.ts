import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  lowYear: number = 1900;
  now: Date = new Date();
  yearOfNow: number = this.now.getFullYear();
  types:string[] = ['film', 'série', 'épisode'];
  descriptions: string[] = ['complète', 'courte'];
  

  constructor(private fb: FormBuilder) { }

  searchForm = this.fb.group({
    id: [''], 
    title: ['', Validators.required],
    types: this.fb.array(this.types),
    year: ['', [Validators.required, Validators.min(this.lowYear), Validators.max(this.yearOfNow)]], 
    descriptions: this.fb.array(this.descriptions,),
  })

  ngOnInit() {
  
  }


  onSubmit() {
    console.log(this.searchForm.value)
  }
}
