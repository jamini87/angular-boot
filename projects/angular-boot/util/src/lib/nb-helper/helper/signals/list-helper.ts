import {Paging, SpringSorting} from '../query';

export class ListHelper {
  paging: Paging;
  sortings: SpringSorting[];
  term: string;
  options: any;
  constructor(init: { paging?: Paging, sortings?: SpringSorting[], term?: string , options?: any}) {
    this.paging = init.paging || new Paging();
    this.sortings = init.sortings || [];
    this.term = init.term || '';
    this.options = init.options || {};
  }
}
