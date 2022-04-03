import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSaleBillComponent } from './preview-sale-bill.component';

describe('PreviewSaleBillComponent', () => {
  let component: PreviewSaleBillComponent;
  let fixture: ComponentFixture<PreviewSaleBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewSaleBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSaleBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
