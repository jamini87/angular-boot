import {NgModule} from '@angular/core';
import {CommonComponent} from './common.component';
import {ShrPaginationModule} from './shared-components/pagination/shr-pagination.module';
import {ShrSortingIconModule} from './shared-components/sorting-icon/shr-sorting-icon.module';
import {IfAddModeDirective} from './util-directives/action-mode/if-add-mode.directive';
import {IfAddOrViewModeDirective} from './util-directives/action-mode/if-add-or-view-mode.directive';
import {IfEditModeDirective} from './util-directives/action-mode/if-edit-mode.directive';
import {IfEditOrAddModeDirective} from './util-directives/action-mode/if-edit-or-add-mode.directive';
import {IfEditOrViewModeDirective} from './util-directives/action-mode/if-edit-or-view-mode.directive';
import {IfViewModeDirective} from './util-directives/action-mode/if-view-mode.directive';
import {FloatLabelDirective} from './util-directives/float-label.directive';


// import {FloatLabelDirective} from './util-directives';
// import {IfAddModeDirective} from './util-directives';
// import {IfAddOrViewModeDirective} from './util-directives';
// import {IfEditModeDirective} from './util-directives';
// import {IfEditOrAddModeDirective} from './util-directives';
// import {IfEditOrViewModeDirective} from './util-directives';
// import {IfViewModeDirective} from './util-directives';
//
// const UtilDirectives = [
//   IfAddModeDirective,
//   IfAddOrViewModeDirective,
//   IfEditModeDirective,
//   IfEditOrAddModeDirective,
//   IfEditOrViewModeDirective,
//   IfViewModeDirective,
//   FloatLabelDirective
// ];

@NgModule({
  declarations: [
    CommonComponent,
    IfAddModeDirective,
    IfAddOrViewModeDirective,
    IfEditModeDirective,
    IfEditOrAddModeDirective,
    IfEditOrViewModeDirective,
    IfViewModeDirective,
    FloatLabelDirective],
  imports: [
    ShrPaginationModule,
    ShrSortingIconModule
  ],
  exports: [CommonComponent,
    IfAddModeDirective,
    IfAddOrViewModeDirective,
    IfEditModeDirective,
    IfEditOrAddModeDirective,
    IfEditOrViewModeDirective,
    IfViewModeDirective,
    FloatLabelDirective,
    ShrPaginationModule,
    ShrSortingIconModule]
})
export class NbCommonModule {
}
