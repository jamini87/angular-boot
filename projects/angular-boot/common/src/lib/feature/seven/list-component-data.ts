import {PageContainer, SpringSorting} from '@angular-boot/util';
import {isNullOrUndefined} from '@angular-boot/util';

export class ListComponentData<T, RouteParamClazz, QueryParamClazz> {
  queryParam: QueryParamClazz;
  queryParamReal: QueryParamClazz;
  routeParam: RouteParamClazz;
  routeParamReal: RouteParamClazz;
  itemPage: PageContainer<T>;
  indicatorCount: number;
  sizeList: number[] = [5, 10, 15, 20, 25];
  term: string;
  sortings: SpringSorting[];

  constructor(public routeParamClazzType: (new () => RouteParamClazz),
              public queryParamClazzType: (new () => QueryParamClazz)) {
    this.queryParam = new queryParamClazzType();
    this.routeParam = new routeParamClazzType();
    this.queryParamReal = new queryParamClazzType();
    this.routeParamReal = new routeParamClazzType();
    this.itemPage = new PageContainer();
    this.itemPage.content = [];
    this.sortings = [];
  }

  init(init?: {
    sizeList?: number[],
    term?: string,
    sortings?: SpringSorting[]
  }) {
    if (!isNullOrUndefined(init)) {
      this.sortings = init.sortings || [];
      this.term = init.term || '';
      this.sizeList = init.sizeList || [5, 10, 15, 20, 25];
    }
  }
}
