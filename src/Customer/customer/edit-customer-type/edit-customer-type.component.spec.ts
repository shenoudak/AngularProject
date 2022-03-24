import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerTypeComponent } from './edit-customer-type.component';

describe('EditCustomerTypeComponent', () => {
  let component: EditCustomerTypeComponent;
  let fixture: ComponentFixture<EditCustomerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
