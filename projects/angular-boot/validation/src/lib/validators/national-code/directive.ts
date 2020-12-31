/**
 * @author Jafar amini
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import {nationalCode} from './validator';
import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert,
  manageDelValidationAlert
} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const NATIONALCODE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NationalCodeValidator),
  multi: true
};

@Directive({
  selector: '[nbvNationalCode][formControlName],[nbvNationalCode][formControl],[nbvNationalCode][ngModel]',
  providers: [NATIONALCODE_VALIDATOR]
})
export class NationalCodeValidator implements Validator {
  @Input() dest: any;
  @Input() nbvNationalCodeMsgHtml: any;
  constructor(private _ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  validate(c: AbstractControl): {[key: string]: any} {
    const vClassSuffix = '-nbvNationalCode';
    const iValidated = nationalCode(c);
    if (iValidated) {
        const innerHTML = getInnerHTML(this.nbvNationalCodeMsgHtml, this._ValidationMessage);
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
    const vMessage = _ValidationMessage.getNationalCode();
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
