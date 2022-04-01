import { TestBed } from '@angular/core/testing';

import { SaleBillService } from './sale-bill.service';

describe('SaleBillService', () => {
  let service: SaleBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
