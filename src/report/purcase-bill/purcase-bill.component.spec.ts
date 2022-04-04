import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcaseBillComponent } from './purcase-bill.component';

describe('PurcaseBillComponent', () => {
  let component: PurcaseBillComponent;
  let fixture: ComponentFixture<PurcaseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcaseBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcaseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
