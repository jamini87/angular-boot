import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutoSearchInputTestComponent} from './auto-search-input-test.component';

const routes: Routes = [
  {
    path: '',
    component: AutoSearchInputTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoSearchInputTestRoutingModule { }
