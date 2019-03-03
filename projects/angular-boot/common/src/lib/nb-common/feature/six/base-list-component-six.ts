/**
 * Created by Jafar Amini in March 2018.
 */
import swal from 'sweetalert2';
import {OnChanges, SimpleChange} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseComponentSix} from './base-component-six';

export abstract class BaseListComponentSix<T, Prefix> extends BaseComponentSix implements OnChanges {
  constructor(protected featurePrefix: Prefix,
              protected _ActivatedRoute: ActivatedRoute) {
    super();
    for (const property of this.Toolkit2.ObjectUtil.getObjectPropertyList(this.featurePrefix)) {
      if (this.featurePrefix.hasOwnProperty(property) &&
        _ActivatedRoute.snapshot.params.hasOwnProperty(property)) {
        this.featurePrefix[property] = _ActivatedRoute.snapshot.params[property];
      }
    }
  }

  deleteItem(id, i, callback) {

    swal({
      showCloseButton: true,
      showCancelButton: true,
      background: '#e4e4e4',
      cancelButtonColor: '#04383c',
      confirmButtonColor: '#04383c',
      title: 'آیا از حذف این مورد مطمئن هستید؟',
      text: 'شما قادر به بازگردانی این مورد نخواهید بود!',
      type: 'warning',
      cancelButtonText: 'خیر',
      confirmButtonText: 'بله، حذف شود'
    }).then((result) => {
      if (result.value) {
        callback(id, i);
      } else if (result.dismiss) {
        window['this'].afterCancelDelete();
      }
    });
  }

  afterDeleteItem(id: string, i: number) {
    // swal(
    //   'Deleted!',
    //   'Your imaginary file has been deleted.',
    //   'success'
    // );
    swal({
        title: 'حذف شد',
        text: 'سطر مورد نظر حذف شد',
        type: 'success',
        showCloseButton: true,
        confirmButtonColor: '#04383c',
        background: '#e4e4e4',
        confirmButtonText: 'تایید'
      }
    );
  }

  afterCancelDelete() {
    // swal(
    //   'Cancelled',
    //   'Your imaginary file is safe :)',
    //   'error'
    // );
    swal.mixin();
  }

  abstract afterAddItem(addedItem);

  abstract afterEditItem(editedItem);

  abstract onchanges(changes: { [propKey: string]: SimpleChange });

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    this.onchanges(changes);
  }

}
