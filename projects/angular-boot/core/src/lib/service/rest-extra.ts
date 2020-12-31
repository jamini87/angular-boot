import {ResponseContentType} from './response-content-type';
import {RequestContentType} from './request-content-type';
import {isNullOrUndefined} from '@angular-boot/util';
import {RestRequestStatus, RestServiceErrorPolicy, RestServiceResultPolicy} from '@angular-boot/util';

// export class RestExtra {
//   use_prefix ? = true;
//   objectPrefix?: string;
//   objectSuffix?: string;
//   responseContentType?: ResponseContentType;
//   requestContentType?: RequestContentType;
//   urlQuery?: string;
//   // urlQuery: UrlQuery;
//   constructor(use_prefix, objectPrefix, objectSuffix, responseContentType,
//               requestContentType, urlQuery) {
//     this.use_prefix = use_prefix ? use_prefix : true;
//     this.objectPrefix = objectPrefix ? objectPrefix : '';
//     this.objectSuffix = objectSuffix ? objectSuffix : '';
//     this.requestContentType = requestContentType ? requestContentType : RequestContentType.JSON;
//     this.responseContentType = responseContentType ? responseContentType : ResponseContentType.Json;
//     this.urlQuery = urlQuery ? urlQuery : '';
//
//   }
// }


export class RestExtra {
  useObjectPrefix ? = true;
  useObjectSuffix ? = true;
  useObjectName ? = true;
  objectPrefix?: string;
  objectSuffix?: string;
  responseContentType?: ResponseContentType;
  requestContentType?: RequestContentType;
  urlQuery?: string;
  urlQueryObject?: any;
  includes?: string[];
  excludes?: string[];
  needToken?: boolean;
  keyToken?: any;
  otherHeaders?: any;
  restServiceResultPolicy?: RestServiceResultPolicy;
  restServiceErrorPolicy?: RestServiceErrorPolicy;
  responseAsBody?: boolean;

  // urlQuery: UrlQuery;
  constructor(
    options: {
      useObjectPrefix?: boolean,
      useObjectSuffix?: boolean;
      useObjectName?: boolean;
      objectPrefix?: string,
      objectSuffix?: string,
      responseContentType?: ResponseContentType,
      requestContentType?: RequestContentType,
      urlQuery?: string,
      urlQueryObject?: any,
      includes?: string[],
      excludes?: string[],
      needToken?: boolean,
      keyToken?: any,
      otherHeaders?: any,
      restServiceResultPolicy?: RestServiceResultPolicy,
      restServiceErrorPolicy?: RestServiceErrorPolicy,
      responseAsBody?: boolean
    }) {
    this.useObjectPrefix = options.useObjectPrefix ? options.useObjectPrefix : true;
    this.useObjectSuffix = options.useObjectSuffix ? options.useObjectSuffix : true;
    this.useObjectName = options.useObjectName ? options.useObjectName : true;
    this.objectPrefix = options.objectPrefix ? options.objectPrefix : '';
    this.objectSuffix = options.objectSuffix ? options.objectSuffix : '';
    this.requestContentType = options.requestContentType ? options.requestContentType : RequestContentType.JSON;
    this.responseContentType = options.responseContentType ? options.responseContentType : ResponseContentType.Json;
    this.urlQuery = options.urlQuery ? options.urlQuery : '';
    this.urlQueryObject = !isNullOrUndefined(options.urlQueryObject) ? options.urlQueryObject : {};
    this.includes = options.includes ? options.includes : null;
    this.excludes = options.excludes ? options.excludes : null;
    this.needToken = !isNullOrUndefined(options.needToken) ? options.needToken : true;
    this.keyToken = !isNullOrUndefined(options.keyToken) ? options.keyToken : null;
    this.otherHeaders = options.otherHeaders ? options.otherHeaders : {};
    this.restServiceResultPolicy = options.restServiceResultPolicy ?
      options.restServiceResultPolicy : null;
    this.restServiceErrorPolicy = options.restServiceErrorPolicy ?
      options.restServiceErrorPolicy : null;
    this.responseAsBody = !isNullOrUndefined(options.responseAsBody) ? options.responseAsBody : false;
  }
}


// export class RestExtraMini {
//   useObjectPrefix ? = true;
//   useObjectSuffix ? = true;
//   useObjectName ? = true;
//   responseContentType?: ResponseContentType;
//   requestContentType?: RequestContentType;
//   urlQuery?: string;
//   // urlQuery: UrlQuery;
//   constructor(use_prefix, responseContentType,
//               requestContentType, urlQuery) {
//     this.use_prefix = use_prefix ? use_prefix : true;
//     this.requestContentType = requestContentType ? requestContentType : RequestContentType.JSON;
//     this.responseContentType = responseContentType ? responseContentType : ResponseContentType.Json;
//     this.urlQuery = urlQuery ? urlQuery : '';
//
//   }
// }
