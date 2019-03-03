/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { notEqualTo } from './validator';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationMessage} from '../../util/validation-message';
import {isNullOrUndefined} from 'util';
import {ValidationSrcType} from '../../util/validation-src-type';
import {ValidationOptions} from '../../util/validation-options';
import {ValidationConfig} from '../../util/validation-config';

const NOT_EQUAL_TO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotEqualToValidator),
  multi: true
};

@Directive({
  selector: '[nbvNotEqualTo][formControlName],[nbvNotEqualTo][formControl],[nbvNotEqualTo][ngModel]',
  providers: [NOT_EQUAL_TO_VALIDATOR]
})
export class NotEqualToValidator implements Validator, OnInit, OnChanges {
  constructor(private ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  @Input() nbvNotEqualTo: any;
  @Input() dest: any;
  @Input() nbvNotEqualToValTitle: any;
  @Input() nbvNotEqualToMsgHtml: any;
  @Input() validationOptions: ValidationOptions;
  private validator: ValidatorFn;
  private onChange: () => void;
  ngOnInit() {
    this.validator = notEqualTo(this.nbvNotEqualTo, this.validationOptions);
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'nbvNotEqualTo') {
        this.validator = notEqualTo(changes[key].currentValue, this.validationOptions);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c: AbstractControl): {[key: string]: any} {
    // return this.validator(c);
    const vClassSuffix = '-nbvNotEqualTo';
    const iValidated = this.validator(c);
    if (iValidated) {
      let tmpV;
      // alert('OOOOOOOOO------>' + typeof this.notEqualTo);
      if (!isNullOrUndefined(this.validationOptions) &&
        this.validationOptions.validationSrcType === ValidationSrcType.FormControl) {
         tmpV = this.nbvNotEqualTo.value;
      } else if (!isNullOrUndefined(this.validationOptions) &&
        this.validationOptions.validationSrcType === ValidationSrcType.CustomValue){
         tmpV = this.nbvNotEqualTo;
      } else {
         tmpV = this.nbvNotEqualTo;
      }
      const innerHTML = getInnerHTML(tmpV, this.nbvNotEqualToValTitle, this.nbvNotEqualToMsgHtml, this._ValidationMessage);
      manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this.ValidationConfig);
    } else {
      manageDelValidationAlert(this.dest, vClassSuffix);
    }
    return iValidated;
  }
}

export function getInnerHTML(value, valueTitle, msgHtml, _ValidationMessage) {
  let innerHTML;
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  } else if (!isNullOrUndefined(valueTitle)) {
    const vMessage = _ValidationMessage.getNotEqualTo(valueTitle);
    innerHTML = vMessage.title;
  } else {
    const vMessage = _ValidationMessage.getNotEqualTo(value);
    innerHTML = vMessage.title;
  }
  return innerHTML;
}

