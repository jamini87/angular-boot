import { NgModule } from '@angular/core';
import { WidgetsComponent } from './widgets.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {JsonPrintComponent} from './nb-widgets/json-print/json-print.component';
import {XmlPrintComponent} from './nb-widgets/xml-print/xml-print.component';
import {CarouselComponent} from './nb-widgets/carousel/carousel.component';
import {ModalComponent} from './nb-widgets/modal/modal.component';
import {SwitchComponent} from './nb-widgets/switch/switch.component';
import {AutoSearchInputComponent} from './nb-widgets/auto-search-input/auto-search-input.component';



@NgModule({
  declarations: [
    WidgetsComponent,
    JsonPrintComponent,
    XmlPrintComponent,
    CarouselComponent,
    ModalComponent,
    SwitchComponent,
    AutoSearchInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WidgetsComponent,
    JsonPrintComponent,
    XmlPrintComponent,
    CarouselComponent,
    ModalComponent,
    SwitchComponent,
    AutoSearchInputComponent]
})
export class NbWidgetsModule { }
