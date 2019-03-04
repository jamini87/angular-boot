/**
 * Created by Jafar Amini in March 2018.
 */
import {OnChanges, SimpleChange} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BaseComponentTwo} from './base-component-two';
import {ActivatedRoute} from '@angular/router';
import {ModelContainer} from '../shared/model-container';
import {GlobalConfigurations} from '@angular-boot/core';

export abstract class BaseAddComponentTwo<T> extends BaseComponentTwo implements OnChanges {
  receiveData() {
    this.activatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<T> }) => {
        // console.log(data);
        this.applyMode(data.modelContainer.item);
      });
  }

  abstract onAddMode();
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
    this.onAddMode();
  }

  afterAdd(form, res, msg: { title?: string, text?: string } = {}) {
    console.log(res);
    // this.item_Added_Out.emit(res);
    form.resetForm();
    // this.Toolkit2.SwalUtil.successAdd();
    this.globalConfigurations.successCreate(msg);
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
