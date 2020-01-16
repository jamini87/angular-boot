import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipeMomentModule} from './moment/pipe-moment.module';
import {NbpipePipe} from './nbpipe/nbpipe.pipe';
import {PipeStringModule} from './string/pipe-string.module';
import {DateToolsModule} from './date-tools/date-tools.module';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipeMomentModule,
    PipeStringModule,
    DateToolsModule
  ],
  declarations: [NbpipePipe, SafeHtmlPipe],
  exports: [
    PipeMomentModule,
    PipeStringModule,
    NbpipePipe,
    DateToolsModule,
    SafeHtmlPipe
  ]
})
export class NbPipesModule {
}
