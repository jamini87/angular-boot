import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserFormComponent} from './user-form/user-form.component';
import {CanDeactivateGuard} from '../../../../../projects/angular-boot/common/src/lib/nb-common/routing';

const routes: Routes = [
  {
    path: 'user-form',
    component: UserFormComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanDeactivateTestRoutingModule { }
