/**
 * @author Jafar Amini in March 2018.
 */
import {Toolkit2, UnFlatifyOptions} from '@angular-boot/util';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {ComponentCanDeactivate, FormCanDeactivate} from '../../routing';

export abstract class BaseAnyComponentSeven<RouteParamClazz, QueryParamClazz> extends ComponentCanDeactivate{
  Toolkit2 = Toolkit2;
  queryParamClazz: QueryParamClazz;
  routeParamClazz: RouteParamClazz;

  currentQueryParam: any;
  previousQueryParam: any;

  constructor(protected _ActivatedRoute: ActivatedRoute,
              protected _Router: Router,
              routeParamClazzType: (new () => RouteParamClazz),
              queryParamClazzType: (new () => QueryParamClazz)) {
    super();
    this.routeParamClazz = new routeParamClazzType;
    this.queryParamClazz = new queryParamClazzType;

  }

  abstract canDeactivate(): boolean;
  receiveData() {
    // this.route.params
    //   .subscribe((params: Params) => {
    //     this.id = params['id'];

    this._ActivatedRoute.params.subscribe(params => {
      this.onReceiveRouteParam(this.Toolkit2.ObjectUtil.unFlatify(params, this.routeParamClazz));
    });

    this._ActivatedRoute.queryParams.subscribe(params => {
      // this.previousQueryParam = JSON.parse(JSON.stringify(this.currentQueryParam));
      // this.currentQueryParam = params;
      this.onReceiveQueryParam(this.Toolkit2.ObjectUtil.unFlatify(params, this.queryParamClazz));
    });
    this._ActivatedRoute.data
      .subscribe((data: any) => {
        this.onReceiveRouteData(data);
      });
    // this.onReceiveQueryParam(this.Toolkit2.ObjectUtil.unFlatify(this._ActivatedRoute.snapshot.queryParams, this.queryParamClazz));


    // this._ActivatedRoute.data
    //   .subscribe((data: { modelContainer: ModelContainer<T> }) => {
    //     this.onReceivedItem(data.modelContainer.item);
    //   });
    //


    // this.onReceivedItem(data.modelContainer.item);
    // this._ActivatedRoute.data
    //   .subscribe((data: { modelContainer: ModelContainer<Object> }) => {
    //     // console.log(data);
    //     this.onReceiveRouteParam(data.modelContainer.routeParams);
    //     this.onReceiveQueryParam(data.modelContainer.queryParams);
    //   });
  }

  setToQueryParams(obj: any, options: { skipLocationChange?: boolean, replaceUrl?: boolean } = {}) {
    obj = this.Toolkit2.ObjectUtil.FlatiFy(new Object(), obj);
    this._Router.navigate([], {
      relativeTo: this._ActivatedRoute,
      queryParams: {
        ...this._ActivatedRoute.snapshot.queryParams,
        ...obj
      },
      skipLocationChange: options.skipLocationChange,
      replaceUrl: options.replaceUrl
    });
  }

  // abstract onReceivedItem(item: T);

  abstract onReceiveRouteParam(routeParam: RouteParamClazz);

  abstract onReceiveQueryParam(queryParam: QueryParamClazz);

  abstract onReceiveRouteData(routeData: any);

  getQueryParams(): any {
    return this._ActivatedRoute.snapshot.queryParams;
  }

  getUnFlatQueryParams(clazz, options?: UnFlatifyOptions): QueryParamClazz {
    return this.getUnFlatQueryParams2(clazz, null, options);
  }

  getUnFlatQueryParams2(clazz, sample, options?: UnFlatifyOptions) {
    const convertCamelToLowerHyphen1 = this.getConvertCamelToLowerHyphen(options);
    return this.Toolkit2.ObjectUtil.unFlatify2(
      this._ActivatedRoute.snapshot.queryParams, clazz, sample,
      {convertCamelToLowerHyphen: convertCamelToLowerHyphen1}
    );
  }


  getRouteParams(): any {
    return this._ActivatedRoute.snapshot.paramMap['params'];
  }

  getUnFlatRouteParams(clazz, options?: UnFlatifyOptions): RouteParamClazz {
    return this.getUnFlatRouteParams2(clazz, null, options);
  }

  getUnFlatRouteParams2(clazz, sample, options?: UnFlatifyOptions) {
    const convertCamelToLHyphen = this.getConvertCamelToLowerHyphen(options);
    return this.Toolkit2.ObjectUtil.unFlatify2(
      this._ActivatedRoute.snapshot.paramMap['params'], clazz, sample,
      {convertCamelToLowerHyphen: convertCamelToLHyphen}
    );
  }


  private getConvertCamelToLowerHyphen(options) {
    let convertCamelToLowerHyphen = true;
    if (
      !isNullOrUndefined(options) &&
      !isNullOrUndefined(options.convertCamelToLowerHyphen)
    ) {
      convertCamelToLowerHyphen = options.convertCamelToLowerHyphen;
    } else {
      convertCamelToLowerHyphen = true;
    }
    return convertCamelToLowerHyphen;
  }
}
