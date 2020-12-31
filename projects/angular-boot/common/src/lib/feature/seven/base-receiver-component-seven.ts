/**
 * @author Jafar Amini in March 2019.
 */
import {EventEmitter, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '@angular-boot/util';
import {isNullOrUndefined} from '@angular-boot/util';
import {BaseAnyComponentSeven} from './base-any-component-seven';
import {Observable} from 'rxjs';

export abstract class BaseReceiverComponentSeven<RouteParamClazz, QueryParamClazz, T>
  extends BaseAnyComponentSeven<RouteParamClazz, QueryParamClazz> implements OnChanges {
  @Input() item: T;

  receiveItem() {
    this.activatedRoute.data
      .subscribe((data: { item: T }) => {
        this.onReceivedItem(data.item);
      });
  }

  abstract onReceivedItem(item);

  abstract onChanges(changes: { [propKey: string]: SimpleChange });


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

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes.hasOwnProperty('item') && !isNullOrUndefined(this.item)) {
      this.onReceivedItem(this.item);
    }
    this.onChanges(changes);
  }
}
