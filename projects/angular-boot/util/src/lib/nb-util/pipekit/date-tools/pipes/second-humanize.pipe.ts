import {Pipe, PipeTransform} from '@angular/core';
import {SecondHumanizeObject} from '../helper/second-humanize-object';
import {DevisionResult} from '../../../../nb-helper/helper/helper/devision-result';

@Pipe({
  name: 'secondHumanize'
})
export class SecondHumanizePipe implements PipeTransform {

  transform(value: any, mode: 'sec' | 'min' = 'min'): any {
    const secondHumanizeObject: SecondHumanizeObject = new SecondHumanizeObject();
    const daySeconds = 86400;
    const hourSeconds = 3600;
    const minSeconds = 60;
    let tmp: DevisionResult;
    tmp = new DevisionResult(value, daySeconds);
    secondHumanizeObject.days = tmp.quotient;
    tmp = new DevisionResult(tmp.remainder, hourSeconds);
    secondHumanizeObject.hours = tmp.quotient;
    tmp = new DevisionResult(tmp.remainder, minSeconds);
    secondHumanizeObject.minutes = tmp.quotient;
    secondHumanizeObject.seconds = tmp.remainder;
    return secondHumanizeObject.getHumanizeString(mode);
  }

}
