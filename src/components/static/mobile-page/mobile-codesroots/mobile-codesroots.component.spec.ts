import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCodesrootsComponent } from './mobile-codesroots.component';

describe('MobileCodesrootsComponent', () => {
  let component: MobileCodesrootsComponent;
  let fixture: ComponentFixture<MobileCodesrootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCodesrootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCodesrootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
