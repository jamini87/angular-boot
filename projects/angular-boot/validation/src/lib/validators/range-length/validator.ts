import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../../util/validation-functions';

export const rangeLength = (value: Array<number>): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: string = control.value;
    return v.length >= value[0] && v.length <= value[1] ? null : {nbvRangeLength: true};
  };
};
