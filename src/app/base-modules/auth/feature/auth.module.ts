import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth/auth.component';
import {AuthService} from '../endpoint/auth.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
