import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCodesrootsComponent } from './shop-codesroots.component';

describe('ShopCodesrootsComponent', () => {
  let component: ShopCodesrootsComponent;
  let fixture: ComponentFixture<ShopCodesrootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCodesrootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCodesrootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
