import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBillReportComponent } from './sale-bill-report.component';

describe('SaleBillReportComponent', () => {
  let component: SaleBillReportComponent;
  let fixture: ComponentFixture<SaleBillReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleBillReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleBillReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
