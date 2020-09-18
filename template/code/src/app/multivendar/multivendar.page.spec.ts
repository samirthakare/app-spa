import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultivendarPage } from './multivendar.page';

describe('MultivendarPage', () => {
  let component: MultivendarPage;
  let fixture: ComponentFixture<MultivendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultivendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultivendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
