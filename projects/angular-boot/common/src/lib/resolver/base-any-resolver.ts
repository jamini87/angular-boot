import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export abstract class BaseAnyResolver implements Resolve<any> {
  protected constructor(protected router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.callResolveService(route);
  }

  abstract callResolveService(route: ActivatedRouteSnapshot): any;
  retResolved(res): any {
    return res;
  }
}

