import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import {ShrPaginationModule} from './shared-components/pagination/shr-pagination.module';
import {ShrSortingIconModule} from './shared-components/sorting-icon/shr-sorting-icon.module';
import {FloatLabelDirective} from './util-directives';
import {IfAddModeDirective} from './util-directives';
import {IfAddOrViewModeDirective} from './util-directives';
import {IfEditModeDirective} from './util-directives';
import {IfEditOrAddModeDirective} from './util-directives';
import {IfEditOrViewModeDirective} from './util-directives';
import {IfViewModeDirective} from './util-directives';

const UtilDirectives = [
  IfAddModeDirective,
  IfAddOrViewModeDirective,
  IfEditModeDirective,
  IfEditOrAddModeDirective,
  IfEditOrViewModeDirective,
  IfViewModeDirective,
  FloatLabelDirective
];

@NgModule({
  declarations: [
    CommonComponent,
    UtilDirectives,
    FloatLabelDirective],
  imports: [
    ShrPaginationModule,
    ShrSortingIconModule
  ],
  exports: [CommonComponent,
    UtilDirectives,
    ShrPaginationModule,
    ShrSortingIconModule]
})
export class NbCommonModule { }
