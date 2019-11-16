/**
 * @author Jafar Amini in March 2018.
 */
import {ServiceBase2} from './serivce-base2.service';
import {ResponseContentType} from './response-content-type';

// import {ResponseContentType} from './response-content-type';
// import {RestExtra} from './rest-extra';
//
// // @Injectable()
export class ExtendedServiceBase2<T> extends ServiceBase2 {
  constructor() {
    super();
  }

  g_getOne(objectSuffix: string, responseContentType?: ResponseContentType): any {
    return this.getService(
      {objectSuffix: objectSuffix, responseContentType: responseContentType});
  }

  // g_getOne_f(objectSuffix: string, responseContentType?: ResponseContentType): any {
  //   return this.getService_f(
  //     {objectSuffix: objectSuffix, responseContentType: responseContentType});
  // }

  g_createOne(item: T, objectSuffix?: string, responseContentType?: ResponseContentType): any {
    return this.postService(item,
      {objectSuffix: objectSuffix, responseContentType: responseContentType});
  }

  // g_createOne_f(item: T, objectSuffix?: string, responseContentType?: ResponseContentType): any {
  //   return this.postService(item,
  //     {objectSuffix: objectSuffix, responseContentType: responseContentType});
  // }

  g_getList(objectSuffix?: string, responseContentType?: ResponseContentType): any {
    return this.getService(
      {objectSuffix: objectSuffix, responseContentType: responseContentType});
  }

  // g_getList_f(objectSuffix?: string, responseContentType?: ResponseContentType): any {
  //   return this.getService_f(
  //     {objectSuffix: objectSuffix, responseContentType: responseContentType});
  // }

  g_deleteOne(objectSuffix: string, responseContentType?: ResponseContentType): any {
    return this.deleteService(
      {objectSuffix: objectSuffix, responseContentType: responseContentType});
  }

  // g_deleteOne_f(objectSuffix: string, responseContentType?: ResponseContentType): any {
  //   return this.deleteService_f(
  //     {objectSuffix: objectSuffix, responseContentType: responseContentType});
  // }

  g_updateOne(item: T, objectSuffix?: string, responseContentType?: ResponseContentType): any {
    return this.putService(item,
      {objectSuffix: objectSuffix, responseContentType: responseContentType});
  }

  // g_updateOne_f(item: T, objectSuffix?: string, responseContentType?: ResponseContentType): any {
  //   return this.putService_f(item,
  //     {objectSuffix: objectSuffix, responseContentType: responseContentType});
  // }

  g_getListByParentId(objectSuffix?: string, responseContentType?: ResponseContentType): any {
    return this.getService(
      {objectSuffix: 'parentId/' + objectSuffix, responseContentType: responseContentType});
  }
  //
  // g_getListByParentId_f(objectSuffix?: string, responseContentType?: ResponseContentType): any {
  //   return this.getService(
  //     {objectSuffix: 'parentId/' + objectSuffix, responseContentType: responseContentType});
  // }

  signIn(item: T, objectSuffix?: string, responseContentType?: ResponseContentType): any {
    return this.postService(item,
      {objectSuffix: objectSuffix, responseContentType: responseContentType});
  }
}




//
//   getListByParentId(parentId: string, urlExtra?: UrlExtra, responseContentType?: ResponseContentType) {
//     if (urlExtra) {
//       if (responseContentType) {
//         return this.getService('parentId/' + parentId + '/' + urlExtra.path, responseContentType);
//       } else {
//         return this.getService('parentId/' + parentId + '/' + urlExtra.path);
//       }
//     } else {
//       if (responseContentType) {
//         return this.getService('parentId/' + parentId, responseContentType);
//       } else {
//         return this.getService('parentId/' + parentId);
//       }
//     }
//
//   }
//
//   getListByParentId_f(parentId: string, urlExtra?: UrlExtra, responseContentType?: ResponseContentType) {
//     if (urlExtra) {
//       if (responseContentType) {
//         return this.getService_f(parentId + '/' + urlExtra.path);
//       } else {
//         return this.getService_f(parentId + '/' + urlExtra.path);
//       }
//     } else {
//       if (responseContentType) {
//         return this.getService_f(parentId);
//       } else {
//         return this.getService_f(parentId);
//       }
//     }
//
//   }
//


