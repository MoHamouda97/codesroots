import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCodesrootsComponent } from './why-codesroots.component';

describe('WhyCodesrootsComponent', () => {
  let component: WhyCodesrootsComponent;
  let fixture: ComponentFixture<WhyCodesrootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyCodesrootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCodesrootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
