import { TestBed } from '@angular/core/testing';

import { ReturnSaleBillProductService } from './return-sale-bill-product.service';

describe('ReturnSaleBillProductService', () => {
  let service: ReturnSaleBillProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnSaleBillProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
