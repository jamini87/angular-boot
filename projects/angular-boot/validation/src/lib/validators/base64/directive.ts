/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { base64 } from './validator';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationMessage} from '../../util/validation-message';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const BASE64_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => Base64Validator),
  multi: true
};

@Directive({
  selector: '[nbvBase64][formControlName],[nbvBase64][formControl],[nbvBase64][ngModel]',
  providers: [BASE64_VALIDATOR]
})
export class Base64Validator implements Validator {
  @Input() dest: any;
  @Input() nbvBase64MsgHtml: any;
  constructor(private _ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  validate(c: AbstractControl): {[key: string]: any} {
    // return base64(c);
    const vClassSuffix = '-nbvBase64';
    const iValidated = base64(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvBase64MsgHtml, this._ValidationMessage);
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
    const vMessage = _ValidationMessage.getBase64();
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
