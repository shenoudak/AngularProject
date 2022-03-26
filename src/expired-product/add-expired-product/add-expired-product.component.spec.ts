import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpiredProductComponent } from './add-expired-product.component';

describe('AddExpiredProductComponent', () => {
  let component: AddExpiredProductComponent;
  let fixture: ComponentFixture<AddExpiredProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpiredProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpiredProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
