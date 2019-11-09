import {TranslateLoader} from '@ngx-translate/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Toolkit2} from '@angular-boot/util';

/**
 // Usage in module
 export function HttpLoaderFactory(http: HttpClient) {
  let reqHeaders = new HttpHeaders();
  reqHeaders = reqHeaders.set('Authorization',
    localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token'));
  return new CustomTranslateHttpLoader(http, 'http://localhost:8081/salam', {key: 'a'}, reqHeaders);
}
 @NgModule({
 ... ,
 imports: [
 ... ,
 TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
 ...
 ],
 ...
 })
 */
export class CustomTranslateHttpLoader implements TranslateLoader {
  constructor(
    public http: HttpClient,
    public url: string,
    public query: { key: string },
    public reqHeaders: HttpHeaders) {
  }

  /**
   * Gets the translations from the server
   */
  public getTranslation(lang: string, remote: boolean = false): Observable<any> {
    if (remote === true) {
      return this.getRemoteJson(lang);
    } else {
      return this.getLocalJson(lang);
    }
  }

  public getLocalJson(lang) {
    return this.http.get(`${this.url}/${lang}.json`);
  }

  public getRemoteJson(lang) {
    return this.http.get(this.url + '?locale=' + lang + '&' +
      Toolkit2.StringUtil.objectToQueryString2(this.query),
      {headers: this.reqHeaders});
  }
}
