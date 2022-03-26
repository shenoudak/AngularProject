import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaymentMethodComponent } from './delete-payment-method.component';

describe('DeletePaymentMethodComponent', () => {
  let component: DeletePaymentMethodComponent;
  let fixture: ComponentFixture<DeletePaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
