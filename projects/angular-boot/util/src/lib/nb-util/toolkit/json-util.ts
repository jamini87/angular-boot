import {PairKeyValue} from "../../nb-helper/helper/pairs";

export class JsonUtil {
  public static isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  public static convertFlatObjectToPairArray(obj: any, keyString: string, valString: string) {
    let props: Array<PairKeyValue> = this.toPairArray(obj);
    let finalArray: any[] = [];
    for (let i = 0; i < props.length; i++) {
      finalArray.push({name: props[i].key, value: props[i].value});
    }
    return finalArray;
    // for (let key in obj) {
    //   console.log('      key:', key, 'value:', obj[key]);
    // }
  }


  public static toPairArray(object: any): Array<PairKeyValue> {
    let props: Array<PairKeyValue> = new Array();
    Object
      .keys(object)
      .forEach(key => {
          if (object[key].toString() === '[object Object]') {
            this.toPairArray(object[key]);
          } else {
            props.push(new PairKeyValue(key, object[key]));
          }
          // console.log(key);
        }
      );
    return props;
    // for (let key in obj) {
    //   console.log('      key:', key, 'value:', obj[key]);
    // }
  }
}
