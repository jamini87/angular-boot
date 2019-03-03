import { NbPipesModule } from './nb-pipes.module';

describe('NbPipesModule', () => {
  let nbPipesModule: NbPipesModule;

  beforeEach(() => {
    nbPipesModule = new NbPipesModule();
  });

  it('should create an instance', () => {
    expect(nbPipesModule).toBeTruthy();
  });
});
