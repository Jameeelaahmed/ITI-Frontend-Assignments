import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOfRouteComponentsComponent } from './group-of-route-components.component';

describe('GroupOfRouteComponentsComponent', () => {
  let component: GroupOfRouteComponentsComponent;
  let fixture: ComponentFixture<GroupOfRouteComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupOfRouteComponentsComponent]
    });
    fixture = TestBed.createComponent(GroupOfRouteComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
