import {Pipe, PipeTransform} from '@angular/core';
import {StringUtil} from '../../../toolkit/string-util';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, length: number, extra?: string): any {
    return value ? StringUtil.getShorten(value, length, extra) : '';
  }

}
