import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreYouSureDirective } from './content/are-you-sure.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AreYouSureDirective],
  exports: [
    AreYouSureDirective
  ]
})
export class NbDirectivesModule { }
