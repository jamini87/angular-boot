/**
 * Created by Jafar Amini in March 2018.
 */
import {OnChanges, SimpleChange} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BaseComponentFive} from './base-component-five';
import {ActivatedRoute} from '@angular/router';
import {ModelContainer} from '../shared/model-container';
import {Observable} from 'rxjs';
import {DialogService} from '@angular-boot/util';
import {GlobalConfigurations} from '@angular-boot/core';

export abstract class BaseEditComponentFive<T, Prefix> extends BaseComponentFive implements OnChanges {
  receiveData() {
    this.activatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<T> }) => {
        // console.log(data);
        this.onReceiveRouteParam(data.modelContainer.routeParams);
        this.onReceiveQueryParam(data.modelContainer.queryParams);
        this.applyMode(data.modelContainer.item);
      });
  }
  abstract onReceivedItem(item: T);
  abstract onChanges(obj: any);
  abstract getMainObject(): Object;
  abstract getMainObjectInDom(): Object;
  constructor(protected featurePrefix: Prefix,
              protected activatedRoute: ActivatedRoute,
              protected dialogService: DialogService,
              protected globalConfigurations: GlobalConfigurations) {
    super(activatedRoute);
      }
      // recieveData() {
      //   this.activatedRoute.data
      //     .subscribe((data: { modelContainer: ModelContainer<Object> }) => {
      //       // console.log(data);
      //       this.applyMode(data.modelContainer.actionMode, data.modelContainer.item);
      //     });
      // }
  // lookQueryParams() {
  //   this.activatedRoute.queryParams.subscribe((params) => {
  //     const target = params['target'];
  //     const actionMode = params['actionMode'];
  //     const itemId = params['itemId'];
  //     switch (target) {
  //       case 'action':
  //         this.onReceivedItemId(itemId);
  //         break;
  //     }
  //   });
  // }

  applyMode(item: any) {
        this.onReceivedItem(item);
  }
  afterEdit(form, res, msg: { title?: string, text?: string } = {}) {
    // this.item_Edited_Out.emit(res);
    // // form.resetForm();

    // this.Toolkit2.SwalUtil.successEdit();
    this.globalConfigurations.successEdit(msg);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    // CommonDevTools.Interaction.trackChange(changes);
    // if (!isNullOrUndefined(this.actionMode_In)) {
    //   this.applyMode(this.actionMode_In);
    // }
    // if (changes.hasOwnProperty('itemId_In') &&
    //   !isNullOrUndefined(this.itemId_In)
    // ) {
    //   this.onReceivedItemId(this.itemId_In);
    //
    // }
    // this.onChanges(null);
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

  onSubmit(form: NgForm, formIsValidSubmitted, callEditModeSubmit?, that?) {
    formIsValidSubmitted = false;
    if (form.invalid) {
      alert('form is not valid..');
      return;
    }
    formIsValidSubmitted = true;
    callEditModeSubmit(form, that);
  }
}
