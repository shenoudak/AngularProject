import { TestBed } from '@angular/core/testing';

import { PurchaseProductService } from './purchase-product.service';

describe('PurchaseProductService', () => {
  let service: PurchaseProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
