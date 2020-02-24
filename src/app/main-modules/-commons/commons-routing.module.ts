import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QueryParamTestModule} from './query-param-test/query-param-test.module';

const routes: Routes = [
  {
    path: 'can-deactivate-test',
    loadChildren: './can-deactivate-test/can-deactivate-test.module#CanDeactivateTestModule'
  },
  {
    path: 'query-param-test',
    loadChildren: './query-param-test/query-param-test.module#QueryParamTestModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QueryParamTestModule]
})
export class CommonsRoutingModule { }
