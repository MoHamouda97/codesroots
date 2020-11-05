import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesrootsSeoFeaturesComponent } from './codesroots-seo-features.component';

describe('CodesrootsSeoFeaturesComponent', () => {
  let component: CodesrootsSeoFeaturesComponent;
  let fixture: ComponentFixture<CodesrootsSeoFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesrootsSeoFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesrootsSeoFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
