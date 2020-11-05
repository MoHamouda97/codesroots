import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatcBoxesComponent } from './fatc-boxes.component';

describe('FatcBoxesComponent', () => {
  let component: FatcBoxesComponent;
  let fixture: ComponentFixture<FatcBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatcBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatcBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
