/**
 * Edited by Jafar Amini in March 2018.
 */
import {AbstractControl, ValidatorFn, Validators} from '@angular/forms';
import {isPresent} from '../../util/validation-functions';
import {ValidationSrcType} from '../../util/validation-src-type';
import {ValidationOptions} from '../../util/validation-options';
import {isNullOrUndefined} from 'util';

export const notEqualTo = (notEqualControl: any, validationOptions: ValidationOptions): ValidatorFn => {
  let subscribe = false;
  return (control: AbstractControl): {[key: string]: boolean} => {
    const v: any = control.value;
    // alert(typeof notEqualControl);
    if (!isNullOrUndefined(validationOptions) &&
      validationOptions.validationSrcType === ValidationSrcType.FormControl) {
      if (!subscribe) {
        subscribe = true;
        notEqualControl.valueChanges.subscribe(() => {
          control.updateValueAndValidity();
        });
      }
      return notEqualControl.value !== v ? null : {nbvNotEqualTo: true};
    } else if (!isNullOrUndefined(validationOptions) &&
      validationOptions.validationSrcType === ValidationSrcType.CustomValue){
      if (isPresent(Validators.required(control))) {
        return null;
      }
      return notEqualControl !== v ? null : {nbvNotEqualTo: true};
    } else {
      if (isPresent(Validators.required(control))) {
        return null;
      }
      return notEqualControl !== v ? null : {nbvNotEqualTo: true};
    }
  };
};

