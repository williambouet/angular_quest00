/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KittenListComponent } from './kitten-list.component';

describe('KittenListComponent', () => {
  let component: KittenListComponent;
  let fixture: ComponentFixture<KittenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
