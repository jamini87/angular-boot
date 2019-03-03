import {isNullOrUndefined} from 'util';
import {ErrorHandle} from '../error-handling/error-handle';
import {HandleResponse} from '../response';
import {Subject} from 'rxjs';

export class ResultHandle {
  public static handleResponseContent(result) {
    // if (isNullOrUndefined(result) || isNullOrUndefined(result.flag)) {
    //   ret.next(result);
    // } else
    if (result.flag) {
      return result.data;
    } else if (!result.flag) {
      ErrorHandle.alertMessage(
        HandleResponse.getMessagesAsString(result.states, '<br>')
      );
    }
  }
}
