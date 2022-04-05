import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentMComponent } from './edit-payment-m.component';

describe('EditPaymentMComponent', () => {
  let component: EditPaymentMComponent;
  let fixture: ComponentFixture<EditPaymentMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaymentMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaymentMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
