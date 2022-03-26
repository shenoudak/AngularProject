import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpplierComponent } from './delete-spplier.component';

describe('DeleteSpplierComponent', () => {
  let component: DeleteSpplierComponent;
  let fixture: ComponentFixture<DeleteSpplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSpplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSpplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
