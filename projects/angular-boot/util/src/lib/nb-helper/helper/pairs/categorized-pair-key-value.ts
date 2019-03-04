import {PairKeyValue} from './pair-key-value';

export class CategorizedPairKeyValue {
  category: string;
  pairKeyValueList: PairKeyValue[];

  constructor(init: {category?: string, pairKeyValueList?: PairKeyValue[]} = {}) {
    this.category = init.category || null;
    this.pairKeyValueList = init.pairKeyValueList || [];
  }
}
