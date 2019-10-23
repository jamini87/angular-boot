import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalTest2RoutingModule } from './modal-test2-routing.module';
import { ModalTest2Component } from './modal-test2/modal-test2.component';
import { ModalTest2IndexComponent } from './modal-test2-index/modal-test2-index.component';
import {NbWidgetsModule} from '../../../../../projects/angular-boot/widgets/src/lib/nb-widgets.module';
import { Test3Component } from './test3/test3.component';

@NgModule({
  declarations: [ModalTest2Component, ModalTest2IndexComponent, Test3Component],
  imports: [
    CommonModule,
    ModalTest2RoutingModule,
    NbWidgetsModule
  ]
})
export class ModalTest2Module { }
