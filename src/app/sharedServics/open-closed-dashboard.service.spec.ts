import { TestBed } from '@angular/core/testing';

import { OpenClosedDashboardService } from './open-closed-dashboard.service';

describe('OpenClosedDashboardService', () => {
  let service: OpenClosedDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenClosedDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
