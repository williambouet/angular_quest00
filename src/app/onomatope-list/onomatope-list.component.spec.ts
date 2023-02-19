/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnomatopeListComponent } from './onomatope-list.component';

describe('OnomatopeListComponent', () => {
  let component: OnomatopeListComponent;
  let fixture: ComponentFixture<OnomatopeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnomatopeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnomatopeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
