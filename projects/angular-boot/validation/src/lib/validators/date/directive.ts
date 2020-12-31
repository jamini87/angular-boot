/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { date } from './validator';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationMessage} from '../../util/validation-message';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const DATE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DateValidator),
  multi: true
};

@Directive({
  selector: '[nbvDate][formControlName],[nbvDate][formControl],[nbvDate][ngModel]',
  providers: [DATE_VALIDATOR]
})
export class DateValidator implements Validator {
  @Input() dest: any;
  @Input() nbvDateMsgHtml: any;
  constructor(private _ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  validate(c: AbstractControl): {[key: string]: any} {
    // return date(c);
    const vClassSuffix = '-nbvDate';
    const iValidated = date(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvDateMsgHtml, this._ValidationMessage);
      manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this._ValidationConfig);
    } else {
      manageDelValidationAlert(this.dest, vClassSuffix)
    }
    return iValidated;
  }
}

export function getInnerHTML(msgHtml, _ValidationMessage) {
  let innerHTML;
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  }  else {
    const vMessage = _ValidationMessage.getDate();
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
