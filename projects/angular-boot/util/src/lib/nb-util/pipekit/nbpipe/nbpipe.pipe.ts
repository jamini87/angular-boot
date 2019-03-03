import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'nbpipe'
})
export class NbpipePipe implements PipeTransform {
  transform(value, mappingFunction: Function) {
    return mappingFunction(value);
  }

}
