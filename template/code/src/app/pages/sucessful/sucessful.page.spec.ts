import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulPage } from './sucessful.page';

describe('SucessfulPage', () => {
  let component: SucessfulPage;
  let fixture: ComponentFixture<SucessfulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessfulPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
