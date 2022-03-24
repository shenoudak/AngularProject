import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTaxComponent } from './show-tax.component';

describe('ShowTaxComponent', () => {
  let component: ShowTaxComponent;
  let fixture: ComponentFixture<ShowTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
