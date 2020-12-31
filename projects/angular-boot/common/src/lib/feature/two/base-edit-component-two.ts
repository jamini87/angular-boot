/**
 * @author Jafar Amini in March 2018.
 */
import {OnChanges, SimpleChange} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BaseComponentTwo} from './base-component-two';
import {ActivatedRoute} from '@angular/router';
import {ModelContainer} from '../shared/model-container';
import {GlobalConfigurations} from '@angular-boot/core';

export abstract class BaseEditComponentTwo<T> extends BaseComponentTwo implements OnChanges {
  receiveData() {
    this.activatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<T> }) => {
        // console.log(data);
        this.applyMode(data.modelContainer.item);
      });
  }
  abstract onEditMode(item: any);
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

  applyMode(item: any) {
        this.onEditMode(item);
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
