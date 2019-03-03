/**
 * Created by Jafar Amini in March 2018.
 */
import {Keyword} from './keyword';
import {State} from './state';

export class HandleResponse {

public static getMessagesAsString(states: State[], separator: string): string {
    let totalMessage = '';
    for (const state of states) {
      if (state.message !== '') {
        totalMessage = totalMessage + separator + state.message;
      } else {
        totalMessage = totalMessage + separator + Keyword[state.keyword];
      }
    }
    return totalMessage;
  }

    public static getMessagesAsArray(states: State[]): string[] {
      const totalMessage: Array<string> = new Array();
      for (const state of states) {
          if (state.message !== '') {
              totalMessage.push(state.message);
          }
          else {
            totalMessage.push(Keyword[state.keyword]);
          }
      }
      return totalMessage;
    }
}
