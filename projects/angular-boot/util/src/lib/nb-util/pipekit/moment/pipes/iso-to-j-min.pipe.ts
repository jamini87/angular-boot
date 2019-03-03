import {Pipe, PipeTransform} from '@angular/core';
import {Moment} from '../../../toolkit/moment';

@Pipe({
  name: 'isoToJMin'
})
export class IsoToJMinPipe implements PipeTransform {

  transform(value: any): any {
    return Moment.isoToJMin(value);
  }

}
