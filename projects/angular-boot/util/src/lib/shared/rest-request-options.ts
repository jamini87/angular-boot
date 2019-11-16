import {RestRequestStatus} from './types';

export class RestRequestOptions {
  status: RestRequestStatus;

  constructor() {
    this.status = 'not-started';
  }
}
