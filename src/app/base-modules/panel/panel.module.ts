import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './_index/panel.component';
import {CoreModule} from '../core/core.module';
import {NgScrollbarModule} from 'ngx-scrollbar';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    CoreModule,
    NgScrollbarModule
  ]
})
export class PanelModule { }
