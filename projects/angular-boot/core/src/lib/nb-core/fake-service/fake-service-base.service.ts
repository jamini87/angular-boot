/**
 * @author Jafar Amini in March 2018.
 */
// import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {LocalStorage} from '../../../app/configuration/LocalStorage';

// @Injectable()
export class FakeServiceBase {
    public url: string;
    public _prefix: string;
    public _objectName: string;
    public _HttpClient: HttpClient;
    constructor() {
        this._prefix = '';
    }

    getService(_objectsuffix: string): any {
      let headers = new HttpHeaders();
      // headers =  headers.set('Authorization', LocalStorage.getEncodedBasicAuth());
      return this._HttpClient.get(this.url + this._prefix + this._objectName + '/'
          + _objectsuffix, {headers: headers});
    }

    postService(value: any, _objectsuffix: string): any {
      // console.log('finalUrl: ',this.url + this._prefix + this._objectName + '/' + _objectsuffix);
        let headers = new HttpHeaders();
      headers = headers
        .set('Content-Type', 'application/json')
        // .set('Authorization', LocalStorage.getEncodedBasicAuth())
      ;
        return this._HttpClient.post(this.url + this._prefix + this._objectName + '/' +
            _objectsuffix, value, {headers: headers});
    }


    putService(value: any, _objectsuffix: string): any {
        const headers = new HttpHeaders(
          {'Content-Type': 'application/json'
            // , 'Authorization': LocalStorage.getEncodedBasicAuth()
          }
          );
        return this._HttpClient.put(this.url + this._prefix + this._objectName + '/' +
      _objectsuffix
          // + '?Authorization=' + Config.getLocalStorageToken()
          , JSON.stringify(value), {headers: headers});
    }

    deleteService(id: string): any {
      let headers = new HttpHeaders();
      // headers = headers.set('Authorization', LocalStorage.getEncodedBasicAuth());
        return this._HttpClient.delete(this.url + this._prefix + this._objectName + '/' + (id)
        , {headers: headers});
    }


}

