/**
 * @author Jafar Amini in March 2019.
 */
import {EventEmitter, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '@angular-boot/util';
import {isNullOrUndefined} from 'util';
import {BaseAnyComponentSeven} from './base-any-component-seven';
import {Observable} from 'rxjs';

export abstract class BaseEditComponentSeven<RouteParamClazz, QueryParamClazz, T>
  extends BaseAnyComponentSeven<RouteParamClazz, QueryParamClazz> implements OnChanges {
  @Input() item: T;

  @Output() editedItem = new EventEmitter<T>(null);
  receiveItem() {
    this.activatedRoute.data
      .subscribe((data: { item: T }) => {
        this.onReceivedItem(data.item);
      });
  }

  abstract onReceivedItem(item);

  abstract onChanges(changes: { [propKey: string]: SimpleChange });

  abstract getMainObject(): any;

  abstract getMainObjectInDom(): any;


  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public routeParamClazzType: (new () => RouteParamClazz),
    public queryParamClazzType: (new () => QueryParamClazz),
    public dialogService: DialogService) {
    super(activatedRoute, router, routeParamClazzType, queryParamClazzType);
    // for (const property of this.Toolkit2.ObjectUtil
    //   .getObjectPropertyList(this.featurePrefix)) {
    //   if (this.featurePrefix.hasOwnProperty(property) &&
    //     activatedRoute.snapshot.params.hasOwnProperty(property)) {
    //     this.featurePrefix[property] = activatedRoute.snapshot.params[property];
    //   }
    // }
  }


  // canDeactivate(): Observable<boolean> | boolean {
  //   // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  //   if (!this.getMainObject() ||
  //     JSON.stringify(this.getMainObject()) ===
  //     JSON.stringify(this.getMainObjectInDom())) {
  //     return true;
  //   }
  //   // Otherwise ask the group with the dialog service and return its
  //   // observable which resolves to true or false when the group decides
  //   return this.dialogService.confirm('صرف نظر کردن از تغییرات؟');
  // }

  afterEdit(res, form?) {
    this.editedItem.emit(res);
    // // form.resetForm();
    // this.Toolkit2.SwalUtil.successEdit();
  }



  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes.hasOwnProperty('item') && !isNullOrUndefined(this.item)) {
      this.onReceivedItem(this.item);
    }
    this.onChanges(changes);
  }
}
