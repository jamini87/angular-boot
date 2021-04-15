import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdinaryValidationRoutingModule } from './ordinary-validation-routing.module';
import { OrdinaryValidationComponent } from './-index/ordinary-validation.component';
import {FormsModule} from '@angular/forms';
import {NbValidationModule} from '../../../../../projects/angular-boot/validation/src/lib/nb-validation.module';
import { NbvRequiredTestComponent } from './nbv-required-test/nbv-required-test.component';


@NgModule({
  declarations: [OrdinaryValidationComponent, NbvRequiredTestComponent],
  imports: [
    CommonModule,
    OrdinaryValidationRoutingModule,
    FormsModule,
    NbValidationModule
  ]
})
export class OrdinaryValidationModule { }
