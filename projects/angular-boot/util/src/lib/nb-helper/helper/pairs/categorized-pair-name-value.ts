import {PairNameValue} from './pair-name-value';

export class CategorizedPairNameValue {
  category: string;
  pairNameValueList: PairNameValue[];

  constructor(init: {category?: string, pairNameValueList?: PairNameValue[]} = {}) {
    this.category = init.category || null;
    this.pairNameValueList = init.pairNameValueList || [];
  }
}
