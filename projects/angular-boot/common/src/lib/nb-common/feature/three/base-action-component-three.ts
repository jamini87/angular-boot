/**
 * Created by Jafar Amini in March 2018.
 */
import {OnChanges, SimpleChange} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BaseComponentThree} from './base-component-three';
import {ModelContainer} from '../shared/model-container';
import {ActionMode} from '@angular-boot/util';
import {GlobalConfigurations} from '@angular-boot/core';

export abstract class BaseActionComponentThree<T> extends BaseComponentThree implements OnChanges {
  // ActionModeUtil = this.Toolkit2.ActionModeUtil;
  // @Input() itemId_In: string;
  actionMode: ActionMode;
  //
  // @Output() item_Added_Out = new EventEmitter<Group>(null);
  // @Output() item_Edited_Out = new EventEmitter<Group>(null);

  receiveData() {
    this.activatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<T> }) => {
        // console.log(data);
        this.applyMode(data.modelContainer.actionMode, data.modelContainer.item);
      });
  }

  abstract onAddMode();

  abstract onEditMode(item: any);

  abstract onViewMode(item: any);

  abstract onReceivedItem(item);

  abstract onChanges(obj: any);

  constructor(protected activatedRoute: ActivatedRoute,
              protected globalConfigurations: GlobalConfigurations) {
    super();

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

  afterAdd(form, res, msg: { title?: string, text?: string } = {}) {
    console.log(res);
    // this.item_Added_Out.emit(res);
    form.resetForm();
    // this.Toolkit2.SwalUtil.successAdd();
    this.globalConfigurations.successCreate(msg);
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
