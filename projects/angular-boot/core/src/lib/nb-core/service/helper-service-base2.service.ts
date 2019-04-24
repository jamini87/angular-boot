/**
 * @author Jafar Amini in March 2018.
 */
import {ServiceBase2} from './serivce-base2.service';
import {ResponseContentType} from './response-content-type';
import {isNullOrUndefined} from 'util';
import {RequestContentType} from './request-content-type';
import {RestExtra} from './rest-extra';
import {Observable} from 'rxjs';

// import {ResponseContentType} from './response-content-type';
// import {RestExtra} from './rest-extra';
//
// // @Injectable()
export class HelperServiceBase2<T> extends ServiceBase2 {
  constructor() {
    super();
  }

  helperGetService(
    suffixPath?: string,
    objectSuffix?: Object,
    prefix?: T,
    restExtra?: RestExtra): Observable<any> {
    return super.getService(
      this.getRestExtra(suffixPath, objectSuffix, prefix, restExtra)
    );
  }

  helperDeleteService(
    suffixPath?: string,
    objectSuffix?: Object,
    prefix?: T,
    restExtra?: RestExtra): Observable<any> {
    return this.deleteService(
      this.getRestExtra(suffixPath, objectSuffix, prefix, restExtra)
    );
  }

  helperPutService(
    value: any,
    suffixPath?: string,
    objectSuffix?: Object,
    prefix?: T,
    restExtra?: RestExtra): Observable<any> {
    return this.putService(value,
      this.getRestExtra(suffixPath, objectSuffix, prefix, restExtra)
    );
  }

  helperPostService(
    value: any,
    suffixPath?: string,
    objectSuffix?: Object,
    prefix?: T,
    restExtra?: RestExtra): Observable<any> {
    return this.postService(value,
      this.getRestExtra(suffixPath, objectSuffix, prefix, restExtra)
    );
  }

  private getRestExtra(suffixPath?: string, objectSuffix?: Object,
                       prefix?: T, restExtra?: RestExtra) {
    let myRestExtra: RestExtra;
    if (isNullOrUndefined(restExtra)) {
      myRestExtra = new RestExtra({});
    } else {
      myRestExtra = restExtra;
    }
    myRestExtra.objectSuffix = this.replaceParams(suffixPath, objectSuffix);
    myRestExtra.objectPrefix = this.getPrefix(prefix);
    return myRestExtra;
    // return {
    //   objectPrefix: this.getPrefix(prefix),
    //   objectSuffix: this.replaceParams(suffixPath, objectSuffix),
    //   requestContentType: isNullOrUndefined(restExtra) ? RequestContentType.JSON : restExtra.requestContentType,
    //   responseContentType: isNullOrUndefined(restExtra) ? ResponseContentType.Json : restExtra.responseContentType,
    //   urlQuery: isNullOrUndefined(restExtra) ? '' : restExtra.urlQuery,
    //   useObjectPrefix: isNullOrUndefined(restExtra) ? true : restExtra.useObjectPrefix,
    //   useObjectSuffix: isNullOrUndefined(restExtra) ? true : restExtra.useObjectSuffix,
    //   useObjectName: isNullOrUndefined(restExtra) ? true : restExtra.useObjectName
    // };
  }
}
