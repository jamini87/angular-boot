import {Pipe, PipeTransform} from '@angular/core';
import {Moment} from '../../../toolkit/moment';

@Pipe({
  name: 'isoToJDay'
})
export class IsoToJDayPipe implements PipeTransform {
  transform(value: any): any {
    return Moment.isoToJDay(value);
  }
}
