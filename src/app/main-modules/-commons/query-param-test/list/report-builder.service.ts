import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceBase2} from '../../../../../../projects/angular-boot/core/src/lib/service';
import {SearchCommonQuery} from '../../../../../../projects/angular-boot/util/src/lib/nb-helper/helper/query';
import {ServiceConfig} from '../../../../../../projects/angular-boot/core/src/lib/config';


@Injectable({
  providedIn: 'root'
})
export class ReportBuilderService extends ServiceBase2{

  constructor(public _HttpClient: HttpClient, public _ServiceConfig: ServiceConfig) {
    super();
    this._prefix = '/api';
    this._objectName = 'report-builder';
    this.prefixMatches = this.getMatches(this._prefix);
  }
  search(query: SearchCommonQuery) {
    return super.getService({
      objectSuffix: `search`,
      urlQueryObject: query
    });
  }

  queryPublishedForm(query: SearchCommonQuery) {
    return this.getService({
      objectSuffix: `list-published-form`,
      urlQueryObject: query
    });
  }

}
