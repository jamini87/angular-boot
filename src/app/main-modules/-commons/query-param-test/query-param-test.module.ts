import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryParamTestRoutingModule } from './query-param-test-routing.module';
import { QueryParamTestListComponent } from './list/query-param-test-list.component';
import {ShrPaginationModule} from "../../../../../projects/angular-boot/common/src/lib/shared-components/pagination/shr-pagination.module";
import {NbWidgetsModule} from "../../../../../projects/angular-boot/widgets/src/lib/nb-widgets.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [QueryParamTestListComponent],
  imports: [
    CommonModule,
    QueryParamTestRoutingModule,
    ShrPaginationModule,
    NbWidgetsModule,
    FormsModule
  ]
})
export class QueryParamTestModule { }
