import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {isNullOrUndefined} from '@angular-boot/util';
import {ResponseContentType} from './response-content-type';
import {ServiceUtil} from './service-util';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private _HttpClient: HttpClient) {
  }

  public getData(url: string, extra?: { responseContentType?: ResponseContentType }): Promise<any> {
    let myExtra = extra;
    if (isNullOrUndefined(extra)) {
      myExtra = {responseContentType: ResponseContentType.Json};
    } else if (isNullOrUndefined(extra.responseContentType)) {
      myExtra.responseContentType = ResponseContentType.Json;
    }
    return this._HttpClient.get(url,
      {responseType: ServiceUtil.getResponseContentType(myExtra.responseContentType)})
      .toPromise()
      .then((response) => {
        return response;
      }).catch((err) => {
        console.log(err);
        return null;
      });
  }
}


