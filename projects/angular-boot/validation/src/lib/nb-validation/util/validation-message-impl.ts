/**
 * @author Jafar Amini in March 2018.
 */
import {isNullOrUndefined} from 'util';
import {ValidationMessageHelper} from './validation-message-helper';

export class ValidationMessageImpl {
  getGt(value) {
    return new ValidationMessageHelper('عدد وارد شده باید بزرگ‌تر از ' + value + ' باشد', null);
  }

  getGte(value) {
    return new ValidationMessageHelper('عدد وارد شده باید بزرگ‌تر یا مساوی ' + value + ' باشد', null);
  }

  getEqualTo(value) {
    return new ValidationMessageHelper('مقدار وارد شده باید برابر با ' + value + ' باشد', null);
  }

  getNotEqualTo(value) {
    return new ValidationMessageHelper('مقدار وارد شده نباید برابر با ' + value + ' باشد', null);
  }

  getEqual(value) {
    return new ValidationMessageHelper('مقدار وارد شده باید برابر با ' + value + ' باشد', null);
  }

  getNotEqual(value) {
    return new ValidationMessageHelper('مقدار وارد شده نباید برابر با ' + value + ' باشد', null);
  }

  getEmail() {
    return new ValidationMessageHelper('ایمیل وارد شده صحیح نیست', null);
  }

  getUrl() {
    return new ValidationMessageHelper('url وارد شده صحیح نیست', null);
  }

  getUuid() {
    return new ValidationMessageHelper('uuid وارد شده صحیح نیست', null);
  }

  getDigits() {
    return new ValidationMessageHelper('فقط ارقام ریاضی مجاز هستند', null);
  }

  getNumber() {
    return new ValidationMessageHelper('مقدار وارد شده باید عدد باشد', null);
  }

  getDateISO_8601() {
    return new ValidationMessageHelper('فرمت وارد شده صحبح نیست',
      `<i class="fa fa-info-circle" aria-hidden="true"></i> مثال 2018/02/15
      `);
  }

  getDate() {
    return new ValidationMessageHelper('فرمت وارد شده صحبح نیست', `
<i class="fa fa-info-circle" aria-hidden="true"></i> مثال
`
    );
  }

  getCreditCard() {
    return new ValidationMessageHelper('کارت اعتباری معتبر نیست', null);
  }

  getBase64() {
    return new ValidationMessageHelper('رشته ورودی base64 نیست', null);
  }

  getJson() {
    return new ValidationMessageHelper('رشته ورودی json نیست', null);
  }

  getLt(value) {
    return new ValidationMessageHelper('عدد وارد شده باید کوچک‌تر از ' + value + ' باشد', null);
  }

  getLte(value) {
    return new ValidationMessageHelper('عدد وارد شده باید کوچک‌تر یا مساوی ' + value + ' باشد', null);
  }

  getMax(value) {
    return new ValidationMessageHelper('مقدار وارد شده نباید بزرگ‌تر از ' + value + ' باشد', null);
  }

  getMaxDate(value) {
    return new ValidationMessageHelper('تاریخ وارد شده نباید بزرگ‌تر از ' + value + ' باشد', null);
  }

  getMin(value) {
    return new ValidationMessageHelper('مقدار وارد شده نباید کوچک‌تر از ' + value + ' باشد', null);
  }

  getMinDate(value) {
    return new ValidationMessageHelper('تاریخ وارد شده نباید کوچک‌تر از ' + value + ' باشد', null);
  }

  getProperty(iValidated: any) {
    let list: string;
    list = `<ul>`;
    for (const prop of iValidated.errorProperty) {
      list = list + `<li>` + prop + `</li>`;
    }
    list = list + `</ul>`;
    return new ValidationMessageHelper('برخی propertyها مقدار ندارند',
      `
      لیست propertyهایی که مقدار ندارند:
      ` + list
    );
  }

  isDigit(value) {
    return /^([0-9]*)$|^([۰-۹]*)$/.test(value);
  }

  getRange(value: {lowerBound: any, upperBound: any}) {
    let v0 = this.isDigit(value.lowerBound) === true ? value.lowerBound - 1 : value.lowerBound;
    let v1 = this.isDigit(value.upperBound) === true ? value.upperBound + 1 : value.upperBound;
    return new ValidationMessageHelper('مقدار وارد شده باید بین ' + v0 + ' و ' + v1 + ' باشد',
      null);
  }

  getRangeLength(value) {
    // alert('isDigit(' + value[0] + ') = ' + this.isDigit(value[0]));
    let v0 = this.isDigit(value[0]) === true ? value[0] - 1 : value[0];
    let v1 = this.isDigit(value[1]) === true ? value[1] + 1 : value[1];
    return new ValidationMessageHelper('طول مقدار وارد شده باید بین ' + v0 + ' و ' + v1 + ' باشد',
      null);
  }

  getMinLength(value) {
    return new ValidationMessageHelper('طول مقدار وارد شده باید بزرگتر مساوی ' + value + ' باشد', null);
  }

  getMaxLength(value: any) {
    return new ValidationMessageHelper('طول مقدار وارد شده باید کوچکتر مساوی ' + value + ' باشد', null);

  }

  getRequired(nbvRequiredFieldLabel: any) {
    if (isNullOrUndefined(nbvRequiredFieldLabel)) {
      return new ValidationMessageHelper('پر کردن این فیلد الزامی است', null);
    } else {
      return new ValidationMessageHelper('پر کردن فیلد ' + nbvRequiredFieldLabel + ' الزامی است', null);
    }
  }

  getDefault() {
    return new ValidationMessageHelper('مقدار وارد شده قابل قبول نیست' , null);

  }
}
