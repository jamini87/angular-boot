import {PickModel} from './pick-model';

export class DeleteConfirmationResponse {
  confirmed?: boolean;
  pickModel?: PickModel;

  constructor(init: DeleteConfirmationResponse = {}) {
    this.confirmed = init.confirmed;
    this.pickModel = init.pickModel;
  }
}
