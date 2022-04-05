import { TestBed } from '@angular/core/testing';

import { PaymentMService } from './payment-m.service';

describe('PaymentMService', () => {
  let service: PaymentMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
