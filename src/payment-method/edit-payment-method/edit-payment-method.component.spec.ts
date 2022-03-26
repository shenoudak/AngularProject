import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentMethodComponent } from './edit-payment-method.component';

describe('EditPaymentMethodComponent', () => {
  let component: EditPaymentMethodComponent;
  let fixture: ComponentFixture<EditPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
