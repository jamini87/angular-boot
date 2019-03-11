import {Paging} from '@angular-boot/util';

export class ListQueryParam {
  paging: Paging;
  itemId: string;

  constructor() {
    this.paging = new Paging();
    this.itemId = null;
  }
}
