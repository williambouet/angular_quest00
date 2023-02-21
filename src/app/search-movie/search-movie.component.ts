import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  public lowYear: number;
  now: Date;
  yearOfNow: number;
  types:string[] = ['film', 'série', 'épisode'];
  descriptions: string[] = ['complète', 'courte'];
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.lowYear=1900
    this.now= new Date();
    this.yearOfNow = this.now.getFullYear();
    
  
    this.searchForm = this.fb.group({
      groupIdTitle: this.fb.group({
        id: [''],
        title: [''],
      }, { validators: [this.isRequiredValidator()] },),
      
      type:[this.types],
      year: ['', [Validators.required, this.rangeDateValidator()]], 
      descriptions: [this.descriptions],
    })
    
  }
  
  
  ngOnInit() {
  
    
    this.searchForm.setValue({
      groupIdTitle: {
        id: '',
        title:''
      },
      year: null,
      type: this.types[1],
      descriptions: [''], 
    }
    )
    
    this.searchForm.patchValue({
      descriptions: this.descriptions[1],
    })
    
}

rangeDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    const valueYear: number = control.value;

    if ((valueYear < this.lowYear) || (valueYear > this.yearOfNow)) {
      return { 'minMax': { value: true, years: [this.lowYear,  this.yearOfNow] }};
    } else {
      return null;
    }
  };
}
  
/* rangeDateValidator(control: AbstractControl): ValidationErrors | null {

    const valueYear: number = control.value;

    if ((valueYear < this.lowYear) || (valueYear > this.yearOfNow)) {
      return { 'minMax': { value: true,  years: [this.lowYear,  this.yearOfNow] }};
    } else {
      return null;
  }
} */
  

isRequiredValidator(): ValidatorFn {
    return (controls: AbstractControl): ValidationErrors | null => {
      
      const valueId = controls.get('id')?.value;
      const valueTitle = controls.get('title')?.value;

      if (!(valueId) && !(valueTitle)) {
        return { 'isRequired': { value: true } };
      } else {
        return null;
      }
    };
  }

  onSubmit() {
    console.log(this.searchForm.value)
  }
}
