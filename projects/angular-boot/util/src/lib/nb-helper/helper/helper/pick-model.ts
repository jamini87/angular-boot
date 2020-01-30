import {isUndefined} from '../../../nb-util';

export class PickModel<T = any> {
  id?: string;
  index?: number;
  data?: T;

  constructor(Type?: (new () => T), init: PickModel = {}) {
    !isUndefined(init.id) ? this.id = init.id : this.id = null;
    !isUndefined(init.index) ? this.index = init.index : this.index = null;
    !isUndefined(init.data) ? this.data = init.data : Object.assign(this.data, {});
  }


  // constructor(Type?: (new () => T), init: PickModel = {}) {
  //   !isUndefined(init.id) ? this.id = init.id : this.id = null;
  //   !isUndefined(init.index) ? this.index = init.index : this.index = null;
  //   if (Type) {
  //     !isUndefined(init.data) ? this.data = init.data : this.data = new Type;
  //   } else {
  //     !isUndefined(init.data) ? this.data = init.data : Object.assign(this.data, {});
  //   }
  // }
  // constructor(init: PickModel = {}) {
  //   !isUndefined(init.id) ? this.id = init.id : this.id = null;
  //   !isUndefined(init.index) ? this.index = init.index : this.index = null;
  //   !isUndefined(init.data) ? this.data = init.data : Object.assign(this.data, {});
  // }
}
