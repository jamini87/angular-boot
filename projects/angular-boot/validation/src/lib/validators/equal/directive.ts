/**
 * Edited by Jafar Amini in March 2018.
 */
import { Directive, Input, forwardRef, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { equal } from './validator';
import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const EQUAL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualValidator),
  multi: true
};

@Directive({
  selector: '[nbvEqual][formControlName],[nbvEqual][formControl],[nbvEqual][ngModel]',
  providers: [EQUAL_VALIDATOR]
})
export class EqualValidator implements Validator, OnInit, OnChanges {
  @Input() nbvEqual: any;
  @Input() dest: any;
  @Input() nbvEqualٰValueTitle: any;
  @Input() nbvEqualMsgHtml: any;
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = equal(this.nbvEqual);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'nbvEqual') {
        this.validator = equal(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    // return this.validator(c);
    const vClassSuffix = '-nbvEqual';
    const iValidated = this.validator(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvEqual, this.nbvEqualٰValueTitle, this.nbvEqualMsgHtml, this._ValidationMessage);
      manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this.ValidationConfig);
    } else {
      manageDelValidationAlert(this.dest, vClassSuffix);
    }
    return iValidated;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}


export function getInnerHTML(value, valueTitle, msgHtml, _ValidationMessage) {
  let innerHTML;
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  } else if (!isNullOrUndefined(valueTitle)) {
    const vMessage = _ValidationMessage.getEqual(valueTitle);
    innerHTML = vMessage.title;
  } else {
    const vMessage = _ValidationMessage.getEqual(value);
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
