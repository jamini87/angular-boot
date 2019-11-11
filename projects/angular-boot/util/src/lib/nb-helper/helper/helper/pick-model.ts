import {isUndefined} from '../../../nb-util';

export class PickModel<T = any> {
  id?: string;
  index?: number;
  data?: T;

  constructor(init: PickModel = {}) {
    !isUndefined(init.id) ? this.id = init.id : this.id = null;
    !isUndefined(init.index) ? this.index = init.index : this.index = null;
    !isUndefined(init.data) ? this.data = init.data : this.data = null;
  }
}
