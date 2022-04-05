import { TestBed } from '@angular/core/testing';

import { ReturnPurchaseProductService } from './return-purchase-product.service';

describe('ReturnPurchaseProductService', () => {
  let service: ReturnPurchaseProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnPurchaseProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
