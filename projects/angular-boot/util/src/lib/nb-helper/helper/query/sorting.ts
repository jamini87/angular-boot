/**
 * @author Jafar Amini in May 2018.
 */
import {OrderDirection} from '../../appendix/enums/order-direction.enum';

export class Sorting {
  order: OrderDirection; // Sorting order which can be asc or desc.
  sort: string; // Name of the sort key,
    // for which the default value and the allowed
    // values are different per query implementation.
  constructor(order: OrderDirection, sort: string) {
    this.order = order;
    this.sort = sort;
  }
}
