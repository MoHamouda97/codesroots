import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCodesrootsComponent } from './desktop-codesroots.component';

describe('DesktopCodesrootsComponent', () => {
  let component: DesktopCodesrootsComponent;
  let fixture: ComponentFixture<DesktopCodesrootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopCodesrootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopCodesrootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
