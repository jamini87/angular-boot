/**
 * @author Jafar Amini on 2018.
 */
import {PairValueTitle} from "../../nb-helper/helper/pairs";

export class EnumHandle {

  // New Way to convert enum to array Try later
  // // This requires TypeScript 2.1.
  // // If you need older versions, use `string` instead of `keyof E`.
  // interface EnumItem<E> { id: E; name: keyof E; }
  //
  // function enumToArray<E>(Enum: {[keyof E]: E}): EnumItem<E>[] {
  //   return Object.keys(Enum).map(key => ({id: Enum[key], name: key} as EnumItem<E>))
  // }

  /**
   *
   * @param myEnum
   */
  static getAsObject(myEnum) {
    let myOb = new Object();
    let prevKey, prevVal;
    for (let item in myEnum) {
      if (isNaN(Number(item))) {
        // console.log(item, myEnum[item]);
        if (item !== prevVal && myEnum[item] !== prevKey) {
          myOb[item] = myEnum[item];
        }
        prevKey = item;
        prevVal = myEnum[item];
      }
    }
    return myOb;
    // myOb =  Object.keys(this.myEnum).filter(key => !isNaN(Number(this.myEnum[key])));
    // return myOb;
  }

  static getAsValueTitleList(myEnum): PairValueTitle[] {
    let value = EnumHandle.getAsObject(myEnum);
    let keys: PairValueTitle[] = [];
    for (let key in value) {
      // keys.push({value: key, title: value[key]});
      keys.push(new PairValueTitle(key, value[key]));
    }
    return keys;
  }

  static getAsValueList(myEnum): any[] {
    let value = EnumHandle.getAsObject(myEnum);
    let keys: any[] = [];
    for (let key in value) {
      // keys.push({value: key, title: value[key]});
      keys.push(key);
    }
    return keys;
  }

  // getAsEnumList(myEnum): T[] {
  //   let value = EnumHandle.getAsObject(myEnum);
  //   let keys: T[] = [];
  //   for (let key in value) {
  //     // keys.push({value: key, title: value[key]});
  //     keys.push(<T>(<any>key));
  //   }
  //   return keys;
  // }

  static getAsTitleList(myEnum): any[] {
    let value = EnumHandle.getAsObject(myEnum);
    let keys: any[] = [];
    for (let key in value) {
      // keys.push({value: key, title: value[key]});
      keys.push(value[key]);
    }
    return keys;
  }
}
