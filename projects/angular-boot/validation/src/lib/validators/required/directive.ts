/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, Validators} from '@angular/forms';

import {ValidationMessage} from '../../util/validation-message';
// import {isNull} from 'util';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

function isNull(arg) {
  return arg === null;
}

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
  @Input() submitted: boolean;
  mySubmitted: boolean;
  iValidated = false;
  vClassSuffix = '-nbvRequired';
  abstractControl: AbstractControl;

  constructor(private _ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {
  }

  validate(abstractControl: AbstractControl): { [key: string]: any } {
    this.abstractControl = abstractControl;
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
    if (isNull(Validators.required(abstractControl))) {
      this.iValidated = false;
    } else {
      this.iValidated = Validators.required(abstractControl)['required'];
    }
    return this.manageAlert();
    // End Method 2 Worked Very Good
  }

  private manageAlert() {
    if (this.iValidated) {
      if (this.abstractControl.dirty || this.abstractControl.touched) {
        const innerHTML = getInnerHTML(this.nbvRequiredMsgHtml, this.nbvRequiredFieldLabel, this._ValidationMessage);
        manageAddValidationAlert(this.dest, this.vClassSuffix, innerHTML, this._ValidationConfig);
      }
      return {'nbvRequired': true};
    } else {
      manageDelValidationAlert(this.dest, this.vClassSuffix);
      return null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('submitted')) {
      this.mySubmitted = this.submitted;
      if (this.mySubmitted) {
        this.abstractControl.markAsTouched();
      }
      this.manageAlert();
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
