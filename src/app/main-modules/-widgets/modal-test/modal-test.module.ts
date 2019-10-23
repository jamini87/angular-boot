import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalTestRoutingModule } from './modal-test-routing.module';
import { ModalTestComponent } from './modal-test.component';
import {NbWidgetsModule} from '../../../../../projects/angular-boot/widgets/src/lib/nb-widgets.module';

@NgModule({
  declarations: [ModalTestComponent],
  imports: [
    CommonModule,
    ModalTestRoutingModule,
    NbWidgetsModule
  ]
})
export class ModalTestModule { }
