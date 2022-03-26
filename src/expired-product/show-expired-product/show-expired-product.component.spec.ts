import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExpiredProductComponent } from './show-expired-product.component';

describe('ShowExpiredProductComponent', () => {
  let component: ShowExpiredProductComponent;
  let fixture: ComponentFixture<ShowExpiredProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExpiredProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExpiredProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
