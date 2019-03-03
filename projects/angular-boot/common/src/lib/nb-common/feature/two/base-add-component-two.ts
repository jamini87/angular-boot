/**
 * Created by Jafar Amini in March 2018.
 */
import {OnChanges, SimpleChange} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BaseComponentTwo} from './base-component-two';
import {ActivatedRoute} from '@angular/router';
import {ModelContainer} from '../shared/model-container';

export abstract class BaseAddComponentTwo<T> extends BaseComponentTwo implements OnChanges {
  receiveData() {
    this._ActivatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<T> }) => {
        // console.log(data);
        this.applyMode(data.modelContainer.item);
      });
  }

  abstract onAddMode();
  abstract onReceivedItem(item);
  abstract onChanges(obj: any);

  constructor(protected _ActivatedRoute: ActivatedRoute) {
    super();

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

  applyMode(item: any) {
    this.onAddMode();
  }

  afterAdd(form, res) {
    console.log(res);
    // this.item_Added_Out.emit(res);
    form.resetForm();
    this.Toolkit2.SwalUtil.successAdd();
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

  onSubmit(form: NgForm, formIsValidSubmitted, callAddModeSubmit?, that?) {
    formIsValidSubmitted = false;
    if (form.invalid) {
      alert('form is not valid..');
      return;
    }
    formIsValidSubmitted = true;
     callAddModeSubmit(form, that);
  }
}
