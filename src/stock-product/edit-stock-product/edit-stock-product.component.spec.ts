import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStockProductComponent } from './edit-stock-product.component';

describe('EditStockProductComponent', () => {
  let component: EditStockProductComponent;
  let fixture: ComponentFixture<EditStockProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStockProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStockProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