//   signIn(item: T, urlExtra?: UrlExtra) {
//     return this.postService( urlExtra.path, item);
//   }
//





//
//   createOne_f(item: T, urlExtra?: UrlExtra) {
//     if (urlExtra) {
//       return this.postService_f(urlExtra.path, item);
//     } else {
//       return this.postService_f('', item);
//     }
//   }


//   getList_f(urlExtra?: UrlExtra, responseContentType?: ResponseContentType) {
//     if (urlExtra) {
//       if (responseContentType) {
//         return this.getService_f(urlExtra);
//       } else {
//         return this.getService_f(urlExtra);
//       }
//     } else {
//       if (responseContentType) {
//         return this.getService_f('');
//       } else {
//         return this.getService_f('');
//       }
//     }
//
//   }


//   deleteOne(itemId, urlExtra?: UrlExtra) {
//     if (urlExtra) {
//       return this.deleteService(itemId + '/' + urlExtra.path);
//     } else {
//       return this.deleteService(itemId);
//     }
//   }
//
//   deleteOne_f(itemId, urlExtra?: UrlExtra) {
//     if (urlExtra) {
//     return this.deleteService_f(itemId + '/' + urlExtra.path);
//     } else {
//       return this.deleteService_f(itemId);
//     }
//   }


// deleteOne_f(itemId, urlExtra?: UrlExtra) {
//   if (urlExtra) {
//     return this.deleteService_f(itemId + '/' + urlExtra.path);
//   } else {
//     return this.deleteService_f(itemId);
//   }
// }




//   getOne(itemId, urlExtra?: UrlExtra, responseContentType?: ResponseContentType): any {
//     if (urlExtra) {
//       if (responseContentType) {
//         return this.getService(itemId + '/' + urlExtra.path, responseContentType);
//       } else {
//         return this.getService(itemId + '/' + urlExtra.path);
//       }
//     } else {
//       if (responseContentType) {
//         return this.getService(itemId, responseContentType);
//       } else {
//         return this.getService(itemId);
//       }
//     }
//
//   }
//
//   getOne_f(itemId, urlExtra?: UrlExtra, responseContentType?: ResponseContentType): any {
//     if (urlExtra) {
//       if (responseContentType) {
//         return this.getService_f(itemId + '/' + urlExtra.path);
//       } else {
//         return this.getService_f(itemId + '/' + urlExtra.path);
//       }
//     } else {
//       if (responseContentType) {
//         return this.getService_f(itemId);
//       } else {
//         return this.getService_f(itemId);
//       }
//     }
//   }
//

//
//   updateOne(item: T, urlExtra?: UrlExtra, itemId?: string) {
//     if (urlExtra) {
//       if (itemId) {
//         return this.putService(itemId + '/' + urlExtra.path, item);
//       } else {
//         return this.putService( urlExtra.path, item);
//       }
//     } else {
//       if (itemId) {
//         return this.putService(itemId, item);
//       } else {
//         return this.putService('', item);
//       }
//     }
//
//   }
//
//   updateOne_f(item: T, urlExtra?: UrlExtra, itemId?: string) {
//     if (urlExtra) {
//       if (itemId) {
//         return this.putService_f(itemId + '/' + urlExtra.path, item);
//       } else {
//         return this.putService_f( urlExtra.path, item);
//       }
//     } else {
//       if (itemId) {
//         return this.putService_f(itemId, item);
//       } else {
//         return this.putService_f('', item);
//       }
//     }
//   }
//
