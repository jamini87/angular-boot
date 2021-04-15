import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbvRequiredTestComponent } from './nbv-required-test.component';

describe('NbvRequiredTestComponent', () => {
  let component: NbvRequiredTestComponent;
  let fixture: ComponentFixture<NbvRequiredTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbvRequiredTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbvRequiredTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
