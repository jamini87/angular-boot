import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavIconComponent } from './nav-icon.component';

describe('NavIconComponent', () => {
  let component: NavIconComponent;
  let fixture: ComponentFixture<NavIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
