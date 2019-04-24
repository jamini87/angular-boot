/**
 * @author Jafar Amini in March 2018.
 */
import {isNullOrUndefined} from 'util';

export class Common {
  public static create(){
    return new Common();
  }
  public static checkIsNullOrUndefined(value) {
    return isNullOrUndefined(value);
  }

  // تبدیل اعداد انگلیسی به فارسی
  public static En2Fa(value: any): any {
    const englishNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
    const persianNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (isNullOrUndefined(value))
      return value;
    let myvalue: string = value.toString();
    if (!isNullOrUndefined(value)) {
      for (let i = 0, numbersLen = persianNumbers.length; i < numbersLen; i++) {
        myvalue = myvalue.replace(new RegExp(persianNumbers[i], 'g'), englishNumbers[i]);
      }
    }
    return myvalue;
  }

  // تبدیل اعداد فارسی به انگلیسی
  public static Fa2En(value: any): any {
    const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
    if (isNullOrUndefined(value))
      return value;
    let myvalue: string = value.toString();
    if (!isNullOrUndefined(value)) {
      for (let i = 0, numbersLen = persianNumbers.length; i < numbersLen; i++) {
        myvalue = myvalue.replace(new RegExp(persianNumbers[i], 'g'), englishNumbers[i]);
      }
    }

    return myvalue;
  }

  public uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }
}
