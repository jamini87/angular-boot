/**
 * @author Jafar Amini in October 2018.
 */
export class PairKeyTitle {
  key: string;
  title: string;

  constructor(key: string, title: string) {
    this.key = key;
    this.title = title;
  }

  public static getTitle(key: string, pairKeyTitleList: PairKeyTitle[]): any {
    if (pairKeyTitleList) {
      for (let pair of pairKeyTitleList) {
        if (pair.key === key) {
          return pair.title;
        }
      }
    }
  }
}
