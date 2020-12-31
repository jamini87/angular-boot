import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../../util/validation-functions';

export const nationalCode: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  if (isValidNationalCode(v)) {
    return null;
  } else {
    return {nationalCode: true};
  }

};

function isValidNationalCode(value: string) {
  let isValid: boolean = false;
  if (!/^\d{10}$/.test(value)) {
    isValid = false;
  } else {
    const check = +value[9];
    let sum = 0;
    let i;
    for (i = 0; i < 9; ++i) {
      sum += (+value[i]) * (10 - i);
    }
    sum %= 11;
    if ((sum < 2 && check === sum) || (sum >= 2 && check + sum === 11)) {
      isValid = true;
    }
  }
  return isValid;
}
