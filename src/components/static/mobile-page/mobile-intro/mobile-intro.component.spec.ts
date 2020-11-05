import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileIntroComponent } from './mobile-intro.component';

describe('MobileIntroComponent', () => {
  let component: MobileIntroComponent;
  let fixture: ComponentFixture<MobileIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
