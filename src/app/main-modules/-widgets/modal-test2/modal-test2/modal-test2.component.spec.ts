import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTest2Component } from './modal-test2.component';

describe('ModalTest2Component', () => {
  let component: ModalTest2Component;
  let fixture: ComponentFixture<ModalTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
