/**
 * @author Jafar Amini in March 2018.
 */

// Not worked when npm packaging
// import * as moment from 'jalali-moment';


import * as momentImported from 'jalali-moment';

const moment = momentImported;


import {Common} from './common';

export class Moment {


  public static isoToJDay(date) {
    if (date) {
      return moment(date).format('jYYYY/jMM/jDD' as JalaliDateFormats);
    }
  }

  public static isoToJMin(date) {
    if (date) {
      return moment(date).format('HH:mm - jYYYY/jMM/jDD' as JalaliDateFormats);
    }
  }

  public static isoToJSec(date) {
    if (date) {
      return moment(date).format('HH:mm:ss - jYYYY/jMM/jDD' as JalaliDateFormats);
    }
  }


  public static isoToGDay(date) {
    if (date) {
      return moment(date).format('YYYY/MM/DD' as GregorianDateFormats);
    }
  }

  public static isoToGMin(date) {
    if (date) {
      return moment(date).format('HH:mm - YYYY/MM/DD' as GregorianDateFormats);
    }
  }

  public static isoToGSec(date) {
    if (date) {
      return moment(date).format('HH:mm:ss - YYYY/MM/DD' as GregorianDateFormats);
    }
  }


  public static getJaliliDateFromIsoOrFull(date) {
    if (date) {
      return moment(date).format('HH:mm - jYYYY/jMM/jDD');
    }
  }

  public static getGregorianDateFromIsoOrFull(date) {
    if (date) {
      return moment(date).format('HH:mm - YYYY/MM/DD');
    }
  }

  public static convertJaliliToGregorian(jDate) {
    return moment(
      moment(Common.Fa2En(jDate), 'jYYYY/jMM/jDD').toISOString()
    ).format('YYYY/MM/DD');
  }

  public static convertJaliliToGregorianWithTime(jDate) {
    return moment(
      moment(Common.Fa2En(jDate), 'HH:mm - jYYYY/jMM/jDD').toISOString()
    ).format('HH:mm - YYYY/MM/DD');
  }

  public static convertGregorianToJalili(date) {
    return moment(
      moment(Common.Fa2En(date), 'YYYY/MM/DD').toISOString()
    ).format('YYYY/MM/DD');
  }

  public static convertGregorianToJaliliWithTime(date) {
    return moment(
      moment(Common.Fa2En(date), 'HH:mm - YYYY/MM/DD').toISOString())
      .format('HH:mm - YYYY/MM/DD');
  }

  public static convertJaliliToIsoDate(jDate) {
    return moment(Common.Fa2En(jDate), 'jYYYY/jMM/jDD').toISOString();
  }

  public static convertGregorianToIsoDate(jDate) {
    return moment(Common.Fa2En(jDate), 'YYYY/MM/DD').toISOString();
  }

}

export declare type JalaliDateFormats = 'jYYYY/jMM/jDD' | 'HH:mm - jYYYY/jMM/jDD' | 'HH:mm:ss - jYYYY/jMM/jDD';
export declare type GregorianDateFormats = 'YYYY/MM/DD' | 'HH:mm - YYYY/MM/DD' | 'HH:mm:ss - YYYY/MM/DD';
