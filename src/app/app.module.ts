import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {AngularBootBaseModule} from './_base/angular-boot/angular-boot-base.module';
import {CanDeactivateGuard} from "../../projects/angular-boot/common/src/lib/nb-common/routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		AngularBootBaseModule,
		HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
