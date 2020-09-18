import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingdetilsPage } from './bookingdetils.page';

describe('BookingdetilsPage', () => {
  let component: BookingdetilsPage;
  let fixture: ComponentFixture<BookingdetilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingdetilsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingdetilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
