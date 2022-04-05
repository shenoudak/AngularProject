import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchaseReturnBillComponent } from './add-purchase-return-bill.component';

describe('AddPurchaseReturnBillComponent', () => {
  let component: AddPurchaseReturnBillComponent;
  let fixture: ComponentFixture<AddPurchaseReturnBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPurchaseReturnBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPurchaseReturnBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
