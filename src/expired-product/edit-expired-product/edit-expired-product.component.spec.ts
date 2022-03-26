import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpiredProductComponent } from './edit-expired-product.component';

describe('EditExpiredProductComponent', () => {
  let component: EditExpiredProductComponent;
  let fixture: ComponentFixture<EditExpiredProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpiredProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpiredProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
