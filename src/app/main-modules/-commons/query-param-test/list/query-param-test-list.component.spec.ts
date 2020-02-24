import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamTestListComponent } from './query-param-test-list.component';

describe('QueryParamTestListComponent', () => {
  let component: QueryParamTestListComponent;
  let fixture: ComponentFixture<QueryParamTestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryParamTestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryParamTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
