/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnomatopeFormComponent } from './onomatope-form.component';

describe('OnomatopeFormComponent', () => {
  let component: OnomatopeFormComponent;
  let fixture: ComponentFixture<OnomatopeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnomatopeFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnomatopeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
