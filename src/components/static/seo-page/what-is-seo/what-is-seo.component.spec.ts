import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsSeoComponent } from './what-is-seo.component';

describe('WhatIsSeoComponent', () => {
  let component: WhatIsSeoComponent;
  let fixture: ComponentFixture<WhatIsSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
