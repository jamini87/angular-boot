import {DeleteModel} from './delete-model';

export class DeleteConfirmationResponse {
  confirmed?: boolean;
  deleteModel?: DeleteModel;

  constructor(init: DeleteConfirmationResponse = {}) {
    this.confirmed = init.confirmed;
    this.deleteModel = init.deleteModel;
  }
}
