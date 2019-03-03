/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';

import {ValidationMessage} from '../../util/validation-message';
import {isNullOrUndefined} from 'util';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';

const MaxLength_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxlengthValidator),
  multi: true
};

@Directive({
  selector: '[nbvMaxlength][formControlName],[nbvMaxlength][formControl],[nbvMaxlength][ngModel]',
  providers: [MaxLength_VALIDATOR]
})
export class MaxlengthValidator implements Validator {
  @Input() nbvMaxlength: number;
  @Input() nbvMaxlengthTitle: string;
  @Input() dest: any;
  @Input() nbvMaxlengthMsgHtml: any;

  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const vClassSuffix = '-nbvMaxlength';
    let iValidated = false;
    // alert('c.value.toString().length = ' + c.value.toString().length);
    // alert('this.nbvMinlength = ' + this.nbvMinlength);
    if (isNullOrUndefined(c.value)) {
      iValidated = false;
    } else {
      if (c.value.toString().length > this.nbvMaxlength) {
        iValidated = true;
      } else {
        iValidated = false;
      }
    }
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvMaxlength, this.nbvMaxlengthTitle, this.nbvMaxlengthMsgHtml, this._ValidationMessage);
      manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this.ValidationConfig);
      return {nbvMaxlength: true};
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
    const vMessage = _ValidationMessage.getMaxLength(valueTitle);
    innerHTML = vMessage.title;
  } else {
    const vMessage = _ValidationMessage.getMaxLength(value);
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
