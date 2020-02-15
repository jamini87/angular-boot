/**
 * @author Jafar Amini in March 2018.
 */

// Not worked when npm packaging
// import * as moment from 'jalali-moment';


import * as jalaliMomentImported from 'jalali-moment';
import * as momentImported from 'moment';
const jalaliMoment = jalaliMomentImported;
const moment = momentImported;


import {Common} from './common';

export class Moment {
  // *************************************
  public static isoToJalaliFormat(date, format: JalaliDateFormats) {
    return jalaliMoment(moment(date, 'YYYY-MM-DDTHH:mm:ss.SSZ').toString()).format(format);
  }

  public static isoToJDay(date) {
    if (date) {
      return Moment.isoToJalaliFormat(date, 'jYYYY/jMM/jDD');
    }
  }

  public static isoToJMin(date) {
    if (date) {
      return Moment.isoToJalaliFormat(date, 'HH:mm - jYYYY/jMM/jDD');
    }
  }

  public static isoToJSec(date) {
    if (date) {
      return Moment.isoToJalaliFormat(date, 'HH:mm:ss - jYYYY/jMM/jDD');
    }
  }
// *************************************
  public static isoToGregorianFormat(date, format: GregorianDateFormats) {
    return moment(date).format(format);
  }
  public static isoToGDay(date) {
    if (date) {
      return Moment.isoToGregorianFormat(date, 'YYYY/MM/DD');
    }
  }

  public static isoToGMin(date) {
    if (date) {
      return Moment.isoToGregorianFormat(date, 'HH:mm - YYYY/MM/DD');
    }
  }

  public static isoToGSec(date) {
    if (date) {
      return Moment.isoToGregorianFormat(date, 'HH:mm:ss - YYYY/MM/DD');
    }
  }
// *************************************

  public static getJaliliDateFromIsoOrFull(date) {
    if (date) {
      return jalaliMoment(date).format('HH:mm - jYYYY/jMM/jDD');
    }
  }

  public static getGregorianDateFromIsoOrFull(date) {
    if (date) {
      return jalaliMoment(date).format('HH:mm - YYYY/MM/DD');
    }
  }

  public static convertJaliliToGregorian(jDate) {
    return jalaliMoment(
      jalaliMoment(Common.Fa2En(jDate), 'jYYYY/jMM/jDD').toISOString()
    ).format('YYYY/MM/DD');
  }

  public static convertJaliliToGregorianWithTime(jDate) {
    return jalaliMoment(
      jalaliMoment(Common.Fa2En(jDate), 'HH:mm - jYYYY/jMM/jDD').toISOString()
    ).format('HH:mm - YYYY/MM/DD');
  }

  public static convertGregorianToJalili(date) {
    return jalaliMoment(
      jalaliMoment(Common.Fa2En(date), 'YYYY/MM/DD').toISOString()
    ).format('YYYY/MM/DD');
  }

  public static convertGregorianToJaliliWithTime(date) {
    return jalaliMoment(
      jalaliMoment(Common.Fa2En(date), 'HH:mm - YYYY/MM/DD').toISOString())
      .format('HH:mm - YYYY/MM/DD');
  }

  public static convertJaliliToIsoDate(jDate) {
    return jalaliMoment(Common.Fa2En(jDate), 'jYYYY/jMM/jDD').toISOString();
  }

  public static convertGregorianToIsoDate(jDate) {
    return jalaliMoment(Common.Fa2En(jDate), 'YYYY/MM/DD').toISOString();
  }

}

export declare type JalaliDateFormats = 'jYYYY/jMM/jDD' | 'HH:mm - jYYYY/jMM/jDD' | 'HH:mm:ss - jYYYY/jMM/jDD';
export declare type GregorianDateFormats = 'YYYY/MM/DD' | 'HH:mm - YYYY/MM/DD' | 'HH:mm:ss - YYYY/MM/DD';
