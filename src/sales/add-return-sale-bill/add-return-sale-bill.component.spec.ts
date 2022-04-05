import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReturnSaleBillComponent } from './add-return-sale-bill.component';

describe('AddReturnSaleBillComponent', () => {
  let component: AddReturnSaleBillComponent;
  let fixture: ComponentFixture<AddReturnSaleBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReturnSaleBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReturnSaleBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
