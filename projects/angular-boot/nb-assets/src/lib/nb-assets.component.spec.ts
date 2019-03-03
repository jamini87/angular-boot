import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbAssetsComponent } from './nb-assets.component';

describe('NbAssetsComponent', () => {
  let component: NbAssetsComponent;
  let fixture: ComponentFixture<NbAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
