import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseCoreService} from '../services/base-core.service';
import {AuthService} from '../../auth/endpoint/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit, OnDestroy {

  isCollapsed = true;

  constructor(public baseCoreService: BaseCoreService,
              public authService: AuthService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  toggleSidebarPin() {

  }

  toggleSidebar() {

  }

  logOut() {

  }

  ngOnDestroy(): void {
  }

}
