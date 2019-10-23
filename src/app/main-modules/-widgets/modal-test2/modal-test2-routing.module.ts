import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModalTest2Component} from './modal-test2/modal-test2.component';
import {ModalTest2IndexComponent} from './modal-test2-index/modal-test2-index.component';
import {Test3Component} from "./test3/test3.component";

const routes: Routes = [
  {
    path: '',
    component: ModalTest2IndexComponent
  },
  {
    path: 'modal',
    component: ModalTest2Component
  },
  {
    path: 'test3',
    component: Test3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalTest2RoutingModule { }
