/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, Validators} from '@angular/forms';

import {ValidationMessage} from '../../util/validation-message';
import {isNull, isNullOrUndefined} from 'util';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';

const Required_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};

@Directive({
  selector: '[nbvRequired][formControlName],[nbvRequired][formControl],[nbvRequired][ngModel]',
  providers: [Required_VALIDATOR]
})
export class RequiredValidator implements Validator, OnChanges {
  @Input() dest: any;
  @Input() nbvRequiredMsgHtml: any;
  @Input() nbvRequiredFieldLabel: any;
  @Input() validSubmitted: boolean;
  myValidSubmitted: boolean;

  constructor(private _ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const vClassSuffix = '-nbvRequired';
    let iValidated = false;

    // // Start Method 1 Worked Very Good
    // if (isNullOrUndefined(c.value)) {
    //   iValidated = true;
    // } else if (c.value.toString().length === 0) {
    //   iValidated = true;
    // } else {
    //   iValidated = false;
    // }
    // // End Method 1 Worked Very Good

    // Start Method 2 Worked Very Good
    if (isNull(Validators.required(c))) {
      iValidated = false;
    } else {
      iValidated = Validators.required(c)['required'];
    }
    // End Method 2 Worked Very Good
    if (iValidated) {
      if (c.dirty || this.myValidSubmitted) {
        const innerHTML = getInnerHTML(this.nbvRequiredMsgHtml, this.nbvRequiredFieldLabel, this._ValidationMessage);
        manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this._ValidationConfig);
      }
      return {'nbvRequired': true};
    } else {
      manageDelValidationAlert(this.dest, vClassSuffix);
      return null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('validSubmitted')) {
      this.myValidSubmitted = this.validSubmitted;
    }
  }

  registerOnValidatorChange(fn: () => void): void {
  }
}

export function getInnerHTML(msgHtml, nbvRequiredFieldLabel, _ValidationMessage) {
  let innerHTML;
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  } else {
    const vMessage = _ValidationMessage.getRequired(nbvRequiredFieldLabel);
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
