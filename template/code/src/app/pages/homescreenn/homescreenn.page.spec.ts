import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomescreennPage } from './homescreenn.page';

describe('HomescreennPage', () => {
  let component: HomescreennPage;
  let fixture: ComponentFixture<HomescreennPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomescreennPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomescreennPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
