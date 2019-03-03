import { PipeStringModule } from './pipe-string.module';

describe('PipeStringModule', () => {
  let pipeStringModule: PipeStringModule;

  beforeEach(() => {
    pipeStringModule = new PipeStringModule();
  });

  it('should create an instance', () => {
    expect(pipeStringModule).toBeTruthy();
  });
});
