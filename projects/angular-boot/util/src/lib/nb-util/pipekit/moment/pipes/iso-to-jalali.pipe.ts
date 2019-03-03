import {Pipe, PipeTransform} from '@angular/core';
import {Moment} from '../../../toolkit/moment';

@Pipe({
  name: 'isoToJalali'
})
export class IsoToJalaliPipe implements PipeTransform {

  transform(value: any, type: IsoToJalaliType): any {
    switch (type) {
      case 'day':
        return Moment.isoToJDay(value);
      case 'min':
        return Moment.isoToJMin(value);
      case 'sec':
        return Moment.isoToJSec(value);
    }
  }
}

export declare type IsoToJalaliType = 'day' | 'min' | 'sec';
