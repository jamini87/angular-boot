import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import {isPresent} from '../../util/validation-functions';

export const equal = (val: any): ValidatorFn => {

  return (control: AbstractControl): {[key: string]: any} => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v: any = control.value;
    return val === v ? null : {nbvEqual: true};
  };
};


