/**
 * @author Jafar Amini in May 2018.
 */
import {isNullOrUndefined} from '../../../nb-util';

export class Paging {
  page?: number; //  Parameter to allow for paging of the result.
  start?: number; // Parameter to allow for paging of the result.
  size?: number; //  Parameter to allow for paging of the result.
  constructor(page?: number, start?: number, size?: number) {
    // this.page = page || null;
    // this.size = size || null;
    // this.start = start || null;
    if (!isNullOrUndefined(page)) {
      this.page = page;
    } else {
      this.page = null;
    }

    if (!isNullOrUndefined(start)) {
      this.start = start;
    } else {
      this.start = null;
    }

    if (!isNullOrUndefined(size)) {
      this.size = size;
    } else {
      this.size = null;
    }

    // this.page = page ? page : null;
    // this.start = start ? start : null;
    // this.size = size ? size : null;
  }

  public static getSample() {
    return new Paging(1, 1, 1);
  }
}
