import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RestExtra} from './rest-extra';
import {ServiceUtil} from './service-util';
import {isNullOrUndefined} from 'util';
import {Observable} from 'rxjs';
import {ServiceConfig, TokenMode} from '../config';

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

  getService(restExtra?: RestExtra): Observable<any> {
    let headers: HttpHeaders;
    headers = this.resolveHeader(this._ServiceConfig, restExtra);
    return this._HttpClient.get(this._ServiceConfig.getUrl() + ServiceUtil
      .getRestOfUrlRespectTokenMode(
        this._objectName, restExtra,
        this._ServiceConfig.getTokenMode(),
        this._ServiceConfig.getToken(restExtra.keyToken)
      ) // + '?Authorization=' + this._ServiceConfig.getToken(restExtra.keyToken)
      , {
        headers: headers,
        // responseType: 'text'
        responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
      });
  }

  postService(value: any, restExtra?: RestExtra): Observable<any> {
    let headers: HttpHeaders;
    headers = this.resolveHeader(this._ServiceConfig, restExtra);

    return this._HttpClient.post(this._ServiceConfig.getUrl() + ServiceUtil
      .getRestOfUrlRespectTokenMode(
        this._objectName, restExtra,
        this._ServiceConfig.getTokenMode(),
        this._ServiceConfig.getToken(restExtra.keyToken)
      ) // + '?Authorization=' + this._ServiceConfig.getToken(restExtra.keyToken)
      , value, {
        headers: headers,
        responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
      });
  }


  putService(value: any, restExtra?: RestExtra): Observable<any> {
    // Worked VVG
    // let headers = new HttpHeaders(
    //   {'Content-Type': 'application/json',
    //            'Authorization':
    //              this._ServiceConfig.getToken(restExtra.keyToken)
    //   }
    //   );
    let headers: HttpHeaders;
    headers = this.resolveHeader(this._ServiceConfig, restExtra);

    return this._HttpClient.put(this._ServiceConfig.getUrl() + ServiceUtil
      .getRestOfUrlRespectTokenMode(
        this._objectName, restExtra,
        this._ServiceConfig.getTokenMode(),
        this._ServiceConfig.getToken(restExtra.keyToken)
      ) // + '?Authorization=' + this._ServiceConfig.getToken(restExtra.keyToken)
      , value, {
        headers: headers,
        responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
      });
  }

  deleteService(restExtra: RestExtra): Observable<any> {
    let headers: HttpHeaders;
    headers = this.resolveHeader(this._ServiceConfig, restExtra);

    return this._HttpClient.delete(this._ServiceConfig.getUrl() + ServiceUtil
      .getRestOfUrlRespectTokenMode(
        this._objectName, restExtra,
        this._ServiceConfig.getTokenMode(),
        this._ServiceConfig.getToken(restExtra.keyToken)
      ) // + '?Authorization=' + this._ServiceConfig.getToken(restExtra.keyToken)
      , {
        headers: headers,
        responseType: ServiceUtil.getResponseContentType(restExtra.responseContentType)
      });
  }

  private resolveHeader(_ServiceConfig: ServiceConfig, restExtra: RestExtra) {
    let headers = new HttpHeaders();
    headers = ServiceUtil.setRequestContentType(headers, restExtra.requestContentType);
    if (_ServiceConfig.getTokenMode() === TokenMode.HEADER
      && restExtra.needToken === true) {
      if (isNullOrUndefined(_ServiceConfig.getToken())) {
        console.warn('token is not set.', '   angular-boot says: if called service does not need token you should set needToken: false in restExtra options');
      } else {
        headers = headers.set('Authorization', _ServiceConfig.getToken());
      }
    }
    if (!isNullOrUndefined(restExtra.includes) && restExtra.includes.length > 0) {
      headers = headers.append('includes', restExtra.includes);
    } else if (!isNullOrUndefined(restExtra.excludes) && restExtra.excludes.length > 0) {
      headers = headers.append('excludes', restExtra.excludes);
    }
    if(JSON.stringify(restExtra.otherHeaders)!= '{}' &&
      !isNullOrUndefined(restExtra.otherHeaders)){
        for (let key in restExtra.otherHeaders) {
          // console.log("      key:", key, "value:", restExtra.otherHeaders[key]);
          headers = headers.append(key, restExtra.otherHeaders[key]);
        }
    }
    return headers;
  }


}

