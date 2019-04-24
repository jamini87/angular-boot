/**
 * @author Jafar Amini in March 2018.
 */
import {isNullOrUndefined} from 'util';
import {SectionObject} from './helper/section-object';
import {EventEmitter, Input, Output} from '@angular/core';
import {ActionMode} from '@angular-boot/util';
import {Toolkit2} from '@angular-boot/util';
export abstract class BaseComponentOne {
  @Output() selectedActionMode_Out= new EventEmitter<ActionMode>();
  @Input() selectedActionMode_In: ActionMode;
  Toolkit2 = Toolkit2;
  ActionMode = ActionMode;
  selectedActionMode: ActionMode;

  goToSlide(slideNumber: number) {
    Toolkit2.BootstrapUtil.goToCrouselSlide('#myCarousel', slideNumber);
  }
  goToSection1(carouselSelector, slideNumber, actionMode, id, index, callFunc?) {
    if (!isNullOrUndefined(callFunc)) {
      callFunc(actionMode, id, index);
    }
    Toolkit2.BootstrapUtil.goToCrouselSlide(carouselSelector, slideNumber);
  }

  goToSection(sectionObject: SectionObject, callFunc?) {
    this.selectedActionMode = sectionObject.actionMode;
    this.selectedActionMode_Out.emit(sectionObject.actionMode);
    if (!isNullOrUndefined(callFunc)) {
      callFunc(sectionObject.actionMode, sectionObject.id, sectionObject.index);
    }
    Toolkit2.BootstrapUtil.goToCrouselSlide(sectionObject.carouselSelector, sectionObject.slideNumber);
  }

  goToSection2(sectionObject: SectionObject, callFunc?, that?) {
    this.selectedActionMode = sectionObject.actionMode;
    this.selectedActionMode_Out.emit(sectionObject.actionMode);
    if (!isNullOrUndefined(that) && !isNullOrUndefined(that.router)) {
      that.router.navigate([], {
        relativeTo: that.activatedRoute,
        queryParams: {
          target: 'action',
          actionMode: sectionObject.actionMode,
          groupId: sectionObject.id
        }
      });
    }
    // that.itemId_Out.emit(sectionObject.id);
    if (!isNullOrUndefined(callFunc)) {
      callFunc(sectionObject.actionMode, sectionObject.id, sectionObject.index, that);
    }
    Toolkit2.BootstrapUtil.goToCrouselSlide(sectionObject.carouselSelector, sectionObject.slideNumber);
  }

}
