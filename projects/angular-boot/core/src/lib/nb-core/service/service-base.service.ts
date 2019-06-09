import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RestExtra} from './rest-extra';
import {ServiceUtil} from './service-util';
import {isNullOrUndefined} from 'util';
import {Observable} from 'rxjs';
import {ServiceConfig, TokenMode} from '../config';
import {map} from "rxjs/operators";

export class ServiceBase {
  public _url: string;
  public _prefix: string;
  public _objectName: string;
  public _HttpClient: HttpClient;
  public _ServiceConfig: ServiceConfig;
  public prefixMatches: string [][] = new Array();

  constructor() {
    // this._url = this._ServiceConfig.getUrl();
    // this._url = this._ServiceConfig.getUrl(); // Config.getUrl();
    this._prefix = '';
  }

  private addResponseAsBody(options) {
    options['observe'] = 'response' as 'body';
  }

  getService(restExtra?: RestExtra): Observable<any> {
    let headers1: HttpHeaders;
    let token = this._ServiceConfig.getToken(restExtra.keyToken);
    headers1 = this.resolveHeader(this._ServiceConfig, restExtra, token);
    let options = {
      headers: headers1,
      responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
    };
    if (restExtra.responseAsBody === true) {
      this.addResponseAsBody(options);
    }
    return this._HttpClient
      .get(this._ServiceConfig.getUrl() +
        ServiceUtil.getRestOfUrlRespectTokenMode(
          this._objectName, restExtra,
          this._ServiceConfig.getTokenMode(), token),
        options)
      .pipe(map(res => res));
  }

  postService(value: any, restExtra?: RestExtra): Observable<any> {
    let headers1: HttpHeaders;
    let token = this._ServiceConfig.getToken(restExtra.keyToken);
    headers1 = this.resolveHeader(this._ServiceConfig, restExtra, token);
    let options = {
      headers: headers1,
      responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
    };
    if (restExtra.responseAsBody === true) {
      this.addResponseAsBody(options);
    }
    return this._HttpClient.post(this._ServiceConfig.getUrl() + ServiceUtil
      .getRestOfUrlRespectTokenMode(
        this._objectName, restExtra,
        this._ServiceConfig.getTokenMode(),
        token
      ) // + '?Authorization=' + this._ServiceConfig.getToken(restExtra.keyToken)
      , value,
      options).pipe(map(res => res));
  }


  putService(value: any, restExtra?: RestExtra): Observable<any> {
    // Worked VVG
    // let headers = new HttpHeaders(
    //   {'Content-Type': 'application/json',
    //            'Authorization':
    //              this._ServiceConfig.getToken(restExtra.keyToken)
    //   }
    //   );
    let headers1: HttpHeaders;
    let token = this._ServiceConfig.getToken(restExtra.keyToken);
    headers1 = this.resolveHeader(this._ServiceConfig, restExtra, token);

    let options = {
      headers: headers1,
      responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
    };
    if (restExtra.responseAsBody === true) {
      this.addResponseAsBody(options);
    }

    return this._HttpClient.put(this._ServiceConfig.getUrl() + ServiceUtil
      .getRestOfUrlRespectTokenMode(
        this._objectName, restExtra,
        this._ServiceConfig.getTokenMode(),
        token
      ) // + '?Authorization=' + this._ServiceConfig.getToken(restExtra.keyToken)
      , value, options).pipe(map(res => res));
  }

  patchService(value: any, restExtra?: RestExtra): Observable<any> {
    let headers1: HttpHeaders;
    let token = this._ServiceConfig.getToken(restExtra.keyToken);
    headers1 = this.resolveHeader(this._ServiceConfig, restExtra, token);

    let options = {
      headers: headers1,
      responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
    };
    if (restExtra.responseAsBody === true) {
      this.addResponseAsBody(options);
    }
    return this._HttpClient.patch(this._ServiceConfig.getUrl() + ServiceUtil
      .getRestOfUrlRespectTokenMode(
        this._objectName, restExtra,
        this._ServiceConfig.getTokenMode(),
        token
      ) // + '?Authorization=' + this._ServiceConfig.getToken(restExtra.keyToken)
      , value, options).pipe(map(res => res));
  }

  deleteService(restExtra: RestExtra): Observable<any> {
    let headers1: HttpHeaders;
    let token = this._ServiceConfig.getToken(restExtra.keyToken);
    headers1 = this.resolveHeader(this._ServiceConfig, restExtra, token);
    let options = {
      headers: headers1,
      responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
    };
    if (restExtra.responseAsBody === true) {
      this.addResponseAsBody(options);
    }
    return this._HttpClient.delete(this._ServiceConfig.getUrl() + ServiceUtil
      .getRestOfUrlRespectTokenMode(
        this._objectName, restExtra,
        this._ServiceConfig.getTokenMode(),
        token
      ) // + '?Authorization=' + this._ServiceConfig.getToken(restExtra.keyToken)
      , options).pipe(map(res => res));
  }

  private resolveHeader(_ServiceConfig: ServiceConfig, restExtra: RestExtra, token: string) {
    let headers = new HttpHeaders();
    headers = ServiceUtil.setRequestContentType(headers, restExtra.requestContentType);
    if (_ServiceConfig.getTokenMode() === TokenMode.HEADER
      && restExtra.needToken === true) {
      if (isNullOrUndefined(token)) {
        console.warn('token is not set.', '   angular-boot says: if called service does not need token you should set needToken: false in restExtra options');
      } else {
        headers = headers.set('Authorization', token);
      }
    }
    if (!isNullOrUndefined(restExtra.includes) && restExtra.includes.length > 0) {
      headers = headers.append('includes', restExtra.includes);
    } else if (!isNullOrUndefined(restExtra.excludes) && restExtra.excludes.length > 0) {
      headers = headers.append('excludes', restExtra.excludes);
    }
    if (JSON.stringify(restExtra.otherHeaders) != '{}' &&
      !isNullOrUndefined(restExtra.otherHeaders)) {
      for (let key in restExtra.otherHeaders) {
        // console.log("      key:", key, "value:", restExtra.otherHeaders[key]);
        headers = headers.append(key, restExtra.otherHeaders[key]);
      }
    }
    return headers;
  }


}

