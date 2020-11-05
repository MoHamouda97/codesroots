import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopIntroComponent } from './desktop-intro.component';

describe('DesktopIntroComponent', () => {
  let component: DesktopIntroComponent;
  let fixture: ComponentFixture<DesktopIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
