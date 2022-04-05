import { TestBed } from '@angular/core/testing';

import { SaleProductService } from './sale-product.service';

describe('SaleProductService', () => {
  let service: SaleProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
