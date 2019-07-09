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
  public getTranslation(lang: string): Observable<any> {
    debugger;
    // return this.http.get(`${this.prefix}${lang}${this.suffix}`);
    return this.http.get(this.url + '?locale=' + lang + '&' +
      Toolkit2.StringUtil.objectToQueryString2(this.query),
      {headers: this.reqHeaders});
    // return this.translateHttpLoaderService.get(this.query);
  }
}
