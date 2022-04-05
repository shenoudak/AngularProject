import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockProductComponent } from './add-stock-product.component';

describe('AddStockProductComponent', () => {
  let component: AddStockProductComponent;
  let fixture: ComponentFixture<AddStockProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStockProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
