/**
 * Created by Jafar Amini in March 2018.
 */
import {EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BaseComponentOne} from './base-component-one';
import {ActionMode} from '@angular-boot/helper';
import {CommonDevTools} from '@angular-boot/util';
import {GlobalConfigurations} from '@angular-boot/core';

export abstract class BaseActionComponentOne<T> extends BaseComponentOne implements OnChanges {
  @Input() itemId_In: string;
  @Input() actionMode_In: ActionMode;

  @Output() item_Added_Out = new EventEmitter<T>(null);
  @Output() item_Edited_Out = new EventEmitter<T>(null);

  abstract onAddMode();

  abstract onEditMode();

  abstract onViewMode();

  abstract onReceivedItemId(itemId);

  abstract onChanges(obj: any);

  constructor(protected activatedRoute: ActivatedRoute, protected globalConfigurations: GlobalConfigurations) {
    super();

  }

  lookQueryParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const target = params['target'];
      const actionMode = params['actionMode'];
      const itemId = params['itemId'];
      switch (target) {
        case 'action':
          this.onReceivedItemId(itemId);
          break;
      }
    });
  }

  applyMode(changeMode: ActionMode) {
    this.actionMode_In = changeMode;
    switch (this.actionMode_In) {
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

  afterAdd(form, res, msg: { title?: string, text?: string } = {}) {
    console.log(res);
    this.item_Added_Out.emit(res);
    form.resetForm();
    // this.Toolkit2.SwalUtil.successAdd(msg.title, msg.text);
    this.globalConfigurations.successCreate(msg);
  }

  afterEdit(form, res, msg: { title?: string, text?: string } = {}) {
    this.item_Edited_Out.emit(res);
    // form.resetForm();

    // this.Toolkit2.SwalUtil.successEdit();
    this.globalConfigurations.successEdit(msg);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    CommonDevTools.Interaction.trackChange(changes);
    if (!isNullOrUndefined(this.actionMode_In)) {
      this.applyMode(this.actionMode_In);
    }
    if (changes.hasOwnProperty('itemId_In') &&
      !isNullOrUndefined(this.itemId_In)
    ) {
      this.onReceivedItemId(this.itemId_In);

    }
    this.onChanges(null);
  }

  onSubmit(form: NgForm, formIsValidSubmitted, callAddModeSubmit?, callEditModeSubmit?, that?) {
    // this.formData.groupFormData.isValidSubmitted = false;
    formIsValidSubmitted = false;
    if (form.invalid) {
      // alert('form is not valid..');
      const notifyConfig = new this.Toolkit2.NotifyConfig(
        this.Toolkit2.Notify.Type.DANGER,
        this.Toolkit2.Notify.Placement.TOP_CENTER,
        this.Toolkit2.Notify.TEMPLATES.Template1,
        'فرم معتبر نیست !');
      this.Toolkit2.Notify.showNotify(notifyConfig);
      return;
    }
    // this.formData.groupFormData.isValidSubmitted = true;
    formIsValidSubmitted = true;

    if (this.actionMode_In === ActionMode.ADD) {
      callAddModeSubmit(form, that);
    } else if (this.actionMode_In === ActionMode.EDIT) {
      callEditModeSubmit(form, that);
    }
  }
}
