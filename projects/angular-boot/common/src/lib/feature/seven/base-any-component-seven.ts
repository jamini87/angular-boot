/**
 * @author Jafar Amini in March 2018.
 */
import {isUndefined, Toolkit2, UnFlatifyOptions} from '@angular-boot/util';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined} from '@angular-boot/util';
import {ComponentCanDeactivate, FormCanDeactivate} from '../../routing';

export abstract class BaseAnyComponentSeven<RouteParamClazz, QueryParamClazz> extends ComponentCanDeactivate {
  Toolkit2 = Toolkit2;
  queryParamClazz: QueryParamClazz;
  routeParamClazz: RouteParamClazz;

  currentQueryParam: any;
  previousQueryParam: any;
  routeParamClazzType;
  queryParamClazzType;
  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              routeParamClazzType: (new () => RouteParamClazz),
              queryParamClazzType: (new () => QueryParamClazz)) {
    super();
    this.routeParamClazzType = routeParamClazzType;
    this.queryParamClazzType = queryParamClazzType;
    this.routeParamClazz = new routeParamClazzType;
    this.queryParamClazz = new queryParamClazzType;

  }

  abstract canDeactivate(): boolean;

  receiveData() {
    // this.route.params
    //   .subscribe((params: Params) => {
    //     this.id = params['id'];

    this.activatedRoute.params.subscribe(params => {
      this.routeParamClazz = new this.routeParamClazzType;
      this.onReceiveRouteParam(this.Toolkit2.ObjectUtil.unFlatify(params, this.routeParamClazz));
    });

    this.activatedRoute.queryParams.subscribe(params => {
      // this.previousQueryParam = JSON.parse(JSON.stringify(this.currentQueryParam));
      // this.currentQueryParam = params;
      this.queryParamClazz = new this.queryParamClazzType;
      this.onReceiveQueryParam(this.Toolkit2.ObjectUtil.unFlatify(params, this.queryParamClazz));
    });
    this.activatedRoute.data
      .subscribe((data: any) => {
        this.onReceiveRouteData(data);
      });
    // this.onReceiveQueryParam(this.Toolkit2.ObjectUtil.unFlatify(this.activatedRoute.snapshot.queryParams, this.queryParamClazz));


    // this.activatedRoute.data
    //   .subscribe((data: { modelContainer: ModelContainer<T> }) => {
    //     this.onReceivedItem(data.modelContainer.item);
    //   });
    //


    // this.onReceivedItem(data.modelContainer.item);
    // this.activatedRoute.data
    //   .subscribe((data: { modelContainer: ModelContainer<Object> }) => {
    //     // console.log(data);
    //     this.onReceiveRouteParam(data.modelContainer.routeParams);
    //     this.onReceiveQueryParam(data.modelContainer.queryParams);
    //   });
  }

  setToQueryParams(obj: any, options: { skipLocationChange?: boolean, replaceUrl?: boolean, removeIfEmpty?: boolean } = {}) {
    if (isNullOrUndefined(options.removeIfEmpty)) {
      options.removeIfEmpty = true;
    }
    obj = this.Toolkit2.ObjectUtil.FlatiFy(new Object(), obj, options.removeIfEmpty);
    // obj = this.overlayValues(obj, this.activatedRoute.snapshot.queryParams);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      /**
       * by commented lines clear param problem occur: if in previous query term is "anything" and in new one is null,
       * preivous content remains and can't clean
       */
      // queryParams: {
      //   ...this.activatedRoute.snapshot.queryParams,
      //   ...obj
      // },
      queryParams: {...obj},
      skipLocationChange: options.skipLocationChange,
      replaceUrl: options.replaceUrl,
      queryParamsHandling: 'merge'
    });
  }

  // abstract onReceivedItem(item: T);

  abstract onReceiveRouteParam(routeParam: RouteParamClazz);

  abstract onReceiveQueryParam(queryParam: QueryParamClazz);

  abstract onReceiveRouteData(routeData: any);

  getQueryParams(): any {
    return this.activatedRoute.snapshot.queryParams;
  }

  getUnFlatQueryParams(clazz, options?: UnFlatifyOptions): QueryParamClazz {
    return this.getUnFlatQueryParams2(clazz, null, options);
  }

  getUnFlatQueryParams2(clazz, sample, options?: UnFlatifyOptions) {
    const convertCamelToLowerHyphen1 = this.getConvertCamelToLowerHyphen(options);
    return this.Toolkit2.ObjectUtil.unFlatify2(
      this.activatedRoute.snapshot.queryParams, clazz, sample,
      {convertCamelToLowerHyphen: convertCamelToLowerHyphen1}
    );
  }


  getRouteParams(): any {
    return this.activatedRoute.snapshot.paramMap['params'];
  }

  getUnFlatRouteParams(clazz, options?: UnFlatifyOptions): RouteParamClazz {
    return this.getUnFlatRouteParams2(clazz, null, options);
  }

  getUnFlatRouteParams2(clazz, sample, options?: UnFlatifyOptions) {
    const convertCamelToLHyphen = this.getConvertCamelToLowerHyphen(options);
    return this.Toolkit2.ObjectUtil.unFlatify2(
      this.activatedRoute.snapshot.paramMap['params'], clazz, sample,
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
