import {PairKeyValueT} from './pair-key-value-t';

export class ObjectUtilT<T> {
  public getObject2KeyValArray(value): PairKeyValueT<T>[] {
    const keys: PairKeyValueT<T>[] = [];
    for (const key in value) {
      keys.push(new PairKeyValueT(key, value[key]));
    }
    return keys;
  }
}
