/**
 * Edited by Jafar Amini in March 2018.
 */
import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { maxDate } from './validator';
import {ValidationMessage} from '../../util/validation-message';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const MAX_DATE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxDateValidator),
  multi: true
};

@Directive({
  selector: '[nbvMaxDate][formControlName],[nbvMaxDate][formControl],[nbvMaxDate][ngModel]',
  providers: [MAX_DATE_VALIDATOR]
})
export class MaxDateValidator implements Validator, OnInit, OnChanges {
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  @Input() nbvMaxDate;
  @Input() dest: any;
  @Input() nbvMaxDateValTitle: any;
  @Input() nbvMaxDateMsgHtml: any;
  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = maxDate(this.nbvMaxDate);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'nbvMaxDate') {
        this.validator = maxDate(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    // return this.validator(c);

    const vClassSuffix = '-nbvMaxDate';
    const iValidated = this.validator(c);
    if (iValidated) {
      console.log('this.maxDate --->', this.nbvMaxDate);
      const innerHTML = getInnerHTML(this.nbvMaxDate.value, this.nbvMaxDateValTitle, this.nbvMaxDateMsgHtml, this._ValidationMessage);
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
  // alert('msgHtml: ')
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  } else if (!isNullOrUndefined(valueTitle)) {
    const vMessage = _ValidationMessage.getMaxDate(valueTitle);
    innerHTML = vMessage.title;
  } else {
    const vMessage = _ValidationMessage.getMaxDate(value);
    innerHTML = vMessage.title;
  }
  return innerHTML;
}

