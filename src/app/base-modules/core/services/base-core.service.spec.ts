import { TestBed } from '@angular/core/testing';

import { BaseCoreService } from './base-core.service';

describe('BaseCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseCoreService = TestBed.get(BaseCoreService);
    expect(service).toBeTruthy();
  });
});
