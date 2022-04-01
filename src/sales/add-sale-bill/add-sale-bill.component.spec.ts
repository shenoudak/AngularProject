import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleBillComponent } from './add-sale-bill.component';

describe('AddSaleBillComponent', () => {
  let component: AddSaleBillComponent;
  let fixture: ComponentFixture<AddSaleBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaleBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
