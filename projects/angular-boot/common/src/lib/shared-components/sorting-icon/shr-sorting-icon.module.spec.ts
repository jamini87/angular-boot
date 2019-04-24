import { ShrSortingIconModule } from './shr-sorting-icon.module';

describe('ShrSortingIconModule', () => {
  let shrSortingIconModule: ShrSortingIconModule;

  beforeEach(() => {
    shrSortingIconModule = new ShrSortingIconModule();
  });

  it('should create an instance', () => {
    expect(shrSortingIconModule).toBeTruthy();
  });
});
