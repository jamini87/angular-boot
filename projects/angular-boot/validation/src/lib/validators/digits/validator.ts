import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../../util/validation-functions';

export const digits: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  // return /^\d+$/.test(v) ? null : {digits: true};
  return /^([0-9]*)$|^([۰-۹]*)$/.test(v) ? null : {nbvDigits: true};
};
