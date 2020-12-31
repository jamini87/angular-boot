/**
 * @author Jafar Amini in March 2018.
 */
import {Toolkit2, UnFlatifyOptions} from '@angular-boot/util';
import {ActionMode} from '@angular-boot/util';
import {ActivatedRoute} from '@angular/router';
import {isNullOrUndefined} from '@angular-boot/util';
import {ModelContainer} from '../shared/model-container';
import {ComponentCanDeactivate} from '../../routing';

export abstract class BaseComponentSeven extends ComponentCanDeactivate{
  Toolkit2 = Toolkit2;
  ActionMode = ActionMode;
  constructor(public activatedRoute: ActivatedRoute) {
    super();
  }
  receiveData() {
    this.activatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<Object> }) => {
        // console.log(data);
        this.onReceiveRouteParam(data.modelContainer.routeParams);
        this.onReceiveQueryParam(data.modelContainer.queryParams);
      });
  }
  abstract onReceiveRouteParam(routeParam: any);
  abstract onReceiveQueryParam(queryParam: any);
  getQueryParams() {
    return this.activatedRoute.snapshot.queryParams;
  }
  getUnFlatQueryParams(clazz, options?: UnFlatifyOptions) {
    return this.getUnFlatQueryParams2(clazz, null, options);
  }
  getUnFlatQueryParams2(clazz, sample, options?: UnFlatifyOptions) {
    const convertCamelToLowerHyphen = this.getConvertCamelToLowerHyphen(options);
    return this.Toolkit2.ObjectUtil.unFlatify2(
      this.activatedRoute.snapshot.queryParams, clazz, sample,
      {convertCamelToLowerHyphen: convertCamelToLowerHyphen}
    );
  }


  getRouteParams() {
    return this.activatedRoute.snapshot.paramMap['params'];
  }

  getUnFlatRouteParams(clazz, options?: UnFlatifyOptions) {
    return this.getUnFlatRouteParams2(clazz, null, options);
  }

  getUnFlatRouteParams2(clazz, sample, options?: UnFlatifyOptions) {
    const convertCamelToLowerHyphen1 = this.getConvertCamelToLowerHyphen(options);
    return this.Toolkit2.ObjectUtil.unFlatify2(
      this.activatedRoute.snapshot.paramMap['params'], clazz, sample,
      {convertCamelToLowerHyphen: convertCamelToLowerHyphen1}
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
