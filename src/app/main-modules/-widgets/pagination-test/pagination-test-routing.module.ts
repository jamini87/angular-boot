import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaginationTestComponent} from './pagination-test.component';

const routes: Routes = [
  {
    path: '',
    component: PaginationTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginationTestRoutingModule { }
