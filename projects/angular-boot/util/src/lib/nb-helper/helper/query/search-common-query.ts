/**
 * @author Jafar Amini in May 2018.
 */
import {Paging} from './paging';
import {SpringSorting} from './spring-sorting';
import {isUndefined} from '../../../nb-util';

export class SearchCommonQuery {
  term?: string;
  totalElements?: number;
  paging?: Paging;
  sortings?: SpringSorting[];
  options?: any;

  constructor(init: { term?: string, totalElements?: number, paging?: Paging, sortings?: SpringSorting[], options?: any } = {}) {
    !isUndefined(init.term) ? this.term = init.term : init.term = null;
    !isUndefined(init.totalElements) ? this.totalElements = init.totalElements : init.totalElements = null;
    !isUndefined(init.paging) ? this.paging = init.paging : init.paging = new Paging();
    !isUndefined(init.sortings) ? this.sortings = init.sortings : init.sortings = [];
    !isUndefined(init.options) ? this.options = init.options : init.options = null;
  }
}
