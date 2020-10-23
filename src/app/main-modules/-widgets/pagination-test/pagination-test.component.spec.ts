import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTestComponent } from './pagination-test.component';

describe('PaginationTestComponent', () => {
  let component: PaginationTestComponent;
  let fixture: ComponentFixture<PaginationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
