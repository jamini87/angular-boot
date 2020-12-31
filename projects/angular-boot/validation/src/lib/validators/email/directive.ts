/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { email } from './validator';
import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const EMAIL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};

@Directive({
  selector: '[nbvEmail][formControlName],[nbvEmail][formControl],[nbvEmail][ngModel]',
  providers: [EMAIL_VALIDATOR]
})
export class EmailValidator implements Validator {
  @Input() dest: any;
  @Input() nbvEmailMsgHtml: any;
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  validate(c: AbstractControl): {[key: string]: any} {
    const vClassSuffix = '-nbvEmail';
    const iValidated = email(c);
    if (iValidated) {
        const innerHTML = getInnerHTML(this.nbvEmailMsgHtml, this._ValidationMessage);
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
    const vMessage = _ValidationMessage.getEmail();
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
