/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { dateISO_8601 } from './validator';
import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const DATE_ISO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DateISOValidator),
  multi: true
};

@Directive({
  selector: '[nbvDateISO_8601][formControlName],[nbvDateISO_8601][formControl],[nbvDateISO_8601][ngModel]',
  providers: [DATE_ISO_VALIDATOR]
})
export class DateISOValidator implements Validator {
  @Input() dest: any;
  @Input() nbvDateISO_8601MsgHtml: any;
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  validate(c: AbstractControl): {[key: string]: any} {
    const vClassSuffix = '-nbvDateISO_8601';
    const iValidated = dateISO_8601(c);


    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvDateISO_8601MsgHtml, this._ValidationMessage);
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
    const vMessage = _ValidationMessage.getDateISO_8601();
    innerHTML = vMessage.title + '<br/>' + vMessage.description;
  }
  return innerHTML;
}
