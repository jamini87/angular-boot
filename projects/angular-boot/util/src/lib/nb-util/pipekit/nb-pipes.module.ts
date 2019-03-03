import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipeMomentModule} from './moment/pipe-moment.module';
import {NbpipePipe} from './nbpipe/nbpipe.pipe';
import {PipeStringModule} from './string/pipe-string.module';

@NgModule({
  imports: [
    CommonModule,
    PipeMomentModule,
    PipeStringModule
  ],
  declarations: [NbpipePipe],
  exports: [
    PipeMomentModule,
    PipeStringModule,
    NbpipePipe,
  ]
})
export class NbPipesModule {
}
