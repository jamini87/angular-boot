export class ListHolder<T> {
  private _list: T[] = [];

  push(item: T) {
    this._list.push(item);
  }

  remove(filterFunction: (e: T) => any) {
    this._list = this._list.filter(filterFunction);
  }

  find(filterFunction: (e: T) => any) {
    return this._list.filter(filterFunction);
  }

  get list(): T[] {
    return this._list;
  }

  setList(val: T[]) {
    this._list = val;
  }
}
