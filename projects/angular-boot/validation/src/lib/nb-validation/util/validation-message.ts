import {ValidationMessageHelper} from './validation-message-helper';

export abstract class ValidationMessage {
  abstract getGt(value):ValidationMessageHelper;

  abstract getGte(value):ValidationMessageHelper;

  abstract getEqualTo(value):ValidationMessageHelper;

  abstract getNotEqualTo(value):ValidationMessageHelper;

  abstract getEqual(value):ValidationMessageHelper;

  abstract getNotEqual(value):ValidationMessageHelper;

  abstract getEmail():ValidationMessageHelper;

  abstract getUrl():ValidationMessageHelper;

  abstract getUuid():ValidationMessageHelper;

  abstract getDigits():ValidationMessageHelper;

  abstract getNumber():ValidationMessageHelper;

  abstract getDateISO_8601():ValidationMessageHelper;

  abstract getDate():ValidationMessageHelper;

  abstract getCreditCard():ValidationMessageHelper;

  abstract getBase64():ValidationMessageHelper;

  abstract getJson():ValidationMessageHelper;

  abstract getLt(value):ValidationMessageHelper;

  abstract getLte(value):ValidationMessageHelper;

  abstract getMax(value):ValidationMessageHelper;

  abstract getMaxDate(value):ValidationMessageHelper;

  abstract getMin(value):ValidationMessageHelper;

  abstract getMinDate(value):ValidationMessageHelper;

  abstract getProperty(iValidated: any):ValidationMessageHelper;

  abstract getRange(value: {lowerBound: any, upperBound: any}):ValidationMessageHelper;

  abstract getRangeLength(value):ValidationMessageHelper;

  abstract getMinLength(value):ValidationMessageHelper;

  abstract getMaxLength(value: any):ValidationMessageHelper;

  abstract getRequired(nbvRequiredFieldLabel: any):ValidationMessageHelper;

  abstract getDefault():ValidationMessageHelper;
}
