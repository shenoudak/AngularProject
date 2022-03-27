import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransferOperationComponent } from './add-transfer-operation.component';

describe('AddTransferOperationComponent', () => {
  let component: AddTransferOperationComponent;
  let fixture: ComponentFixture<AddTransferOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransferOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransferOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
