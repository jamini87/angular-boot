/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { digits } from './validator';
import {isNullOrUndefined} from 'util';
import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert,
  manageDelValidationAlert
} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';

const DIGITS_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DigitsValidator),
  multi: true
};

@Directive({
  selector: '[nbvDigits][formControlName],[nbvDigits][formControl],[nbvDigits][ngModel]',
  providers: [DIGITS_VALIDATOR]
})
export class DigitsValidator implements Validator {
  @Input() dest: any;
  @Input() nbvDigitsMsgHtml: any;
  constructor(private _ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  validate(c: AbstractControl): {[key: string]: any} {
    const vClassSuffix = '-nbvDigits';
    const iValidated = digits(c);
    if (iValidated) {
        const innerHTML = getInnerHTML(this.nbvDigitsMsgHtml, this._ValidationMessage);
        manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this._ValidationConfig);
    } else {
      manageDelValidationAlert(this.dest, vClassSuffix);
    }
    return iValidated;
  }
}

export function getInnerHTML(msgHtml, _ValidationMessage) {
  let innerHTML;
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  }  else {
    const vMessage = _ValidationMessage.getDigits();
    innerHTML = vMessage.title;
  }
  return innerHTML;
}




// export  function Fa2En(value: any): any {
//   const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//   const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
//   if(isNullOrUndefined(value))
//     return value;
//   let myvalue: string = value.toString();
//   if(!isNullOrUndefined(value)) {
//     for (let i = 0, numbersLen = persianNumbers.length; i < numbersLen; i++) {
//       myvalue = myvalue.replace(new RegExp(persianNumbers[i], 'g'), englishNumbers[i]);
//     }
//   }
//   return myvalue;
// }
