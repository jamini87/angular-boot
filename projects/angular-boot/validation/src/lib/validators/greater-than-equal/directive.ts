/**
 * Edited by Jafar Amini in March 2018.
 */
import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { gte } from './validator';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationMessage} from '../../util/validation-message';
import {ValidationConfig} from '../../util/validation-config';
import {isNullOrUndefined} from '@angular-boot/util';

const GREATER_THAN_EQUAL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => GreaterThanEqualValidator),
  multi: true
};

@Directive({
  selector: '[nbvGte][formControlName],[nbvGte][formControl],[nbvGte][ngModel]',
  providers: [GREATER_THAN_EQUAL_VALIDATOR]
})
export class GreaterThanEqualValidator implements Validator, OnInit, OnChanges {
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  @Input() nbvGte: number;
  @Input() dest: any;
  @Input() nbvGteٰValTitle: any;
  @Input() nbvGteMsgHtml: any;
  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = gte(this.nbvGte);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'nbvGte') {
        this.validator = gte(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    // return this.validator(c);
    const vClassSuffix = '-nbvGte';
    const iValidated = this.validator(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvGte, this.nbvGteٰValTitle, this.nbvGteMsgHtml, this._ValidationMessage);
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
    const vMessage = _ValidationMessage.getGte(valueTitle);
    innerHTML = vMessage.title;
  } else {
    const vMessage = _ValidationMessage.getGte(value);
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
