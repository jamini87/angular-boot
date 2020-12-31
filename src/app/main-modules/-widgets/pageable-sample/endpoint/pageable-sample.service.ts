import { Injectable } from '@angular/core';
import {ServiceBase2} from '../../../../../../projects/angular-boot/core/src/lib/service';
import {HttpClient} from '@angular/common/http';
import {ServiceConfig} from '../../../../../../projects/angular-boot/core/src/lib/config';
import {Paging, SearchCommonQuery} from '../../../../../../projects/angular-boot/util/src/lib/nb-helper/helper/query';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageableSampleService extends ServiceBase2{

  constructor(public _HttpClient: HttpClient, public _ServiceConfig: ServiceConfig
  ) {
    super();
    this._prefix = '';
    this._objectName = 'person';
    this.prefixMatches = this.getMatches('');
  }

  search(query: SearchCommonQuery): Observable<any> {
    return super.getService({
      objectSuffix: `search`,
      urlQueryObject: query
    });
  }
}
