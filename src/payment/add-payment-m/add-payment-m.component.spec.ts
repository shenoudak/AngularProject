import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentMComponent } from './add-payment-m.component';

describe('AddPaymentMComponent', () => {
  let component: AddPaymentMComponent;
  let fixture: ComponentFixture<AddPaymentMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
