import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTest2IndexComponent } from './modal-test2-index.component';

describe('ModalTest2IndexComponent', () => {
  let component: ModalTest2IndexComponent;
  let fixture: ComponentFixture<ModalTest2IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTest2IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTest2IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
