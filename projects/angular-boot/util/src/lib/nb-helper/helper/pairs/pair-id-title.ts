/**
 * @author Jafar Amini in October 2018.
 */
export class PairIdTitle {
  id: string;
  title: string;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }

  public static getTitle(id: string, pairIdTitleList: PairIdTitle[]): any {
    if (pairIdTitleList) {
      for (let pair of pairIdTitleList) {
        if (pair.id === id) {
          return pair.title;
        }
      }
    }
  }
}
