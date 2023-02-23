/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreatePokemonComponent } from './create-pokemon.component';

describe('CreatePokemonComponent', () => {
  let component: CreatePokemonComponent;
  let fixture: ComponentFixture<CreatePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
