/**
 * Created by Jafar Amini in March 2018.
 */
import {State} from './state';

export class ResponseContent<T> {
  flag: boolean;
  states: State[];
  data: T;
}
