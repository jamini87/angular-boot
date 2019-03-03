/**
 * Created by Jafar Amini in March 2018.
 */
import {Common} from './common';

export class Validation {
  // ولیدیشن کد ملی
  public static checkCodeMeli(value) {
    const code = Common.Fa2En(value);
    if (value.length >= 8) {
      const c = parseInt(code.substr(9, 1), 10);
      let s = 0;
      for (let i = 0; i < 9; i++) {
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
      }
      s = s % 11;
      if ((s < 2 && c === s) || (s >= 2 && c === (11 - s))) {
        return true;
      }
    }
    return false;
  }
}
