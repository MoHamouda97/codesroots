import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocilMediaComponent } from './socil-media.component';

describe('SocilMediaComponent', () => {
  let component: SocilMediaComponent;
  let fixture: ComponentFixture<SocilMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocilMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocilMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
