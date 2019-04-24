/**
 * @author Jafar Amini in March 2018.
 */
import swal from 'sweetalert2';
// declare var swal: any;

import {isNullOrUndefined} from 'util';
import {EventEmitter, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import {SectionObject} from './helper/section-object';
import {BaseComponentOne} from './base-component-one';
import {Toolkit2} from '@angular-boot/util';

export abstract class BaseListComponentOne<T> extends BaseComponentOne implements OnChanges  {
  @Input() item_Added_In: T = null;
  @Input() item_Edited_In: T = null;
  @Output() itemId_Out= new EventEmitter<string>();
  constructor() {
    super();
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
  goToSection3(sectionObject: SectionObject, callFunc?, that?) {
    this.selectedActionMode = sectionObject.actionMode;
    this.selectedActionMode_Out.emit(sectionObject.actionMode);
    if (!isNullOrUndefined(that) && !isNullOrUndefined(that._Router)) {
      that._Router.navigate([], {
        relativeTo: that._ActivatedRoute,
        queryParams: {
          target: 'action',
          actionMode: sectionObject.actionMode,
          itemId: sectionObject.id
        }
      });
    }
    // that.itemId_Out.emit(sectionObject.id);
    if (!isNullOrUndefined(callFunc)) {
      callFunc(sectionObject.actionMode, sectionObject.id, sectionObject.index, that);
    }
    Toolkit2.BootstrapUtil.goToCrouselSlide(sectionObject.carouselSelector, sectionObject.slideNumber);
  }


  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    // CommonDevTools.Interaction.trackChange(changes);
    if (changes.hasOwnProperty('item_Added_In') &&
      !isNullOrUndefined(this.item_Added_In)
    ) {
      this.afterAddItem(this.item_Added_In);
      try {
        this.itemId_Out.emit(null);
      } catch (e) {
        // console.log('');
      }
      //   alert('Add...');
      //   console.log('this.group_Added_In-->', this.group_Added_In);



    }

    if (
      changes.hasOwnProperty('item_Edited_In') &&
      !isNullOrUndefined(this.item_Edited_In)
    ) {
      // alert('Edit...');
      // console.log('this.group_Edited_In-->', this.group_Edited_In);

      this.afterEditItem(this.item_Edited_In);
      this.itemId_Out.emit(undefined);

    }
  }

}
