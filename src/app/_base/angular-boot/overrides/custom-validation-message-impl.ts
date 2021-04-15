import {ValidationMessageHelper, ValidationMessageImpl} from '../../../../../projects/angular-boot/validation/src/lib/util';

export class CustomValidationMessageImpl extends ValidationMessageImpl {
  getDigits(): ValidationMessageHelper {
    return new ValidationMessageHelper('فقط ارقام مجازند', '');
  }
}
