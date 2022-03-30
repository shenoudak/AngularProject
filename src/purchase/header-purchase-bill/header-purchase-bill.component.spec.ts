import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPurchaseBillComponent } from './header-purchase-bill.component';

describe('HeaderPurchaseBillComponent', () => {
  let component: HeaderPurchaseBillComponent;
  let fixture: ComponentFixture<HeaderPurchaseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPurchaseBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPurchaseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
