import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JsonPrintComponent} from "./json-print/json-print.component";

const routes: Routes = [
  {
    path: '',
    component: JsonPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonPrintTestRoutingModule { }
