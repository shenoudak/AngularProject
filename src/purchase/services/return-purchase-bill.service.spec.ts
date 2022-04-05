import { TestBed } from '@angular/core/testing';

import { ReturnPurchaseBillService } from './return-purchase-bill.service';

describe('ReturnPurchaseBillService', () => {
  let service: ReturnPurchaseBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnPurchaseBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
