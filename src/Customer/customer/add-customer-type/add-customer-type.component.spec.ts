import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerTypeComponent } from './add-customer-type.component';

describe('AddCustomerTypeComponent', () => {
  let component: AddCustomerTypeComponent;
  let fixture: ComponentFixture<AddCustomerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
