import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './_index/pagination.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {UtilModule} from '@angular-boot/util';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    UtilModule
  ],
  declarations: [PaginationComponent],
  exports: [
    PaginationComponent
  ]
})
export class ShrPaginationModule {
}
