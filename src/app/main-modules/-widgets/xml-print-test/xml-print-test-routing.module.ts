import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {XmlPrintComponent} from './xml-print/xml-print.component';


const routes: Routes = [
  {
    path: '',
    component: XmlPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XmlPrintTestRoutingModule { }
