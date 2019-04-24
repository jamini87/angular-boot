import {RestExtra} from './rest-extra';
import {isNullOrUndefined} from 'util';
import {RequestContentType} from './request-content-type';
import {ResponseContentType} from './response-content-type';
import {HttpHeaders} from '@angular/common/http';
import {TokenMode} from '../config';
import {PairKeyValue} from '@angular-boot/util';

export class ServiceUtil {
  public static getName(objectName: string, use?: boolean): string {
    if (isNullOrUndefined(use) || use !== false) {
      return (!isNullOrUndefined(objectName) && objectName !== '' ? '/' + objectName : '');
    } else {
      return '';
    }
  }

  public static getRestOfUrlRespectTokenMode(objectName: string,
                                             restExtra: RestExtra,
                                             tokenMode: TokenMode,
                                             token: string): string {
    if (isNullOrUndefined(token) && restExtra.needToken === true) {
      console.warn('token is not set.', '   angular-boot says: if called service does not need token you should set needToken: false in restExtra options');
    }

    if (tokenMode === TokenMode.HEADER || restExtra.needToken === false) {
      if (restExtra.urlQuery.length > 0) {
        return this.getName(restExtra.objectPrefix)
          + this.getName(objectName)
          + this.getName(restExtra.objectSuffix)
          + '?'
          + restExtra.urlQuery;
      } else {
        return this.getName(restExtra.objectPrefix)
          + this.getName(objectName)
          + this.getName(restExtra.objectSuffix);
      }

    } else if (tokenMode === TokenMode.URL) {
      return this.getName(restExtra.objectPrefix)
        + this.getName(objectName)
        + this.getName(restExtra.objectSuffix)
        + '?'
        + [restExtra.urlQuery, 'Authorization=' + token]
          .filter(item => (item !== '')).join('&');
    }
  }

  public static getRestOfUrl(objectName: string, restExtra: RestExtra): string {
    return this.getName(restExtra.objectPrefix)
      + this.getName(objectName)
      + this.getName(restExtra.objectSuffix)
      + '?'
      + restExtra.urlQuery;
  }

  public static getRestOfUrlWithAuthorization(objectName: string,
                                              restExtra: RestExtra,
                                              authorization: string): string {
    return this.getName(restExtra.objectPrefix)
      + this.getName(objectName)
      + this.getName(restExtra.objectSuffix)
      + '?'
      + [restExtra.urlQuery, 'Authorization=' + authorization].join('&');
  }

  public static setRequestContentType(headers: HttpHeaders, requestContentType: RequestContentType) {
    switch (requestContentType) {
      case RequestContentType.NONE:
        return headers;
      case RequestContentType.JSON:
        return headers.append('Content-Type', 'application/json');
      case RequestContentType.FORM:
        return headers;
      case RequestContentType.FORM_DATA:
        // headers.delete('Content-Type');
        return headers;
      case RequestContentType.TEXT:
        return headers.append('Content-Type', 'text/xml');
      case RequestContentType.BLOB:
        return headers;
      case RequestContentType.ARRAY_BUFFER:
        return headers;
      default:
        return headers.append('Content-Type', 'application/json');
    }
  }

  public static getResponseContentType(responseContentType: ResponseContentType): any // : 'json'| 'blob' | 'text' | 'arraybuffer'
  {
    switch (responseContentType) {
      case ResponseContentType.Json:
        return 'json';
      case ResponseContentType.Blob:
        return 'blob';
      case ResponseContentType.Text:
        return 'text';
      case ResponseContentType.ArrayBuffer:
        return 'arraybuffer';
      default:
        return 'json';
    }
  }


  // یک آبجکت ساده (فاقد تودرتویی) و یا یک آبجکت مرکب
  // (دارای تودرتویی) را می‌گیرد و رشته-کوئری مربوطه را برمی‌گرداند.
  public static objectToQueryString2(object: Object): string {
    let finalResult: string[] = [];
    this.object2QueryString(finalResult, object);
    return finalResult.filter(item => (item !== '')).join('&');
  }

  public static object2QueryString(finalResult: string[], object: Object): string {
    if (isNullOrUndefined(object))
      return '';
    // let props: Pair1[];
    let props: Array<PairKeyValue> = new Array();
    Object.keys(object).forEach(key => {
        if (!isNullOrUndefined(object[key]) && object[key].toString().length > 0) {
          // alert('key:.... ' + key + '   object[key] = ' + object[key]);
          if (!isNullOrUndefined(object[key])) {
            if (object[key].toString() === '[object Object]') {
              // alert('Wawwwww');
              this.object2QueryString(finalResult, object[key]);
            } else {
              props.push(new PairKeyValue(key, object[key]));
            }
          }
        }
        // console.log(key);
      }
    );
    const result = [];
    for (let i = 0; i < props.length; i++) {
      // console.log(i + ' ---> ', props[i]);
      result.push([props[i].key, props[i].value]);
    }
    let r = result.map(param => param.join('=')).join('&');
    finalResult.push(r);
    return r;
  }

}
