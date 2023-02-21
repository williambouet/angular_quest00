/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KittenAsideComponent } from './kitten-aside.component';

describe('KittenAsideComponent', () => {
  let component: KittenAsideComponent;
  let fixture: ComponentFixture<KittenAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
