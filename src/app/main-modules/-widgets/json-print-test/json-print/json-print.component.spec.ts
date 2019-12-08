import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPrintComponent } from './json-print.component';

describe('JsonPrintComponent', () => {
  let component: JsonPrintComponent;
  let fixture: ComponentFixture<JsonPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
