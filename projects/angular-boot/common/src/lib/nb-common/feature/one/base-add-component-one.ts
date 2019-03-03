/**
 * Created by Jafar Amini in March 2018.
 */
import {EventEmitter, Output} from '@angular/core';
import {BaseComponentOne} from './base-component-one';

export abstract class BaseAddComponentOne<T> extends BaseComponentOne{
  @Output() addedItem= new EventEmitter<T>();
  constructor() {
    super();
  }
  afterAdd(addedItem) {
    this.addedItem.emit(addedItem);
  }
}
