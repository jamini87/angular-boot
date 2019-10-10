import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSearchInputTestComponent } from './auto-search-input-test.component';

describe('AutoSearchInputTestComponent', () => {
  let component: AutoSearchInputTestComponent;
  let fixture: ComponentFixture<AutoSearchInputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSearchInputTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSearchInputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
