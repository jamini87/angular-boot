import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageableSampleRoutingModule} from './pageable-sample-routing.module';
import {NbWidgetsModule} from '../../../../../projects/angular-boot/widgets/src/lib/nb-widgets.module';
import {FormsModule} from '@angular/forms';
import {NbCommonModule} from '../../../../../projects/angular-boot/common/src/lib/nb-common.module';
import {PageableSampleListComponent} from './components/list/pageable-sample-list.component';

@NgModule({
  declarations: [PageableSampleListComponent],
  imports: [
    CommonModule,
    PageableSampleRoutingModule,
    NbWidgetsModule,
    FormsModule,
    NbCommonModule
  ]
})
export class PageableSampleModule {
}
