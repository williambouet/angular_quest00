import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {


  @Output()
  public pokemonSearch: EventEmitter<string> = new EventEmitter();
  
  modelForm = this.fb.group({
    search: ["", [Validators.required, Validators.maxLength(50)], ],
  })
  
  constructor(private fb: FormBuilder) { 

  }
 
  ngOnInit() {
  }

  sendPokemonSearch(search: string) {
    this.pokemonSearch.emit(search)
    console.log(this.modelForm.value['search'])
  }
  
  onSubmit() {
    if (this.modelForm.value['search']) {
      this.sendPokemonSearch(this.modelForm.value['search']);
    }
  }

}
