import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPage } from './stock.page';

describe('StockPage', () => {
  let component: StockPage;
  let fixture: ComponentFixture<StockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
