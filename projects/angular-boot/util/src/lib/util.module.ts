import { NgModule } from '@angular/core';
import { UtilComponent } from './util.component';
import {NbDirectivesModule} from './nb-util/directives/nb-directives.module';
import {NbPipesModule} from './nb-util/pipekit/nb-pipes.module';



@NgModule({
  declarations: [UtilComponent],
  imports: [
    NbDirectivesModule,
    NbPipesModule
  ],
  exports: [UtilComponent,
    NbDirectivesModule,
    NbPipesModule]
})
export class UtilModule { }
