/**
 * Created by Jafar Amini in March 2018.
 */
import {ServiceConfig, TokenMode} from '@angular-boot/core';

export class ServiceConfigImpl implements ServiceConfig {
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
