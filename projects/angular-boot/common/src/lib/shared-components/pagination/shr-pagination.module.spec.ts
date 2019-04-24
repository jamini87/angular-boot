import { ShrPaginationModule } from './shr-pagination.module';

describe('ShrPaginationModule', () => {
  let shrPaginationModule: ShrPaginationModule;

  beforeEach(() => {
    shrPaginationModule = new ShrPaginationModule();
  });

  it('should create an instance', () => {
    expect(shrPaginationModule).toBeTruthy();
  });
});
