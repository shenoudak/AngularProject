import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransferOperationComponent } from './edit-transfer-operation.component';

describe('EditTransferOperationComponent', () => {
  let component: EditTransferOperationComponent;
  let fixture: ComponentFixture<EditTransferOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransferOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransferOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
