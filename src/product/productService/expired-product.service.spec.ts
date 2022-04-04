import { TestBed } from '@angular/core/testing';

import { ExpiredProductService } from './expired-product.service';

describe('ExpiredProductService', () => {
  let service: ExpiredProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpiredProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
