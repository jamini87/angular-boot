import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {VerticalMenuComponent} from './vertical-menu/vertical-menu.component';
import { Header2Component } from './header2/header2.component';
import { NavIconComponent } from './nav-icon/nav-icon.component';
import {AuthService} from '../auth/endpoint/auth.service';
import {NgScrollbarModule} from 'ngx-scrollbar';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, VerticalMenuComponent, Header2Component, NavIconComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgScrollbarModule
  ],
  exports: [HeaderComponent, Header2Component, FooterComponent, SidebarComponent, VerticalMenuComponent],
  providers: [AuthService]
})
export class CoreModule {
}
