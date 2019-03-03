import {NgModule} from '@angular/core';
import {WidgetsComponent} from './widgets.component';
import {XmlPrintComponent} from './nb-widgets/xml-print/xml-print.component';
import {JsonPrintComponent} from './nb-widgets/json-print/json-print.component';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './nb-widgets/carousel/carousel.component';
import {ModalComponent} from './nb-widgets/modal/modal.component';
import {SwitchComponent} from './nb-widgets/switch/switch.component';
import {FormsModule} from '@angular/forms';
import { AutoSearchInputComponent } from './nb-widgets/auto-search-input/auto-search-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    WidgetsComponent,
    JsonPrintComponent,
    XmlPrintComponent,
    CarouselComponent,
    ModalComponent,
    SwitchComponent,
    AutoSearchInputComponent],
  exports: [
    WidgetsComponent,
    JsonPrintComponent,
    XmlPrintComponent,
    CarouselComponent,
    ModalComponent,
    SwitchComponent,
    AutoSearchInputComponent
  ]
})
export class NbWidgetsModule {
}
