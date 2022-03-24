import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerTypeComponent } from './show-customer-type.component';

describe('ShowCustomerTypeComponent', () => {
  let component: ShowCustomerTypeComponent;
  let fixture: ComponentFixture<ShowCustomerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustomerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
