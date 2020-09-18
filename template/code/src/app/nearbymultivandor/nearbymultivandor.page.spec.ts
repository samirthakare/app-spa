import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbymultivandorPage } from './nearbymultivandor.page';

describe('NearbymultivandorPage', () => {
  let component: NearbymultivandorPage;
  let fixture: ComponentFixture<NearbymultivandorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbymultivandorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbymultivandorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
