/**
 * Created by Jafar Amini in May 2018.
 */
export class PairKeyValueT<T> {
  key: string;
  value: T;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }

  public getValue(key: string, pairKeyValueList: PairKeyValueT<T>[]): any {
    if (pairKeyValueList) {
      for (const pair of pairKeyValueList) {
        if (pair.key === key) {
          return pair.value;
        }
      }
    }
  }
}
