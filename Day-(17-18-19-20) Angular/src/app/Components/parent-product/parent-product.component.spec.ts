import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentProductComponent } from './parent-product.component';

describe('ParentProductComponent', () => {
  let component: ParentProductComponent;
  let fixture: ComponentFixture<ParentProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentProductComponent]
    });
    fixture = TestBed.createComponent(ParentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
