import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExpenseTypeComponent } from './show-expense-type.component';

describe('ShowExpenseTypeComponent', () => {
  let component: ShowExpenseTypeComponent;
  let fixture: ComponentFixture<ShowExpenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExpenseTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExpenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
