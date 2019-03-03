/**
 * Created by Jafar Amini in March 2018.
 */
import {ActionMode} from '@angular-boot/helper';

export class ModelContainer<T> {
  item: T;
  routeParams: any;
  queryParams: any;
  actionMode?: ActionMode;

  constructor(routeParams?: any, queryParams?: any, item?: T, actionMode?: ActionMode) {
    this.item = item;
    this.routeParams = routeParams;
    this.queryParams = queryParams;
    this.actionMode = actionMode;
  }
}
