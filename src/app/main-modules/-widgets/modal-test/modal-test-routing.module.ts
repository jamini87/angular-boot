import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModalTestComponent} from './modal-test.component';

const routes: Routes = [
  {
    path: '',
    component: ModalTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalTestRoutingModule { }
