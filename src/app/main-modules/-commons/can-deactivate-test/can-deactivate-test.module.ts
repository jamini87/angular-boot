import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanDeactivateTestRoutingModule } from './can-deactivate-test-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    CanDeactivateTestRoutingModule,
    FormsModule
  ]
})
export class CanDeactivateTestModule { }
