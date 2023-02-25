import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { metaphone } from 'metaphone';
import { LevenshteinService } from '../service/levenshtein.service';
import { TEST_LIST } from '../service/mock-pokemon';

@Component({
  selector: 'app-levenshtein-test',
  templateUrl: './levenshtein-test.component.html',
  styleUrls: ['./levenshtein-test.component.css'],
})
export class LevenshteinTestComponent implements OnInit {
  public pokemons?: any[];
  private tempList?: any[];
  private distanceLevenshtein?: number;
  private distanceMetaphone?: number;

  public modelForm = this.fb.group({ search: [''] });

  constructor(
    private levenshteinService: LevenshteinService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {}

  getSearchList(search: string) {
    const DISTANCE_LEVENSHTEIN = 1;
    const DISTANCE_METAPHONE = 1;
    this.tempList = [];

    TEST_LIST?.forEach((pokemon) => {
      this.distanceLevenshtein = this.levenshteinService.calculate(
        search.toLowerCase(),
        pokemon.slug.toLowerCase()
      );
      this.distanceMetaphone = this.levenshteinService.calculate(
        metaphone(search),
        metaphone(pokemon.slug.toLowerCase())
      );

      if (
        this.distanceLevenshtein <= DISTANCE_LEVENSHTEIN ||
        this.distanceMetaphone <= DISTANCE_METAPHONE
      ) {
        this.tempList?.push(pokemon);
      }

      console.log(
        'Search: ' +
          search +
          ' (' +
          metaphone(search) +
          ')        #' +
          pokemon.id +
          ' slug: ' +
          pokemon.slug +
          ' (' +
          metaphone(pokemon.slug) +
          ') Dl/Dm: ' +
          this.distanceLevenshtein +
          '/' +
          this.distanceMetaphone
      );
    });
    this.pokemons = this.tempList;
    this.modelForm.reset();
  }

  onSubmit() {
    if (this.modelForm.value['search']) {
      this.getSearchList(this.modelForm.value['search']);
    }
  }

  allList() {
    this.pokemons = TEST_LIST;
  }
}
