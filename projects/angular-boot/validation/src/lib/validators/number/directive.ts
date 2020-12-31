/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { number } from './validator';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationMessage} from '../../util/validation-message';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const NUMBER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NumberValidator),
  multi: true
};

@Directive({
  selector: '[nbvNumber][formControlName],[nbvNumber][formControl],[nbvNumber][ngModel]',
  providers: [NUMBER_VALIDATOR]
})
export class NumberValidator implements Validator {
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  @Input() dest: any;
  @Input() nbvNumberMsgHtml: any;
  validate(c: AbstractControl): {[key: string]: any} {
    // return number(c);
    const vClassSuffix = '-nbvNumber';
    const iValidated = number(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvNumberMsgHtml, this._ValidationMessage);
      manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this.ValidationConfig);
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
    const vMessage = _ValidationMessage.getNumber();
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
