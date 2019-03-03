import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate } from '../../util/validation-functions';

export const dateISO_8601: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^[۰-۹]{4}[\/\-](۰?[۱-۹]|۱[۰۱۲])[\/\-](۰?[۱-۹]|[۱۲][۰-۹]|۳[۰۱])$/.test(v) ? null : {nbvDateISO_8601: true};
};
