import {NgModule} from '@angular/core';



import {arrayLength} from './validators/array-length/validator';
import {base64} from './validators/base64/validator';
import {creditCard} from './validators/credit-card/validator';
import {date} from './validators/date/validator';
import {dateISO_8601} from './validators/date-iso/validator';
import {digits} from './validators/digits/validator';
import {nationalCode} from './validators/national-code/validator';
import {email} from './validators/email/validator';
import {equal} from './validators/equal/validator';
import {equalTo} from './validators/equal-to/validator';
import {gt} from './validators/greater-than/validator';
import {gte} from './validators/greater-than-equal/validator';
import {json} from './validators/json/validator';
import {lt} from './validators/less-than/validator';
import {lte} from './validators/less-than-equal/validator';
import {max} from './validators/max/validator';
import {maxDate} from './validators/max-date/validator';
import {min} from './validators/min/validator';
import {minDate} from './validators/min-date/validator';
import {notEqual} from './validators/not-equal/validator';
import {notEqualTo} from './validators/not-equal-to/validator';
import {number} from './validators/number/validator';
import {property} from './validators/property/validator';
import {range} from './validators/range/validator';
import {rangeLength} from './validators/range-length/validator';
import {uuid} from './validators/uuid/validator';
import {url} from './validators/url/validator';



import {ArrayLengthValidator} from './validators/array-length/directive';
import {Base64Validator} from './validators/base64/directive';
import {CreditCardValidator} from './validators/credit-card/directive';
import {DateValidator} from './validators/date/directive';
import {DateISOValidator} from './validators/date-iso/directive';
import {DigitsValidator} from './validators/digits/directive';
import {EmailValidator} from './validators/email/directive';
import {EqualValidator} from './validators/equal/directive';
import {EqualToValidator} from './validators/equal-to/directive';
import {GreaterThanValidator} from './validators/greater-than/directive';
import {GreaterThanEqualValidator} from './validators/greater-than-equal/directive';
import {JSONValidator} from './validators/json/directive';
import {LessThanValidator} from './validators/less-than/directive';
import {LessThanEqualValidator} from './validators/less-than-equal/directive';
import {MaxValidator} from './validators/max/directive';
import {MaxDateValidator} from './validators/max-date/directive';
import {MinValidator} from './validators/min/directive';
import {MinDateValidator} from './validators/min-date/directive';
import {NotEqualValidator} from './validators/not-equal/directive';
import {NotEqualToValidator} from './validators/not-equal-to/directive';
import {NumberValidator} from './validators/number/directive';
import {PropertyValidator} from './validators/property/directive';
import {RangeValidator} from './validators/range/directive';
import {RangeLengthValidator} from './validators/range-length/directive';
import {UrlValidator} from './validators/url/directive';
import {UUIDValidator} from './validators/uuid/directive';
import {MinlengthValidator} from './validators/min-length/directive';
import {RequiredValidator} from './validators/required/directive';
import {MaxlengthValidator} from './validators/max-length/directive';
import {PatternValidator} from './validators/pattern/directive';
import {NationalCodeValidator} from './validators/national-code/directive';
export const NbValidators: any = {
  arrayLength,
  base64,
  creditCard,
  date,
  dateISO_8601,
  digits,
  email,
  equal,
  equalTo,
  gt,
  gte,
  json,
  lt,
  lte,
  max,
  maxDate,
  min,
  minDate,
  notEqual,
  notEqualTo,
  number,
  property,
  range,
  rangeLength,
  url,
  uuid,
  nationalCode
};

const CustomDirectives = [
  ArrayLengthValidator,
  Base64Validator,
  CreditCardValidator,
  DateValidator,
  DateISOValidator,
  DigitsValidator,
  EmailValidator,
  EqualValidator,
  EqualToValidator,
  GreaterThanValidator,
  GreaterThanEqualValidator,
  JSONValidator,
  LessThanValidator,
  LessThanEqualValidator,
  MaxValidator,
  MaxDateValidator,
  MinValidator,
  MinDateValidator,
  NotEqualValidator,
  NotEqualToValidator,
  NumberValidator,
  PropertyValidator,
  RangeValidator,
  RangeLengthValidator,
  UrlValidator,
  UUIDValidator,
  MinlengthValidator,
  MaxlengthValidator,
  RequiredValidator,
  PatternValidator,
  NationalCodeValidator
];

@NgModule({
  declarations: [CustomDirectives],
  exports: [CustomDirectives]
})
export class NbValidationModule {
}
