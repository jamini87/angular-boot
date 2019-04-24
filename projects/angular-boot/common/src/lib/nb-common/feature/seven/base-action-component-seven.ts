/**
 * @author Jafar Amini in March 2018.
 */
import {EventEmitter, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ModelContainer} from '../shared/model-container';
import {ActionMode} from '@angular-boot/util';
import {Observable} from 'rxjs';
import {DialogService} from '@angular-boot/util';
import {BaseComponentSeven} from './base-component-seven';
import {isNullOrUndefined} from 'util';
import {BaseAnyComponentSeven} from './base-any-component-seven';

export abstract class BaseActionComponentSeven<RouteParamClazz, QueryParamClazz, T>
  extends BaseAnyComponentSeven<RouteParamClazz, QueryParamClazz> implements OnChanges {
  // ActionModeUtil = this.Toolkit2.ActionModeUtil;
  @Input() item: T;
  @Input() actionMode: ActionMode;
  // actionMode: ActionMode;

  @Output() addedItem = new EventEmitter<T>(null);
  @Output() editedItem = new EventEmitter<T>(null);

  receiveActionMode() {
    this.activatedRoute.data
      .subscribe((data: { actionMode: ActionMode }) => {
        this.applyMode(data.actionMode);
      });
  }

  receiveItem() {
    this.activatedRoute.data
      .subscribe((data: { item: T }) => {
        this.onReceivedItem(data.item);
      });
  }

  // receiveData() {
  //   // this.activatedRoute.data
  //   //   .subscribe((data: { actionMode: ActionMode }) => {
  //   //     // console.log(data);
  //   //     // this.onReceiveRouteParam(data.modelContainer.routeParams);
  //   //     // this.onReceiveQueryParam(data.modelContainer.queryParams);
  //   //     this.applyMode(data.actionMode);
  //   //     // this.onReceivedItem(data.modelContainer.item);
  //   //   });
  // }

  abstract onAddMode();

  abstract onEditMode();

  abstract onViewMode();

  abstract onReceivedItem(item);

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

  applyMode(changeMode: ActionMode) {
    // alert('in applyMode()   this.actionMode = ' + this.actionMode);
    this.actionMode = changeMode;
    switch (this.actionMode) {
      case ActionMode.ADD:
        this.onAddMode();
        break;
      case ActionMode.EDIT:
        this.onEditMode();
        break;
      case ActionMode.VIEW:
        this.onViewMode();
        break;
    }
  }

  afterAdd(res, form?) {
    // console.log(res);
    this.addedItem.emit(res);
    if (!isNullOrUndefined(form)) {
      form.resetForm();
    }
    // this.Toolkit2.SwalUtil.successAdd();
  }

  afterEdit(res, form?) {
    this.editedItem.emit(res);
    // // form.resetForm();
    // this.Toolkit2.SwalUtil.successEdit();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    // if (changes.hasOwnProperty('actionMode') || changes.hasOwnProperty('item')) {
    //
    //   this.applyMode(changes['actionMode'].currentValue, this.item);
    // }

    if (changes.hasOwnProperty('actionMode') && !isNullOrUndefined(this.actionMode)) {
      this.applyMode(changes['actionMode'].currentValue);
    }
    if (changes.hasOwnProperty('item') && !isNullOrUndefined(this.item)) {
      this.onReceivedItem(this.item);
    }


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
    this.onChanges(changes);
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

    // // --------------------
    //
    // if (this.actionMode === ActionMode.ADD) {
    //   callAddModeSubmit(form, that);
    // } else if (this.actionMode === ActionMode.EDIT) {
    //   callEditModeSubmit(form, that);
    // }

  }
}
