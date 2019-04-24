import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondHumanizePipe} from './pipes/second-humanize.pipe';

@NgModule({
  declarations: [SecondHumanizePipe],
  imports: [
    CommonModule
  ],
  exports: [
    SecondHumanizePipe
  ]
})
export class DateToolsModule {
}
