import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAppComponent } from './cars-app.component';

describe('CarsAppComponent', () => {
  let component: CarsAppComponent;
  let fixture: ComponentFixture<CarsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
