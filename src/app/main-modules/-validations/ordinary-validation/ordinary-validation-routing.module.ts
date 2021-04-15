import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdinaryValidationComponent} from './-index/ordinary-validation.component';
import {NbvRequiredTestComponent} from './nbv-required-test/nbv-required-test.component';


const routes: Routes = [
  {
    path: '',
    component: OrdinaryValidationComponent
  },
  {
    path: 'nbv-required',
    component: NbvRequiredTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdinaryValidationRoutingModule { }
