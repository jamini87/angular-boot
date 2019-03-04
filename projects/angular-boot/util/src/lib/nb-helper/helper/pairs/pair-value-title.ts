/**
 * Created by Jafar Amini in October 2018.
 */
export class PairValueTitle {
  value: string;
  title: string;

  constructor(value: string, title: string) {
    this.value = value;
    this.title = title;
  }

  public static getTitle(value: string, pairValueTitleList: PairValueTitle[]): any {
    if (pairValueTitleList) {
      for (let pair of pairValueTitleList) {
        if (pair.value === value) {
          return pair.title;
        }
      }
    }
  }
}
