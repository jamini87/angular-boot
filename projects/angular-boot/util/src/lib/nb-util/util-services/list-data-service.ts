import {BehaviorSubject} from 'rxjs';
import {ListHolder} from './list-holder';
import {clone} from "@angular-boot/util/lib/nb-util";

export class ListDataService<T> {
  private listHolder: ListHolder<T> = new ListHolder<T>();
  private holderBs = new BehaviorSubject<T[]>(null);
  currentList = this.holderBs.asObservable();

  public trigger() {
    this.holderBs.next(this.listHolder.holder);
  }

  set(value: T []) {
    alert(1);
    this.listHolder.setHolder(value);
    this.trigger();
  }

  push(item: T) {
    this.listHolder.push(item);
    this.trigger();
  }

  update(item: T, getCondition) {
    for (let i = 0; i < this.listHolder.holder.length; i++) {
      if (getCondition(this.listHolder.holder[i])) {
        this.listHolder.holder[i] = clone(item);
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