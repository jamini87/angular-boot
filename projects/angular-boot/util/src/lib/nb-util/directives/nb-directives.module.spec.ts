import { NbDirectivesModule } from './nb-directives.module';

describe('NbDirectivesModule', () => {
  let nbDirectivesModule: NbDirectivesModule;

  beforeEach(() => {
    nbDirectivesModule = new NbDirectivesModule();
  });

  it('should create an instance', () => {
    expect(nbDirectivesModule).toBeTruthy();
  });
});
