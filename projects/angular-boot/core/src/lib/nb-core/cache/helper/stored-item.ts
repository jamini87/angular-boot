import {BehaviorSubject} from 'rxjs';

export class StoredItem {
  key: string;
  private value = new BehaviorSubject<any>(null);
  private exists = new BehaviorSubject<boolean>(true);
  currentValue = this.value.asObservable();
  currentExists = this.exists.asObservable();

  changeValue(value: any) {
    this.value.next(value);
  }

  changExists(value: boolean) {
    this.exists.next(value);
  }

  constructor(key: string) {
    this.key = key;
  }
}
