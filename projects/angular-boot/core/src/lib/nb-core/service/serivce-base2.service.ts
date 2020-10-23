/**
 * @author Jafar Amini in March 2018.
 */
import {ServiceBase} from './service-base.service';
import {Observable, Subject} from 'rxjs';
import {isNullOrUndefined} from '@angular-boot/util';
import {ErrorHandle} from '../error-handling/error-handle';
import {RestExtra} from './rest-extra';
import {RestRequestOptions, RestRequestStatus, Toolkit2} from '@angular-boot/util';
import {RestServiceResultPolicy, RestServiceErrorPolicy} from '@angular-boot/util';
import {ServiceUtil} from './service-util';
import {ResultHandle} from '../result-handling/result-handle';

declare const $: any;

// @Injectable()
export class ServiceBase2 extends ServiceBase {
  constructor() {
    super();
  }

  paramRegix = /\{(.*?)\}/g;

  getMatches(_prefix: string) {
    return Toolkit2.StringUtil.getMatchesByRegix(_prefix, this.paramRegix);
  }

  setParams(str, matches, prefix) {
    for (let i = 0; i < matches[0].length; i++) {
      str = str.replace(matches[0][i], prefix[matches[1][i]]);
    }
    return str;
  }

  replaceParams(suffixPath, objectSuffix) {
    return this.setParams(suffixPath, this.getMatches(suffixPath), objectSuffix);
  }

  getPrefix(servicePrefixObject: any) {
    return this.setParams(this._prefix, this.prefixMatches, servicePrefixObject);
  }

  private handleRestServiceResultPolicy(restExtra: RestExtra) {
    if (isNullOrUndefined(restExtra.restServiceResultPolicy)) {
      restExtra.restServiceResultPolicy =
        this._ServiceConfig.getRestServiceResultPolicy();
      if (isNullOrUndefined(restExtra.restServiceResultPolicy)) {
        restExtra.restServiceResultPolicy = RestServiceResultPolicy.NONE;
      }
    }
    return restExtra;
  }

  private handleRestServiceErrorPolicy(restExtra: RestExtra) {
    if (isNullOrUndefined(restExtra.restServiceErrorPolicy)) {
      restExtra.restServiceErrorPolicy =
        this._ServiceConfig.getRestServiceErrorPolicy();
      if (isNullOrUndefined(restExtra.restServiceErrorPolicy)) {
        restExtra.restServiceErrorPolicy = RestServiceErrorPolicy.DEFAULT;
      }
    }
    return restExtra;
  }

  private resolveRestExtra(restExtra?: RestExtra) {
    if (isNullOrUndefined(restExtra)) {
      restExtra = this.handleRestServiceErrorPolicy(this.handleRestServiceResultPolicy(new RestExtra({})));
    } else {
      if (JSON.stringify(restExtra.urlQueryObject) != '{}' &&
        !isNullOrUndefined(restExtra.urlQueryObject)) {
        restExtra.urlQuery = ServiceUtil.objectToQueryString2(restExtra.urlQueryObject);
      }
      restExtra = new RestExtra(this.handleRestServiceErrorPolicy(this.handleRestServiceResultPolicy(restExtra)));
    }
    if (isNullOrUndefined(restExtra.objectPrefix) || restExtra.objectPrefix === '') {
      restExtra.objectPrefix = this.getPrefix({});
    }
    return restExtra;
  }

  private handleResult(restExtra, res) {
    if (restExtra.restServiceResultPolicy === RestServiceResultPolicy.NONE) {
      return res;
    } else if (restExtra.restServiceResultPolicy === RestServiceResultPolicy.RESPONSE_CONTENT) {
      return ResultHandle.handleResponseContent(res);
      // if (res.flag) {
      //   ret.next(res.data);
      // } else if (!res.flag) {
      //   ErrorHandle.alertMessage(
      //     HandleResponse.getMessagesAsString(res.states, '<br>')
      //   );
      // }
    } else if (restExtra.restServiceResultPolicy === RestServiceResultPolicy.CUSTOM) {
      return this._ServiceConfig.applyCustomPolicyToResult(res);
    }
  }

  private handleError(restExtra, error) {
    if (restExtra.restServiceErrorPolicy === RestServiceErrorPolicy.NONE) {
      return error;
    } else if (restExtra.restServiceErrorPolicy === RestServiceErrorPolicy.DEFAULT) {
      ErrorHandle.handleDefault(error, this._ServiceConfig);
      return error;
    } else if (restExtra.restServiceErrorPolicy === RestServiceErrorPolicy.CUSTOM) {
      return this._ServiceConfig.applyCustomPolicyToError(error);
    }
  }

  private resetRestRequestStatus(options: RestRequestOptions) {
    // if (options.resetStatusOnSuccess && options.resetStatusWaitTime > 0) {
    //   setTimeout(() => {
    //     options.status = 'not-started';
    //   }, options.resetStatusWaitTime);
    // }

  }

