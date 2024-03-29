import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
    path: 'json-print',
    loadChildren: './json-print-test/json-print-test.module#JsonPrintTestModule'
  },
  {
    path: 'xml-print',
    loadChildren: './xml-print-test/xml-print-test.module#XmlPrintTestModule'
  },
  {
    path: 'test3',
    loadChildren: './modal-test2/modal-test2.module#ModalTest2Module'
  },
  {
    path: 'pagination-test',
    loadChildren: './pagination-test/pagination-test.module#PaginationTestModule'
  },
  {
    path: 'pageable-sample',
    loadChildren: './pageable-sample/pageable-sample.module#PageableSampleModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {
}
