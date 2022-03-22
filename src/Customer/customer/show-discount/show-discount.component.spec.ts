import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDiscountComponent } from './show-discount.component';

describe('ShowDiscountComponent', () => {
  let component: ShowDiscountComponent;
  let fixture: ComponentFixture<ShowDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
