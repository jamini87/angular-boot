/**
 * Created by Jafar Amini in March 2018.
 */
import {CacheService, ServiceConfig, TokenMode} from '@angular-boot/core';
import {Injector} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../base-modules/auth/endpoint/auth.service";

export class ServiceConfigImpl implements ServiceConfig {
  router: Router;
  authService: AuthService;
  cacheService: CacheService;
  activatedRoute: ActivatedRoute;
  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.authService = injector.get(AuthService);
    this.cacheService = injector.get(CacheService);
    this.activatedRoute = injector.get(ActivatedRoute);
    // const url = JSON.parse(sessionStorage.getItem('GATE_WAY_URL'));
    // if (url) {
    //   this.defaultUrl = url.url;
    // } else {
    //   const dtoUrl = {
    //     index: 0,
    //     url: GATE_WAY_URL[0]
    //   };
    //   sessionStorage.setItem('GATE_WAY_URL', JSON.stringify(dtoUrl));
    //   this.defaultUrl = GATE_WAY_URL[0];
    // }
  }

  getUrl(): string {
    return 'http://localhost:8081';
  }

  setToken(res: string): void {
  }

  getToken(): string {
    return '';
  }

  getTokenMode(): TokenMode {
    return TokenMode.HEADER;
  }

  redirectToLoginPage(): any {
  }

  applyCustomPolicyToError(error: any): any {
  }

  applyCustomPolicyToResult(res: any): any {

  }

  getRestServiceErrorPolicy(): any {
  }

  getRestServiceResultPolicy(): any {
  }
}
