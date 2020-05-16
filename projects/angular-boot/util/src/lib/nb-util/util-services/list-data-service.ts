import {BehaviorSubject} from 'rxjs';
import {ListHolder} from './list-holder';
import {clone} from '../util-functions';

export class ListDataService<T> {
  private listHolder: ListHolder<T> = new ListHolder<T>();
  private holderBs = new BehaviorSubject<T[]>(null);
  currentList = this.holderBs.asObservable();

  public trigger() {
    this.holderBs.next(this.listHolder.list);
  }

  set(value: T []) {
    alert(1);
    this.listHolder.setList(value);
    this.trigger();
  }

  getList() {
    return this.listHolder.list;
  }

  push(item: T) {
    this.listHolder.push(item);
    this.trigger();
  }

  update(item: T, getCondition) {
    for (let i = 0; i < this.listHolder.list.length; i++) {
      if (getCondition(this.listHolder.list[i])) {
        this.listHolder.list[i] = clone(item);
        break;
      }
    }
    this.trigger();
  }

  remove(filterFunction) {
    this.listHolder.remove(filterFunction);
    this.trigger();
  }

  find(filterFunction) {
    return this.listHolder.find(filterFunction);
  }
}
