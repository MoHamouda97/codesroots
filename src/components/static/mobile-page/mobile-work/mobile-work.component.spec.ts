import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileWorkComponent } from './mobile-work.component';

describe('MobileWorkComponent', () => {
  let component: MobileWorkComponent;
  let fixture: ComponentFixture<MobileWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
