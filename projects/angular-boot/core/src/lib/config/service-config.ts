/**
 * @author Jafar Amini in March 2018.
 */
import {TokenMode} from './token-mode';
import {Injector} from '@angular/core';

// export abstract class ServiceConfig {
//    abstract getUrl(): string;
//    abstract getToken(): string;
// }

export abstract class ServiceConfig {
  abstract getUrl(): string;

  abstract setToken(token: string): void;

  abstract getToken(keyToken?: any): string;

  abstract getTokenMode(): TokenMode;

  abstract redirectToLoginPage();

  abstract getRestServiceResultPolicy();

  abstract getRestServiceErrorPolicy();

  abstract applyCustomPolicyToResult(res: any);

  abstract applyCustomPolicyToError(error: any);
}
