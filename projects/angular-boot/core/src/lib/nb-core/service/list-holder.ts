export class ListHolder<T> {
  private _holder: T[] = [];

  push(item: T) {
    this._holder.push(item);
  }

  remove(filterFunction) {
    this._holder = this._holder.filter(filterFunction);
  }

  find(filterFunction) {
    return this._holder.filter(filterFunction);
  }

  get holder(): T[] {
    return this._holder;
  }

  setHolder(val: T[]) {
    this._holder = val;
  }
}
