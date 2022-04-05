import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaymentMComponent } from './show-payment-m.component';

describe('ShowPaymentMComponent', () => {
  let component: ShowPaymentMComponent;
  let fixture: ComponentFixture<ShowPaymentMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPaymentMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPaymentMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
