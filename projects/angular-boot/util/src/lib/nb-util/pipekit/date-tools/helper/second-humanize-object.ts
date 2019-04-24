import {Toolkit2} from '../../..';

export class SecondHumanizeObject {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor(init: { days?: number, hours?: number, minutes?: number, seconds?: number } = {}) {
    this.days = init.days || 0;
    this.hours = init.hours || 0;
    this.minutes = init.minutes || 0;
    this.seconds = init.seconds || 0;
  }

  getHumanizeString(mode: 'sec' | 'min' = 'min') {
    let finalStr = '';
    if (this.days > 0) {
      finalStr = Toolkit2.Common.En2Fa(this.days) + ' ' + 'روز';
      if (!(this.hours === 0 && this.minutes === 0 && this.seconds === 0)) {
        finalStr = finalStr + ' و ';
      }
    }
    if (this.hours > 0) {
      finalStr = finalStr + Toolkit2.Common.En2Fa(this.hours) + ' ' + 'ساعت';
      if (!(this.minutes === 0 && this.seconds === 0)) {
        finalStr = finalStr + ' و ';
      }
    }
    if (this.minutes > 0) {
      finalStr = finalStr + Toolkit2.Common.En2Fa(this.minutes) + ' ' + 'دقیقه';
      if (this.seconds > 0 && mode === 'sec') {
        finalStr = finalStr + ' و ';
        finalStr = finalStr + Toolkit2.Common.En2Fa(this.seconds) + ' ' + 'ثانیه';
      }
    }
    if (this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds > 0) {
      finalStr = 'چند لحظه پیش';
    }
    return finalStr;
  }
}
