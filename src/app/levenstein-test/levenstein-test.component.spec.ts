/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LevensteinTestComponent } from './levenstein-test.component';

describe('LevensteinTestComponent', () => {
  let component: LevensteinTestComponent;
  let fixture: ComponentFixture<LevensteinTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevensteinTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevensteinTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
