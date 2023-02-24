import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { metaphone } from 'metaphone';
import { LevensteinService } from '../service/levenstein.service';
import { TEST_LIST } from '../service/mock-pokemon';

@Component({
  selector: 'app-levenstein-test',
  templateUrl: './levenstein-test.component.html',
  styleUrls: ['./levenstein-test.component.css'],
})
export class LevensteinTestComponent implements OnInit {
  public pokemons?: any[];
  private tempList?: any[];
  private distance?: number;
  public modelForm = this.fb.group({ search: [''] });

  constructor(
    private distanceLevenstein: LevensteinService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {}

  getSearchList(search: string) {
    const DISTANCE_MAXI = 1;
    this.tempList = [];

    TEST_LIST?.forEach((pokemon) => {
      this.distance =
        this.distanceLevenstein.calculate(
          search.toLowerCase(),
          pokemon.name.toLowerCase()
        ) -
        this.distanceLevenstein.calculate(
          metaphone(search.toLowerCase()),
          metaphone(pokemon.name.toLowerCase())
        );
      
      console.log(
        pokemon.id + ' ' + metaphone(pokemon.name) + ' ' + metaphone(search)
      );

      if (this.distance <= DISTANCE_MAXI) {
        this.tempList?.push(pokemon);
      }
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
