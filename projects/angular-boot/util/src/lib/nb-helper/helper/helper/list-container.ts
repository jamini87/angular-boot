import {OrderType} from './order-type';

export class ListContainer<T> {
  total: number;
  start: number;
  sort: string;
  order: OrderType;
  size: number;
  data: Array<T> = new Array();
}
