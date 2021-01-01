import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './_index/pagination.component';
import {UtilModule} from '@angular-boot/util';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UtilModule,
        FormsModule
    ],
  declarations: [PaginationComponent],
  exports: [
    PaginationComponent
  ]
})
export class ShrPaginationModule {
}
