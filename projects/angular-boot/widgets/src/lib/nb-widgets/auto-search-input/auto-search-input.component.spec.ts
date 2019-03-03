import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSearchInputComponent } from './auto-search-input.component';

describe('AutoSearchInputComponent', () => {
  let component: AutoSearchInputComponent;
  let fixture: ComponentFixture<AutoSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
