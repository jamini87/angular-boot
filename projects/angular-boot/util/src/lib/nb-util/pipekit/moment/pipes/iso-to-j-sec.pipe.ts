import {Pipe, PipeTransform} from '@angular/core';
import {Moment} from '../../../toolkit/moment';

@Pipe({
  name: 'isoToJSec'
})
export class IsoToJSecPipe implements PipeTransform {

  transform(value: any): any {
    return Moment.isoToJSec(value);
  }

}
