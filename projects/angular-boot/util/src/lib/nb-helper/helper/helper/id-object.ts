import {isUndefined} from '../../../nb-util';

export class IdObject {
  id: string;

  constructor(id?: string) {
    this.id = !isUndefined(id) ? id : null;
  }
}
