import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {isNullOrUndefined} from 'util';
import {ResponseContentType, ServiceUtil} from '@angular-boot/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private _HttpClient: HttpClient) {
  }

  public getData(apiHost: string, extra?: { responseContentType?: ResponseContentType }): Promise<Object> {
    let myExtra = extra;
    if (isNullOrUndefined(extra)) {
      myExtra = {responseContentType: ResponseContentType.Json};
    } else if (isNullOrUndefined(extra.responseContentType)) {
      myExtra.responseContentType = ResponseContentType.Json;
    }
    return this._HttpClient.get('./assets/' + apiHost,
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


