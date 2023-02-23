/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtelierButtonParentComponent } from './atelier-button-parent.component';

describe('AtelierButtonParentComponent', () => {
  let component: AtelierButtonParentComponent;
  let fixture: ComponentFixture<AtelierButtonParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtelierButtonParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierButtonParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
