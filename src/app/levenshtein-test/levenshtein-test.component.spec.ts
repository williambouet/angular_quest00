/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LevenshteinTestComponent } from './levenshtein-test.component';

describe('LevenshteinTestComponent', () => {
  let component: LevenshteinTestComponent;
  let fixture: ComponentFixture<LevenshteinTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LevenshteinTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevenshteinTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
