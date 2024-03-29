/**
 * @author Jafar Amini in March 2018.
 */
import {isNullOrUndefined} from '@angular-boot/util';

export class FakeData {

  constructor() { }
  public static getDomain(domainName: string) {
    let t = JSON.parse(localStorage.getItem(domainName));
    if (isNullOrUndefined(t)) {
      t = new Array<any>();
    }
    return t;
  }
}
