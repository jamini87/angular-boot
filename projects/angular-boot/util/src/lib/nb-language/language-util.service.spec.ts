import { TestBed } from '@angular/core/testing';

import { LanguageUtilService } from './language-util.service';

describe('LanguageUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageUtilService = TestBed.get(LanguageUtilService);
    expect(service).toBeTruthy();
  });
});
