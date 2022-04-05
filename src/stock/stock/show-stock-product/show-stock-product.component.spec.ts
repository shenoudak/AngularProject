import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStockProductComponent } from './show-stock-product.component';

describe('ShowStockProductComponent', () => {
  let component: ShowStockProductComponent;
  let fixture: ComponentFixture<ShowStockProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStockProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStockProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
