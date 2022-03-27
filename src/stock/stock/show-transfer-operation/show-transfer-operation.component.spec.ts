import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTransferOperationComponent } from './show-transfer-operation.component';

describe('ShowTransferOperationComponent', () => {
  let component: ShowTransferOperationComponent;
  let fixture: ComponentFixture<ShowTransferOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTransferOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTransferOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
