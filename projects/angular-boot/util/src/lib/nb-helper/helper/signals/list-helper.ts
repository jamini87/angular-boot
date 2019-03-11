import {Paging, SpringSorting} from '@angular-boot/util';

export class ListHelper {
  paging: Paging;
  sortings: SpringSorting[];
  term: string;

  constructor(init: { paging?: Paging, sortings?: SpringSorting[], term?: string }) {
    this.paging = init.paging || new Paging();
    this.sortings = init.sortings || [];
    this.term = init.term || '';
  }
}
