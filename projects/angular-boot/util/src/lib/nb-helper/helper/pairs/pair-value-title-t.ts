/**
 * Created by Jafar Amini in May 2018.
 */
export class PairValueTitleT<T> {
  value: T;
  title: string;

  constructor(value: T, title: string) {
    this.value = value;
    this.title = title;
  }

  // public getValue(key: string, pairKeyValueList: PairValueTitleT<T>[]): any {
  //   if (pairKeyValueList) {
  //     for (const pair of pairKeyValueList) {
  //       if (pair.key === key) {
  //         return pair.value;
  //       }
  //     }
  //   }
  // }
  //
  // public  getTitle(value: T, pairValueTitleTList: PairValueTitleT<T>[]): any {
  //   if (pairValueTitleTList) {
  //     for (let pair of pairValueTitleTList) {
  //       if (pair.value === value) {
  //         return pair.title;
  //       }
  //     }
  //   }
  // }
}
