import {ValidationMessageHelper, ValidationMessageImpl} from '@angular-boot/validation';
// import {ValidationMessageHelper} from '@angular-boot/validation';

export class CustomValidationMessageImpl extends ValidationMessageImpl {
  getDigits(): ValidationMessageHelper {
    return new ValidationMessageHelper('فقط ارقام مجازند', '');
  }
}
