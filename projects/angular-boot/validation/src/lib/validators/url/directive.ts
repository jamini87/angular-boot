/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { url } from './validator';
import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const URL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => UrlValidator),
  multi: true
};

@Directive({
  selector: '[nbvUrl][formControlName],[nbvUrl][formControl],[nbvUrl][ngModel]',
  providers: [URL_VALIDATOR]
})
export class UrlValidator implements Validator {
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  @Input() dest: any;
  @Input() nbvUrlMsgHtml: any;
  validate(c: AbstractControl): {[key: string]: any} {
    // return url(c);
    const vClassSuffix = '-nbvUrl';
    const iValidated = url(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvUrlMsgHtml, this._ValidationMessage);
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
    const vMessage = _ValidationMessage.getUrl()
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
