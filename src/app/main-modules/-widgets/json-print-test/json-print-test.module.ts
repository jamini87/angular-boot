import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonPrintTestRoutingModule } from './json-print-test-routing.module';
import { JsonPrintComponent } from './json-print/json-print.component';
import {FormsModule} from '@angular/forms';
import {NbWidgetsModule} from "../../../../../projects/angular-boot/widgets/src/lib/nb-widgets.module";

@NgModule({
  declarations: [JsonPrintComponent],
  imports: [
    CommonModule,
    JsonPrintTestRoutingModule,
    FormsModule,
    NbWidgetsModule
  ]
})
export class JsonPrintTestModule { }
