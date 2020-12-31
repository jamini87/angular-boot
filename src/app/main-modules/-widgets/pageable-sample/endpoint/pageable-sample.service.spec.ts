import { TestBed } from '@angular/core/testing';

import { PageableSampleService } from './pageable-sample.service';

describe('PageableSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageableSampleService = TestBed.get(PageableSampleService);
    expect(service).toBeTruthy();
  });
});
