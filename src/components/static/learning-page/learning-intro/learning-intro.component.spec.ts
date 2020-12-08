import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningIntroComponent } from './learning-intro.component';

describe('LearningIntroComponent', () => {
  let component: LearningIntroComponent;
  let fixture: ComponentFixture<LearningIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
