import { TestBed } from '@angular/core/testing';

import { ReturnSaleBillService } from './return-sale-bill.service';

describe('ReturnSaleBillService', () => {
  let service: ReturnSaleBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnSaleBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
