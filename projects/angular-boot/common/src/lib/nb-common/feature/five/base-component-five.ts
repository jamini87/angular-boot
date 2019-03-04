/**
 * Created by Jafar Amini in March 2018.
 */
import {Toolkit2, UnFlatifyOptions} from '@angular-boot/util';
import {ActionMode} from '@angular-boot/util';
import {ActivatedRoute} from '@angular/router';
import {isNullOrUndefined} from "util";
import {ModelContainer} from '../shared/model-container';

export abstract class BaseComponentFive {
  Toolkit2 = Toolkit2;
  ActionMode = ActionMode;
  constructor(protected _ActivatedRoute: ActivatedRoute) {

  }
  receiveData() {
    this._ActivatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<Object> }) => {
        // console.log(data);
        this.onReceiveRouteParam(data.modelContainer.routeParams);
        this.onReceiveQueryParam(data.modelContainer.queryParams);
      });
  }
  abstract onReceiveRouteParam(routeParam: any);
  abstract onReceiveQueryParam(queryParam: any);
  getQueryParams() {
    return this._ActivatedRoute.snapshot.queryParams;
  }
  getUnFlatQueryParams(clazz, options?: UnFlatifyOptions) {
    return this.getUnFlatQueryParams2(clazz, null, options);
  }
  getUnFlatQueryParams2(clazz, sample, options?: UnFlatifyOptions) {
    const convertCamelToLowerHyphen = this.getConvertCamelToLowerHyphen(options);
    return this.Toolkit2.ObjectUtil.unFlatify2(
      this._ActivatedRoute.snapshot.queryParams, clazz, sample,
      {convertCamelToLowerHyphen: convertCamelToLowerHyphen}
    );
  }


  getRouteParams() {
    return this._ActivatedRoute.snapshot.paramMap['params'];
  }

  getUnFlatRouteParams(clazz, options?: UnFlatifyOptions) {
    return this.getUnFlatRouteParams2(clazz, null, options);
  }

  getUnFlatRouteParams2(clazz, sample, options?: UnFlatifyOptions) {
    const convertCamelToLowerHyphen = this.getConvertCamelToLowerHyphen(options);
    return this.Toolkit2.ObjectUtil.unFlatify2(
      this._ActivatedRoute.snapshot.paramMap['params'], clazz, sample,
      {convertCamelToLowerHyphen: convertCamelToLowerHyphen}
    );
  }




  private getConvertCamelToLowerHyphen(options) {
    let convertCamelToLowerHyphen = true;
    if (
      !isNullOrUndefined(options) &&
      !isNullOrUndefined(options.convertCamelToLowerHyphen)
    ) {
      convertCamelToLowerHyphen = options.convertCamelToLowerHyphen
    } else {
      convertCamelToLowerHyphen = true;
    }
    return convertCamelToLowerHyphen;
  }
}
