/**
 * @author Jafar Amini in May 2018.
 */
import {Paging} from './paging';
import {SpringSorting} from './spring-sorting';

export class SearchCommonQuery {
  term?: string;
  totalElements?: number;
  paging?: Paging;
  sortings?: SpringSorting[];
}
