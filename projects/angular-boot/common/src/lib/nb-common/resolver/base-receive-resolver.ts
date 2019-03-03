import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GlobalConfigurations} from '@angular-boot/core';
import {ModelContainer} from '../feature/shared/model-container';

export abstract class BaseReceiveResolver<T>
  implements Resolve<ModelContainer<T>> {
  protected constructor(
    protected router: Router,
    protected _GlobalConfigurations: GlobalConfigurations) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ModelContainer<T>> {
    // if (itemId !== this._GlobalConfigurations.getRoutingNoArgument()) {
    //   return this.callResolveService(route.paramMap['params'], itemId);
    return this.callResolveService(route.paramMap['params'], route.queryParams);
    // } else {
    //   return this.retResolved(null);
    // }
  }

  abstract callResolveService(routParams: any, queryParams: any): any;

  retResolved(routeParams: any, queryParams: any, res: T): any {
    const modelContainer: ModelContainer<T> = new ModelContainer<T>(routeParams);
    modelContainer.routeParams = routeParams;
    modelContainer.queryParams = queryParams;
    if (res) {
      modelContainer.item = res;
      // alert('waaaw, modelContainer: ' + JSON.stringify(modelContainer));
    } else { // id not found
      modelContainer.item = null;
    }
    return modelContainer;
  }
}

