/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokedexPageComponent } from './pokedex-page.component';

describe('PokedexPageComponent', () => {
  let component: PokedexPageComponent;
  let fixture: ComponentFixture<PokedexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
