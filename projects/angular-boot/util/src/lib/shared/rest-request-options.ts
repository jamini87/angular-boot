import {RestRequestStatus} from './types';
import {isNullOrUndefined} from '../nb-util';

// export interface IRestRequestOptions {
//   // resetStatusWaitTime?: number;
// }

export class RestRequestOptions {
  status?: RestRequestStatus;
  // resetStatusOnSuccess?: boolean;
  resetStatusWaitTime?: number;

  constructor() {
  // constructor(arg: IRestRequestOptions = {}) {
    this.status = 'not-started';
    // this.resetStatusWaitTime = !isNullOrUndefined(arg.resetStatusWaitTime) ? arg.resetStatusWaitTime : 500;
  }

  // constructor(arg: RestRequestOptions = {}) {
  // this.status = 'not-started';
  // this.resetStatusOnSuccess = !isNullOrUndefined(arg.resetStatusOnSuccess) ? arg.resetStatusOnSuccess : true;
  // this.resetStatusWaitTime = !isNullOrUndefined(arg.resetStatusWaitTime) ? arg.resetStatusWaitTime : 500;
  // }
}
