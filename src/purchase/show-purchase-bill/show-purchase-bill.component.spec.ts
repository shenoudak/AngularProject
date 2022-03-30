import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPurchaseBillComponent } from './show-purchase-bill.component';

describe('ShowPurchaseBillComponent', () => {
  let component: ShowPurchaseBillComponent;
  let fixture: ComponentFixture<ShowPurchaseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPurchaseBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPurchaseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
