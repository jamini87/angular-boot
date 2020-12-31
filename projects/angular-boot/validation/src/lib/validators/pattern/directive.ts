/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, Validators} from '@angular/forms';

import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const Pattern_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};

@Directive({
  selector: '[nbvPattern][formControlName],[nbvPattern][formControl],[nbvPattern][ngModel]',
  providers: [Pattern_VALIDATOR]
})
export class PatternValidator implements Validator {
  @Input() nbvPattern: string;
  @Input() dest: any;
  @Input() nbvPatternMsgHtml: any;

  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const vClassSuffix = '-nbvPattern';
    // const iValidated = pattern(c, this.nbvPattern);
    let iValidated = false;


    if (isNullOrUndefined(c.value)) {
      iValidated = false;
    } else {
      if (c.value.toString().length === 0) {
        iValidated = false;
      } else if (new RegExp('^' + this.nbvPattern + '$').test(c.value)) {
        iValidated = false;
      } else {
        iValidated = true;
      }
    }


    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvPatternMsgHtml, this._ValidationMessage);
      manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this.ValidationConfig);
      return {'nbvPattern': true};
    } else {
      manageDelValidationAlert(this.dest, vClassSuffix);
      return null;
    }
  }
}

export function getInnerHTML(msgHtml, _ValidationMessage) {
  let innerHTML;
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  } else {
    const vMessage = _ValidationMessage.getDefault();
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
