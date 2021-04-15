import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryValidationComponent } from './ordinary-validation.component';

describe('OrdinaryValidationComponent', () => {
  let component: OrdinaryValidationComponent;
  let fixture: ComponentFixture<OrdinaryValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinaryValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
