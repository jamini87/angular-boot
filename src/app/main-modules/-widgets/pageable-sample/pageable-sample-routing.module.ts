import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageableSampleListComponent} from './components/list/pageable-sample-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageableSampleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageableSampleRoutingModule { }
