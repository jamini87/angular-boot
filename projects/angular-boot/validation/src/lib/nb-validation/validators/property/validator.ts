import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../../util/validation-functions';
import {isNullOrUndefined} from 'util';

export const property = (value: string): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {

    if (isPresent(Validators.required(control))) {
      return null;
    }

    const properties = value.split(',');
    let errorProperty = new Array();
    const obj = control.value;
    let isValid = true;
    for (const prop of properties) {
      if (isNullOrUndefined(obj[prop])) {
        isValid = false;
        // break;
        errorProperty.push(prop);
      }
    }
    return isValid ? null : { hasProperty: true, nbvProperty: value, errorProperty: errorProperty};
  };
};
