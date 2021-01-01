import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlPrintComponent } from './xml-print.component';

describe('XmlPrintComponent', () => {
  let component: XmlPrintComponent;
  let fixture: ComponentFixture<XmlPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
