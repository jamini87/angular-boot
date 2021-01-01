import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XmlPrintTestRoutingModule } from './xml-print-test-routing.module';
import { XmlPrintComponent } from './xml-print/xml-print.component';
import {NbWidgetsModule} from '../../../../../projects/angular-boot/widgets/src/lib/nb-widgets.module';


@NgModule({
  declarations: [XmlPrintComponent],
  imports: [
    CommonModule,
    XmlPrintTestRoutingModule,
    NbWidgetsModule
  ]
})
export class XmlPrintTestModule { }
