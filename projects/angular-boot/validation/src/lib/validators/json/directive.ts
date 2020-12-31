/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { json } from './validator';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationMessage} from '../../util/validation-message';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const JSON_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => JSONValidator),
  multi: true
};

@Directive({
  selector: '[nbvJson][formControlName],[nbvJson][formControl],[nbvJson][ngModel]',
  providers: [JSON_VALIDATOR]
})
export class JSONValidator implements Validator {
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  @Input() dest: any;
  @Input() nbvJsonMsgHtml: any;
  validate(c: AbstractControl): {[key: string]: any} {
    // return json(c);
    const vClassSuffix = '-nbvJson';
    const iValidated = json(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvJsonMsgHtml, this._ValidationMessage);
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
    const vMessage = _ValidationMessage.getJson();
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
