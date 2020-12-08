import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopIntroComponent } from './shop-intro.component';

describe('ShopIntroComponent', () => {
  let component: ShopIntroComponent;
  let fixture: ComponentFixture<ShopIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
