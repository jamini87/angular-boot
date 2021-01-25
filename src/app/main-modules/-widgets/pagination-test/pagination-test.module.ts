import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationTestRoutingModule } from './pagination-test-routing.module';
import { PaginationTestComponent } from './pagination-test.component';
import {ShrPaginationModule} from '../../../../../projects/angular-boot/common/src/lib/shared-components/pagination/shr-pagination.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PaginationTestComponent],
    imports: [
        CommonModule,
        PaginationTestRoutingModule,
        ShrPaginationModule,
        FormsModule
    ]
})
export class PaginationTestModule { }
