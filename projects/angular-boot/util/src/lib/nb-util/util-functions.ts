import {Observable} from 'rxjs';
import {AbstractControl} from '@angular/forms';

export function isNullOrUndefined(value: any) {
  return value === undefined || value === null;
}

export function isUndefined(value: any) {
  return value === undefined;
}

export function isBlankString(value: any) {
  return value === '';
}

export function isFunction(value: any) {
  return typeof(value) === 'function';
}

export function objAndSameType(obj1: any, obj2: any) {
  return isObject(obj1) && isObject(obj2)
    && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2)
    && !(Array.isArray(obj1) || Array.isArray(obj2));
}

export function isObject(x: any) {
  return x != null && typeof x === 'object';
}

export function clone(value: any): any {
  if (!isObject(value) || value instanceof RegExp || value instanceof Observable) {
    return value;
  }

  if (value instanceof AbstractControl) {
    return null;
  }

  if (Object.prototype.toString.call(value) === '[object Date]') {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    return value.slice(0).map(v => clone(v));
  }

  value = Object.assign({}, value);
  Object.keys(value).forEach(k => value[k] = clone(value[k]));

  return value;
}
