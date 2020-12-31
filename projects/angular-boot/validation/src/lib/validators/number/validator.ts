import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../../util/validation-functions';

export const number: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {'nbvNumber': true};
};
