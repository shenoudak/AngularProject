import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaymentMethodComponent } from './show-payment-method.component';

describe('ShowPaymentMethodComponent', () => {
  let component: ShowPaymentMethodComponent;
  let fixture: ComponentFixture<ShowPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
