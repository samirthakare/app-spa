import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTimeDatePage } from './booking-time-date.page';

describe('BookingTimeDatePage', () => {
  let component: BookingTimeDatePage;
  let fixture: ComponentFixture<BookingTimeDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTimeDatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTimeDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
