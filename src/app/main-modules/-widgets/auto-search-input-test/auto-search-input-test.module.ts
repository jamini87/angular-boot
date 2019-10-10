import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoSearchInputTestRoutingModule } from './auto-search-input-test-routing.module';
import { AutoSearchInputTestComponent } from './auto-search-input-test.component';
import {NbWidgetsModule} from '../../../../../projects/angular-boot/widgets/src/lib/nb-widgets.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AutoSearchInputTestComponent],
  imports: [
    CommonModule,
    AutoSearchInputTestRoutingModule,
    NbWidgetsModule,
    FormsModule
  ]
})
export class AutoSearchInputTestModule { }
