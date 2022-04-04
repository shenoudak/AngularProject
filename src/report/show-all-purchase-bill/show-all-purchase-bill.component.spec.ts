import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPurchaseBillComponent } from './show-all-purchase-bill.component';

describe('ShowAllPurchaseBillComponent', () => {
  let component: ShowAllPurchaseBillComponent;
  let fixture: ComponentFixture<ShowAllPurchaseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPurchaseBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllPurchaseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
