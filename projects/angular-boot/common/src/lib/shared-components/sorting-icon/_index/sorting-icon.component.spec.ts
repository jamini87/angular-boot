import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingIconComponent } from './sorting-icon.component';

describe('SortingIconComponent', () => {
  let component: SortingIconComponent;
  let fixture: ComponentFixture<SortingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
