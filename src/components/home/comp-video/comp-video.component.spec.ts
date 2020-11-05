import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVideoComponent } from './comp-video.component';

describe('CompVideoComponent', () => {
  let component: CompVideoComponent;
  let fixture: ComponentFixture<CompVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
