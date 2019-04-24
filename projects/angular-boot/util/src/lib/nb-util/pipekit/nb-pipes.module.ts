import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipeMomentModule} from './moment/pipe-moment.module';
import {NbpipePipe} from './nbpipe/nbpipe.pipe';
import {PipeStringModule} from './string/pipe-string.module';
import {DateToolsModule} from './date-tools/date-tools.module';

@NgModule({
  imports: [
    CommonModule,
    PipeMomentModule,
    PipeStringModule,
    DateToolsModule
  ],
  declarations: [NbpipePipe],
  exports: [
    PipeMomentModule,
    PipeStringModule,
    NbpipePipe,
    DateToolsModule
  ]
})
export class NbPipesModule {
}
