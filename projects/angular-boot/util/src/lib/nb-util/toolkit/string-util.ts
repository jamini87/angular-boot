/**
 * Created by Jafar Amini in March 2018.
 */
import {isNullOrUndefined} from 'util';
import {PairKeyValue} from "../../nb-helper/helper/pairs";

export class StringUtil {
  public static getShorten(text: string, length: number, extra?: string) {
    let exText = '';
    exText = !isNullOrUndefined(extra) ? ' ' + extra : '...';
    // alert("exText: " + exText);
    return text.substr(0, length) + exText;
    // return text.substr(0,length,)+' '+ !isNullOrUndefined(extra) ? extra : "";
  }

  public static getMatchesByRegix(str, re) {
    const matches: string [][] = new Array();
    let m;
    matches[0] = [];
    matches[1] = [];
    do {
      m = re.exec(str);
      if (m) {
        matches[0].push(m[0]);
        matches[1].push(m[1]);
      }
    } while (m);
    // console.log(matches);
    return matches;
  }

  // لیستی از آبجکت‌های ساده (فاقد تودرتویی) را می‌گیرد و رشته کوئری مربوطه را برمی‌گرداند.
  public static objectListToQueryString(objectList: Object[]): string {
    const finalQueryString: string[] = [];
    for (const object of objectList) {
      finalQueryString.push(this.objectToQueryString(object));
    }
    // return finalQueryString.join('&');
    return finalQueryString.filter(
      item => (item !== '')
    ).join('&');
  }

  // یک آبجکت ساده (فاقد تودرتویی) را می‌گیرد و رشته-کوئری مربوطه را برمی‌گرداند.
  public static objectToQueryString(object: Object): string {
    if (isNullOrUndefined(object))
      return '';
    // let props: Pair1[];
    let props: Array<PairKeyValue> = new Array();
    Object.keys(object).forEach(key => {
        props.push(new PairKeyValue(key, object[key]));
        console.log(key);
      }
    );
    const result = [];
    for (let i = 0; i < props.length; i++) {
      console.log(i + ' ---> ', props[i]);
      result.push([props[i].key, props[i].value]);
    }
    //
    // if (params.offset != null) {
    //   result.push(['_start', params.offset]);
    // }
    // if (params.limit != null) {
    //   result.push(['_limit', params.limit]);
    // }
    // if (params.sortBy != null) {
    //   result.push(['_sort', params.sortBy]);
    // }
    // if (params.sortAsc != null) {
    //   result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    // }
    //
    return result.map(param => param.join('=')).join('&');
  }

  // یک آبجکت ساده (فاقد تودرتویی) و یا یک آبجکت مرکب
  // (دارای تودرتویی) را می‌گیرد و رشته-کوئری مربوطه را برمی‌گرداند.
  public static objectToQueryString2(object: Object): string {
    let finalResult: string[] = [];
    this.object2QueryString(finalResult, object);
    return finalResult.filter(item => (item !== '')).join('&');
  }

  public static object2QueryString(finalResult: string[], object: Object): string {
    if (isNullOrUndefined(object))
      return '';
    // let props: Pair1[];
    let props: Array<PairKeyValue> = new Array();
    Object.keys(object).forEach(key => {
        // alert('key:.... ' + key + '   object[key] = ' + object[key]);
        if (object[key].toString() === '[object Object]') {
          // alert('Wawwwww');
          this.object2QueryString(finalResult, object[key]);
        } else {
          props.push(new PairKeyValue(key, object[key]));
        }
        console.log(key);
      }
    );
    const result = [];
    for (let i = 0; i < props.length; i++) {
      console.log(i + ' ---> ', props[i]);
      result.push([props[i].key, props[i].value]);
    }
    let r = result.map(param => param.join('=')).join('&');
    finalResult.push(r);
    return r;
  }

  public static replaceRange(str, start, end, substitute) {
    return str.substring(0, start) + substitute + str.substring(end);
  }
}
