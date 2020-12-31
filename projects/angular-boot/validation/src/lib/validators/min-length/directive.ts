/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, Validators} from '@angular/forms';

import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';
// import {minLength} from './validator';

const MinLength_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinlengthValidator),
  multi: true
};

@Directive({
  selector: '[nbvMinlength][formControlName],[nbvMinlength][formControl],[nbvMinlength][ngModel]',
  providers: [MinLength_VALIDATOR]
})
export class MinlengthValidator implements Validator {
  @Input() nbvMinlength: number;
  @Input() nbvMinlengthTitle: string;
  @Input() dest: any;
  @Input() nbvMinlengthMsgHtml: any;

  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const vClassSuffix = '-nbvMinlength';
    // Start Method 1 Worked Very Good
    let iValidated = false;
    if (isNullOrUndefined(c.value)) {
      iValidated = false;
    } else {
      if (c.value.toString().length === 0) {
        iValidated = false;
      } else if (c.value.toString().length < this.nbvMinlength) {
        iValidated = true;
      } else {
        iValidated = false;
      }
    }
    // End Method 1 Worked Very Good

    // // Start Method 2
    // const iValidated = minLength(c, this.nbvMinlength);
    // // End Method 2
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvMinlength, this.nbvMinlengthTitle, this.nbvMinlengthMsgHtml, this._ValidationMessage);
      manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this.ValidationConfig);
      return {nbvMinlength: true};
    } else {
      manageDelValidationAlert(this.dest, vClassSuffix);
      return null;
    }
  }
}

export function getInnerHTML(value, valueTitle, msgHtml, _ValidationMessage) {
  let innerHTML;
  // alert('msgHtml: ')
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  } else if (!isNullOrUndefined(valueTitle)) {
    const vMessage = _ValidationMessage.getMinLength(valueTitle);
    innerHTML = vMessage.title;
  } else {
    const vMessage = _ValidationMessage.getMinLength(value);
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
