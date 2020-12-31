import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageableSampleListComponent } from './pageable-sample-list.component';

describe('PageableSampleListComponent', () => {
  let component: PageableSampleListComponent;
  let fixture: ComponentFixture<PageableSampleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageableSampleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageableSampleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
