import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStockComponent } from './show-stock.component';

describe('ShowStockComponent', () => {
  let component: ShowStockComponent;
  let fixture: ComponentFixture<ShowStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
