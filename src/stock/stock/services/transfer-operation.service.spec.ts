import { TestBed } from '@angular/core/testing';

import { TransferOperationService } from './transfer-operation.service';

describe('TransferOperationService', () => {
  let service: TransferOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
