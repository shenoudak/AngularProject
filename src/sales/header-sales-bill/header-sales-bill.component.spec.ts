import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSalesBillComponent } from './header-sales-bill.component';

describe('HeaderSalesBillComponent', () => {
  let component: HeaderSalesBillComponent;
  let fixture: ComponentFixture<HeaderSalesBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSalesBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSalesBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
