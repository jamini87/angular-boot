/**
 * Edited by Jafar Amini in March 2018.
 */
import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { gt } from './validator';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';
import {ValidationMessage} from '../../util/validation-message';
import {isNullOrUndefined} from '@angular-boot/util';

const GREATER_THAN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => GreaterThanValidator),
  multi: true
};

@Directive({
  selector: '[nbvGt][formControlName],[nbvGt][formControl],[nbvGt][ngModel]',
  providers: [GREATER_THAN_VALIDATOR]
})
export class GreaterThanValidator implements Validator, OnInit, OnChanges {
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  @Input() nbvGt: number;
  @Input() dest: any;
  @Input() nbvGtٰValTitle: any;
  @Input() nbvGtMsgHtml: any;

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {

    this.validator = gt(this.nbvGt);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'nbvGt') {
        this.validator = gt(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
      // if (key === 'des') {
      //   alert(this.des);
      // }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    // return this.validator(c);
    const vClassSuffix = '-nbvGt';
    const iValidated = this.validator(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvGt, this.nbvGtٰValTitle, this.nbvGtMsgHtml, this._ValidationMessage);
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
    const vMessage = _ValidationMessage.getGt(valueTitle);
    innerHTML = vMessage.title;
  } else {
    const vMessage = _ValidationMessage.getGt(value);
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
