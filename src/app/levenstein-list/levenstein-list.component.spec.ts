/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LevensteinListComponent } from './levenstein-list.component';

describe('LevensteinListComponent', () => {
  let component: LevensteinListComponent;
  let fixture: ComponentFixture<LevensteinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevensteinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevensteinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
