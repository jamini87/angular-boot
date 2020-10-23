/**
 * @author Jafar Amini on 2018.
 */
import {PairKeyValueT, PairValueTitleT} from '../../nb-helper/helper/pairs';
import {EnumHandle} from './enum-handle';

export class EnumHandle2<T> {
  getAsValueTitleTList(myEnum): PairValueTitleT<T>[] {
    let value = EnumHandle.getAsObject(myEnum);
    let keys: PairValueTitleT<T>[] = [];
    for (let key in value) {
      // keys.push({value: key, title: value[key]});
      keys.push(new PairValueTitleT<T>(value[key], key));
    }
    return keys;
  }

  getAsKeyValueTList(myEnum, EnumMap): PairKeyValueT<T>[] {
    const value = EnumHandle.getAsObject(myEnum);
    const keyValues: PairKeyValueT<T>[] = [];
    for (const key in value) {
      if (EnumMap.get(key)) {
        keyValues.push(new PairKeyValueT<T>(key, EnumMap.get(key)));
      }
    }
    return keyValues;
  }
}
