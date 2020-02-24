import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QueryParamTestListComponent} from './list/query-param-test-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: QueryParamTestListComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryParamTestRoutingModule {
}
