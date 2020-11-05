import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopInfoComponent } from './desktop-info.component';

describe('DesktopInfoComponent', () => {
  let component: DesktopInfoComponent;
  let fixture: ComponentFixture<DesktopInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
