/**
 * Created by Jafar Amini in March 2018.
 */
import {ActionMode} from '@angular-boot/util';

export class ActionItem {
  containerSelector: string;
  slideNumber: number;
  actionMode: ActionMode;
  queryId: string;
  itemIndex: number;
  constructor(containerSelector, slideNumber, actionMode, queryId, itemIndex) {
    this.containerSelector = containerSelector;
    this.slideNumber = slideNumber;
    this.actionMode = actionMode;
    this.queryId = queryId;
    this.itemIndex = itemIndex;
  }
}

