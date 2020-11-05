import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingPageComponent } from './hosting-page.component';

describe('HostingPageComponent', () => {
  let component: HostingPageComponent;
  let fixture: ComponentFixture<HostingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
