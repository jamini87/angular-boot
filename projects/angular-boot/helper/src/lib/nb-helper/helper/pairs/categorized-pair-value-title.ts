import {PairValueTitle} from './pair-value-title';

export class CategorizedPairValueTitle {
  category: string;
  pairValueTitleList: PairValueTitle[];

  constructor(init: { category?: string, pairValueTitleList?: PairValueTitle[] } = {}) {
    this.category = init.category || null;
    this.pairValueTitleList = init.pairValueTitleList || [];
  }
}
