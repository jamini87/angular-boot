/**
 * Created by Jafar Amini in March 2018.
 */
import {OnChanges, SimpleChange} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BaseComponentFive} from './base-component-five';
import {ActivatedRoute} from '@angular/router';
import {ModelContainer} from '../shared/model-container';
import {ActionMode} from '@angular-boot/helper';
import {Observable} from 'rxjs';
import {DialogService} from '@angular-boot/util';

export abstract class BaseActionComponentFive<T, Prefix> extends BaseComponentFive implements OnChanges {
  // ActionModeUtil = this.Toolkit2.ActionModeUtil;
  // @Input() itemId_In: string;
  actionMode: ActionMode;
  //
  // @Output() item_Added_Out = new EventEmitter<Group>(null);
  // @Output() item_Edited_Out = new EventEmitter<Group>(null);

  receiveData() {
    this._ActivatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<T> }) => {
        // console.log(data);
        this.onReceiveRouteParam(data.modelContainer.routeParams);
        this.onReceiveQueryParam(data.modelContainer.queryParams);
        this.applyMode(data.modelContainer.actionMode, data.modelContainer.item);
      });
  }

  abstract onAddMode();

  abstract onEditMode(item: any);

  abstract onViewMode(item: any);

  abstract onReceivedItem(item);

  abstract onChanges(obj: any);

  abstract getMainObject(): Object;

  abstract getMainObjectInDom(): Object;

  constructor(protected featurePrefix: Prefix,
              protected _ActivatedRoute: ActivatedRoute,
              protected _DialogService: DialogService) {
    super(_ActivatedRoute);
    for (const property of this.Toolkit2.ObjectUtil
      .getObjectPropertyList(this.featurePrefix)) {
      if (this.featurePrefix.hasOwnProperty(property) &&
        _ActivatedRoute.snapshot.params.hasOwnProperty(property)) {
        this.featurePrefix[property] = _ActivatedRoute.snapshot.params[property];
      }
    }
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
    return this._DialogService.confirm('صرف نظر کردن از تغییرات؟');
  }

  // recieveData() {
  //   this._ActivatedRoute.data
  //     .subscribe((data: { modelContainer: ModelContainer<Object> }) => {
  //       // console.log(data);
  //       this.applyMode(data.modelContainer.actionMode, data.modelContainer.item);
  //     });
  // }
  // lookQueryParams() {
  //   this._ActivatedRoute.queryParams.subscribe((params) => {
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

  applyMode(changeMode: ActionMode, item: any) {
    // alert('in applyMode()   this.actionMode = ' + this.actionMode);
    this.actionMode = changeMode;
    switch (this.actionMode) {
      case ActionMode.ADD:
        this.onAddMode();
        break;
      case ActionMode.EDIT:
        this.onEditMode(item);
        break;
      case ActionMode.VIEW:
        this.onViewMode(item);
        break;
    }
  }

  afterAdd(form, res) {
    console.log(res);
    // this.item_Added_Out.emit(res);
    form.resetForm();
    this.Toolkit2.SwalUtil.successAdd();
  }

  afterEdit(form, res) {
    // this.item_Edited_Out.emit(res);
    // // form.resetForm();
    this.Toolkit2.SwalUtil.successEdit();
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

  onSubmit(form: NgForm, formIsValidSubmitted, callAddModeSubmit?, callEditModeSubmit?, that?) {
    formIsValidSubmitted = false;
    if (form.invalid) {
      alert('form is not valid..');
      return;
    }
    formIsValidSubmitted = true;

    if (this.actionMode === ActionMode.ADD) {
      callAddModeSubmit(form, that);
    } else if (this.actionMode === ActionMode.EDIT) {
      callEditModeSubmit(form, that);
    }
  }
}
