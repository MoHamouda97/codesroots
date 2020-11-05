import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingWhyCodesrootsComponent } from './marketing-why-codesroots.component';

describe('MarketingWhyCodesrootsComponent', () => {
  let component: MarketingWhyCodesrootsComponent;
  let fixture: ComponentFixture<MarketingWhyCodesrootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingWhyCodesrootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingWhyCodesrootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
