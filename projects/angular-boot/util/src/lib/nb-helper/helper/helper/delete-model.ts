import {PickModel} from './pick-model';
import {RestRequestStatus} from '../../../shared/types';

export class DeleteModel<T = any> {
  message: string;
  status: RestRequestStatus;
  pickModel: PickModel<T>;
  constructor() {
    this.message = null;
    this.status = 'not-started';
    this.pickModel = new PickModel<T>();
  }
}
