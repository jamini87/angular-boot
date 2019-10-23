import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auto-search-input',
    loadChildren: './auto-search-input-test/auto-search-input-test.module#AutoSearchInputTestModule'
  },
  {
    path: 'modal',
    loadChildren: './modal-test/modal-test.module#ModalTestModule'
  },
  {
    path: 'modal2',
    loadChildren: './modal-test2/modal-test2.module#ModalTest2Module'
  },
  {
    path: 'test3',
    loadChildren: './modal-test2/test3/test3.component#Test3Component'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
