import { TestBed } from '@angular/core/testing';

import { NbAssetsService } from './nb-assets.service';

describe('NbAssetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbAssetsService = TestBed.get(NbAssetsService);
    expect(service).toBeTruthy();
  });
});
