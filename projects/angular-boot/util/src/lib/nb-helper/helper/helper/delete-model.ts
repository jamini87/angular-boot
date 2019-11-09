import {isUndefined} from '../../../nb-util';

export class DeleteModel<T = any> {
  id?: string;
  index?: number;
  title?: string;
  data?: T;

  constructor(init: DeleteModel = {}) {
    !isUndefined(init.id) ? this.id = init.id : this.id = null;
    !isUndefined(init.index) ? this.index = init.index : this.index = null;
    !isUndefined(init.title) ? this.title = init.title : this.title = null;
    !isUndefined(init.data) ? this.data = init.data : this.data = null;
  }
}
