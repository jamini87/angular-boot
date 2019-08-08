import { TestBed } from '@angular/core/testing';

import { Toolkit2Service } from './toolkit2.service';

describe('Toolkit2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Toolkit2Service = TestBed.get(Toolkit2Service);
    expect(service).toBeTruthy();
  });
});
