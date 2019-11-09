/**
 * @author Jafar Amini
 */
import {TranslateLoader} from '@ngx-translate/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {Toolkit2} from '@angular-boot/util';
import {map, take} from 'rxjs/operators';

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
export class JoinedCustomTranslateHttpLoader implements TranslateLoader {
  constructor(
    public http: HttpClient,
    public url: string[],
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
      this.getLocalJson(lang).subscribe((res) => {
        console.log('JOINEDDDDDDDDDDDDDDDDD', res);
      });
      return this.getLocalJson(lang);
    }
    // return this.http.get(`${this.prefix}${lang}${this.suffix}`);

  }

  public getLocalJson(lang) {
    // return this.http.get(`${this.url[1]}/${lang}.json`);
    return forkJoin(
      this.http.get(`${this.url[0]}/${lang}.json`).pipe(take(1)),
      this.http.get(`${this.url[1]}/${lang}.json`).pipe(take(1))
    ).pipe(map(([f1Json, f2Json]) => {
        return {...f1Json, ...f2Json}; // Uses object spreed
        // Object.keys(f1Json)
        // // Now we can map the keys to the actual user objects
        // // and merge them with the homework
        //   .map(userKey => {
        //     const user = users[userKey];
        //     const homework = homeworkMap[userKey];
        //     return {
        //       ...user,
        //       homework
        //     };
        //   });
      }
    ));
  }

  public getRemoteJson(lang) {
    return forkJoin(this.http.get(this.url[0] + '?lang=' + lang + '&' +
      Toolkit2.StringUtil.objectToQueryString2(this.query),
      {headers: this.reqHeaders}),
      this.http.get(this.url[1] + '?lang=' + lang + '&' +
        Toolkit2.StringUtil.objectToQueryString2(this.query),
        {headers: this.reqHeaders}));
  }
}
