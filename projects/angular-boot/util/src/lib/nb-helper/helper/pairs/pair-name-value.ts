/**
 * @author Jafar Amini in February 2019.
 */
export class PairNameValue {
  name: string;
  value: any;

  constructor(name: string, value: any) {
    this.name = name;
    this.value = value;
  }

  public static getValue(name: string, pairNameValueList: PairNameValue[]): any {
    if (pairNameValueList) {
      for (let pair of pairNameValueList) {
        if (pair.name === name) {
          return pair.value;
        }
      }
    }
  }
}
