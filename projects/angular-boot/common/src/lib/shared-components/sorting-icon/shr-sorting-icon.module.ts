import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortingIconComponent} from './_index/sorting-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SortingIconComponent],
  exports: [
    SortingIconComponent
  ]
})
export class ShrSortingIconModule {
}
