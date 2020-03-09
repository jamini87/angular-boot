import {NgModule} from '@angular/core';
import {IfAddModeDirective} from './nb-common/util-directives/action-mode/if-add-mode.directive';
import {IfAddOrViewModeDirective} from './nb-common/util-directives/action-mode/if-add-or-view-mode.directive';
import {IfEditOrViewModeDirective} from './nb-common/util-directives/action-mode/if-edit-or-view-mode.directive';
import {IfEditOrAddModeDirective} from './nb-common/util-directives/action-mode/if-edit-or-add-mode.directive';
import {IfEditModeDirective} from './nb-common/util-directives/action-mode/if-edit-mode.directive';
import {IfViewModeDirective} from './nb-common/util-directives/action-mode/if-view-mode.directive';
import {ShrPaginationModule} from "./shared-components/pagination/shr-pagination.module";
import {ShrSortingIconModule} from "./shared-components/sorting-icon/shr-sorting-icon.module";
import { FloatLabelDirective } from './nb-common/util-directives/float-label.directive';

//Not Worked error:
// Unexpected value 'undefined' exported by the module
// 'NbCommonModule in /mnt/Local Disk D/Workspaces/TestOFAngularBoot/6/
// angular-boot-test6/node_modules/@angular-boot/common/angular-boot-common.d.ts'
// import {
//   IfAddModeDirective,
//   IfAddOrViewModeDirective,
//   IfEditModeDirective,
//   IfEditOrAddModeDirective,
//   IfEditOrViewModeDirective,
//   IfViewModeDirective
// } from './nb-common/util-directives';

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
  imports: [
    ShrPaginationModule,
    ShrSortingIconModule
  ],
  declarations: [UtilDirectives, FloatLabelDirective],
  exports: [
    UtilDirectives,
    ShrPaginationModule,
    ShrSortingIconModule]
})
export class NbCommonModule {
}
