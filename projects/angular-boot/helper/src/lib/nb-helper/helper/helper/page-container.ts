export class PageContainer<T> {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  sort: Sort;
  first: boolean;
  size: number;
  number: number;

  constructor() {
    this.content = [];
    this.pageable = new Pageable();
    this.totalPages = null;
    this.totalElements = null;
    this.last = null;
    this.numberOfElements = null;
    this.sort = new Sort();
    this.first = null;
    this.size = null;
    this.number = null;
  }
}

export class Sort {
  unsorted: boolean;
  sorted: boolean;

  constructor() {
    this.unsorted = null;
    this.sorted = null;
  }
}

export class Pageable {
  sort: Sort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;

  constructor() {
    this.sort = new Sort();
    this.pageSize = null;
    this.pageNumber = null;
    this.offset = null;
    this.unpaged = null;
    this.paged = null;
  }
}