  getService(restExtra?: RestExtra, options?: RestRequestOptions): Observable<any> {
    restExtra = this.resolveRestExtra(restExtra);
    let ret = new Subject();
    if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
      options.status = 'pending';
    }
    super.getService(restExtra).subscribe((res) => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'success';
        // this.resetRestRequestStatus(options);
      }
      ret.next(this.handleResult(restExtra, res));
      // if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
      //   ret.next(res);
      // } else if (res.flag) {
      //   ret.next(res.data);
      // } else if (!res.flag) {
      //   ErrorHandle.alertMessage(
      //     HandleResponse.getMessagesAsString(res.states, '<br>')
      //   );
      // }
    }, error => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'failure';
      }
      ret.error(this.handleError(restExtra, error));
    });
    return ret.asObservable();
  }

  // getService_f(restExtra?: RestExtra): Observable<any> {
  //   const ret = new Subject();
  //   super.getService(restExtra).subscribe((res) => {
  //     ret.next(res);
  //     // if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
  //     //   ret.next(res);
  //     // } else if (res.flag) {
  //     //   ret.next(res.data);
  //     // } else if (!res.flag) {
  //     //   ret.logicalError(res); //for future
  //     // }
  //   }, error => {
  //     ret.error(error);
  //   });
  //   return ret.asObservable();
  // }

  postService(value: any, restExtra?: RestExtra, options?: RestRequestOptions): Observable<any> {
    restExtra = this.resolveRestExtra(restExtra);
    const ret = new Subject();
    if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
      options.status = 'pending';
    }
    super.postService(value, restExtra).subscribe((res) => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'success';
        // this.resetRestRequestStatus(options);
      }
      ret.next(this.handleResult(restExtra, res));
      // console.log('response =======>', res);
      // if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
      //   ret.next(res);
      // } else if (res.flag) {
      //   ret.next(res.data);
      // } else if (!res.flag) {
      //   ErrorHandle.alertMessage(
      //     HandleResponse.getMessagesAsString(res.states, '<br>')
      //   );
      // }
    }, error => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'failure';
      }
      ret.error(this.handleError(restExtra, error));
      // ErrorHandle.handleDefault(error, this._ServiceConfig);
      // ret.error(error);
    });
    return ret.asObservable();
  }

  // postService_f(value: any, restExtra?: RestExtra): Observable<any> {
  //   const ret = new Subject();
  //   super.postService(value, restExtra).subscribe((res) => {
  //     ret.next(res);
  //   }, error => {
  //     ret.error(error);
  //   });
  //   return ret.asObservable();
  // }


  putService(value: any, restExtra?: RestExtra, options?: RestRequestOptions): Observable<any> {
    restExtra = this.resolveRestExtra(restExtra);
    const ret = new Subject();
    if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
      options.status = 'pending';
    }
    super.putService(value, restExtra).subscribe((res) => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'success';
        // this.resetRestRequestStatus(options);
      }
      ret.next(this.handleResult(restExtra, res));
      // console.log('response =======>', res);
      // if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
      //   ret.next(res);
      // } else if (res.flag) {
      //   ret.next(res.data);
      // } else if (!res.flag) {
      //   ErrorHandle.alertMessage(
      //     HandleResponse.getMessagesAsString(res.states, '<br>')
      //   );
      // }
    }, error => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'failure';
      }
      ret.error(this.handleError(restExtra, error));
      // ErrorHandle.handleDefault(error, this._ServiceConfig);
      // ret.error(error);
    });
    return ret.asObservable();
  }


  patchService(value: any, restExtra?: RestExtra, options?: RestRequestOptions): Observable<any> {
    restExtra = this.resolveRestExtra(restExtra);
    const ret = new Subject();
    if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
      options.status = 'pending';
    }
    super.patchService(value, restExtra).subscribe((res) => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'success';
        // this.resetRestRequestStatus(options);
      }
      ret.next(this.handleResult(restExtra, res));
    }, error => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'failure';
      }
      ret.error(this.handleError(restExtra, error));
    });
    return ret.asObservable();
  }


  // putService_f(value: any, restExtra?: RestExtra): Observable<any> {
  //   const ret = new Subject();
  //   super.putService(value, restExtra).subscribe((res) => {
  //     ret.next(res);
  //   }, error => {
  //     ret.error(error);
  //   });
  //   return ret.asObservable();
  // }

  deleteService(restExtra: RestExtra, options?: RestRequestOptions): Observable<any> {
    restExtra = this.resolveRestExtra(restExtra);
    const ret = new Subject();
    if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
      options.status = 'pending';
    }
    super.deleteService(restExtra).subscribe((res) => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'success';
        // this.resetRestRequestStatus(options);
      }
      ret.next(this.handleResult(restExtra, res));
      // if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
      //   ret.next(res);
      // } else if (res.flag) {
      //   ret.next(res.data);
      // } else if (!res.flag) {
      //   ErrorHandle.alertMessage(
      //     HandleResponse.getMessagesAsString(res.states, '<br>')
      //   );
      // }
    }, error => {
      if (!isNullOrUndefined(options) && !isNullOrUndefined(options.status)) {
        options.status = 'failure';
      }
      ret.error(this.handleError(restExtra, error));
      // ErrorHandle.handleDefault(error, this._ServiceConfig);
      // ret.error(error);
    });
    return ret.asObservable();
  }

  // readyDeleteService(prefix: Object, suffix: Object, suffixPath: string): any {
  //   return this.deleteService({
  //     objectPrefix: this.getPrefix(prefix),
  //     objectSuffix: this.replaceParams(suffixPath, suffix)
  //   });
  // }

  // readyPostService() {
  //
  // }

  // deleteService_f(restExtra: RestExtra): Observable<any> {
  //   const ret = new Subject();
  //   super.deleteService(restExtra).subscribe((res) => {
  //     ret.next(res);
  //   }, error => {
  //     ret.error(error);
  //   });
  //   return ret.asObservable();
  // }
}
