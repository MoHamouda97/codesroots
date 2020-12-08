import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopWorkComponent } from './shop-work.component';

describe('ShopWorkComponent', () => {
  let component: ShopWorkComponent;
  let fixture: ComponentFixture<ShopWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
