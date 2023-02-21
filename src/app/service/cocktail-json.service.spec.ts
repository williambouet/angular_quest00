/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CocktailJsonService } from './cocktail-json.service';

describe('Service: CocktailJson', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CocktailJsonService]
    });
  });

  it('should ...', inject([CocktailJsonService], (service: CocktailJsonService) => {
    expect(service).toBeTruthy();
  }));
});
