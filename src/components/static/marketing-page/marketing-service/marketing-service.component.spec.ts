import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingServiceComponent } from './marketing-service.component';

describe('MarketingServiceComponent', () => {
  let component: MarketingServiceComponent;
  let fixture: ComponentFixture<MarketingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
