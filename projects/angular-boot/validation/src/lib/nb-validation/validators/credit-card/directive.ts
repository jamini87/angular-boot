/**
 * Edited by Jafar Amini in March 2018.
 */
import {Directive, forwardRef, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { creditCard } from './validator';
import {ValidationMessage} from '../../util/validation-message';
import {isNullOrUndefined} from 'util';
import {manageAddValidationAlert, manageDelValidationAlert} from '../../util/validation-functions';
import {ValidationConfig} from '../../util/validation-config';

const CREDIT_CARD_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CreditCardValidator),
  multi: true
};

@Directive({
  selector: '[nbvCreditCard][formControlName],[nbvCreditCard][formControl],[nbvCreditCard][ngModel]',
  providers: [CREDIT_CARD_VALIDATOR]
})
export class CreditCardValidator implements Validator {
  @Input() dest: any;
  @Input() nbvCreditCardMsgHtml: any;
  constructor(private _ValidationConfig: ValidationConfig, private _ValidationMessage: ValidationMessage) {}
  validate(c: AbstractControl): {[key: string]: any} {
    // return creditCard(c);
    const vClassSuffix = '-nbvCreditCard';
    const iValidated = creditCard(c);
    if (iValidated) {
      const innerHTML = getInnerHTML(this.nbvCreditCardMsgHtml, this._ValidationMessage);
      manageAddValidationAlert(this.dest, vClassSuffix, innerHTML, this._ValidationConfig);
    } else {
      manageDelValidationAlert(this.dest, vClassSuffix)
    }
    return iValidated;
  }
}

export function getInnerHTML(msgHtml, _ValidationMessage) {
  let innerHTML;
  if (!isNullOrUndefined(msgHtml)) {
    innerHTML = msgHtml;
  }  else {
    const vMessage = _ValidationMessage.getCreditCard();
    innerHTML = vMessage.title;
  }
  return innerHTML;
}
