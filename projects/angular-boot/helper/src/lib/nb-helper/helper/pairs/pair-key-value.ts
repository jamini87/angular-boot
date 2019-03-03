/**
 * Created by Jafar Amini in May 2018.
 */
export class PairKeyValue {
  key: string;
  value: any;

  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

  public static getValue(key: string, pairKeyValueList: PairKeyValue[]): any {
    if (pairKeyValueList) {
      for (let pair of pairKeyValueList) {
        if (pair.key === key) {
          return pair.value;
        }
      }
    }
  }
}
