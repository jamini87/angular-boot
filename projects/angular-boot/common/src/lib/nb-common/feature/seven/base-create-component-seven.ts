/**
 * @author Jafar Amini in March 2019.
 */
import {EventEmitter, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '@angular-boot/util';
import {isNullOrUndefined} from 'util';
import {BaseAnyComponentSeven} from './base-any-component-seven';
import {Observable} from 'rxjs';

export abstract class BaseCreateComponentSeven<RouteParamClazz, QueryParamClazz, T>
  extends BaseAnyComponentSeven<RouteParamClazz, QueryParamClazz> {
  @Output() createdItem = new EventEmitter<T>(null);

  abstract onChanges(changes: { [propKey: string]: SimpleChange });

  abstract getMainObject(): any;

  abstract getMainObjectInDom(): any;


  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected routeParamClazzType: (new () => RouteParamClazz),
    protected queryParamClazzType: (new () => QueryParamClazz),
    protected dialogService: DialogService) {
    super(activatedRoute, router, routeParamClazzType, queryParamClazzType);
    // for (const property of this.Toolkit2.ObjectUtil
    //   .getObjectPropertyList(this.featurePrefix)) {
    //   if (this.featurePrefix.hasOwnProperty(property) &&
    //     activatedRoute.snapshot.params.hasOwnProperty(property)) {
    //     this.featurePrefix[property] = activatedRoute.snapshot.params[property];
    //   }
    // }
  }


  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.getMainObject() ||
      JSON.stringify(this.getMainObject()) ===
      JSON.stringify(this.getMainObjectInDom())) {
      return true;
    }
    // Otherwise ask the group with the dialog service and return its
    // observable which resolves to true or false when the group decides
    return this.dialogService.confirm('صرف نظر کردن از تغییرات؟');
  }

  afterCreate(res, form?) {
    console.log(res);
    this.createdItem.emit(res);
    if (!isNullOrUndefined(form)) {
      form.resetForm();
    }
    // this.Toolkit2.SwalUtil.successAdd();
  }
}
