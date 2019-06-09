import {ActivatedRouteSnapshot} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {CaseFormat} from './case-format';
import {UnFlatifyOptions} from './un-flatify-options';
import {PairKeyValue} from "../../nb-helper/helper/pairs";

export class ObjectUtil {
  public static getObjectPropertyFromParamMap(object: Object, route: ActivatedRouteSnapshot) {
    for (let key of route.paramMap.keys) {
      if (object.hasOwnProperty(key))
        object[key] = route.paramMap.get(key);
    }
  }

  public static getObjectPropertyList(object: Object): string[] {
    let propertyList: string[];
    propertyList = Object.getOwnPropertyNames(object);
    return propertyList;
  }

  public static unFlatify(flatParams, dest, options?: UnFlatifyOptions) {
    return ObjectUtil.unFlatify2(flatParams, dest, null, options);
  }

  public static unFlatify2(flatParams, dest, sample, options?: UnFlatifyOptions) {
    let convertCamelToLowerHyphen = false;
    if (isNullOrUndefined(options)) {
      convertCamelToLowerHyphen = false;
    }
    if (!isNullOrUndefined(options) && isNullOrUndefined(options.convertCamelToLowerHyphen)) {
      convertCamelToLowerHyphen = false;
    }
    if (!isNullOrUndefined(options) && !isNullOrUndefined(options.convertCamelToLowerHyphen)) {
      if (options.convertCamelToLowerHyphen) {
        convertCamelToLowerHyphen = true;
      } else {
        convertCamelToLowerHyphen = false;
      }
    }
    // CmnToolkit2.CaseFormat.camelCaseToLowerHyphen(key)
    Object.keys(dest).forEach(key => {
        // alert('key:.... ' + key + '   object[key] = ' + object[key]);
        if (!isNullOrUndefined(dest[key]) && dest[key].toString() === '[object Object]') {
          if (!isNullOrUndefined(sample)) {
            this.unFlatify2(flatParams, dest[key], sample[key], {convertCamelToLowerHyphen: convertCamelToLowerHyphen});
          } else {
            this.unFlatify2(flatParams, dest[key], null, {convertCamelToLowerHyphen: convertCamelToLowerHyphen});
          }
        } else {
          if (convertCamelToLowerHyphen) {
            // alert(typeof sample[key]);
            if (flatParams.hasOwnProperty(CaseFormat.camelCaseToLowerHyphen(key))) {
              if (!isNullOrUndefined(sample) && !isNullOrUndefined(sample[key])) {
                dest[key] = ObjectUtil.getConvertedType(
                  typeof sample[key],
                  flatParams[CaseFormat.camelCaseToLowerHyphen(key)]);
              } else {
                dest[key] = flatParams[CaseFormat.camelCaseToLowerHyphen(key)];
              }

            }
          } else if (!convertCamelToLowerHyphen) {
            if (flatParams.hasOwnProperty(key)) {
              if (!isNullOrUndefined(sample) && !isNullOrUndefined(sample[key])) {
                dest[key] = ObjectUtil.getConvertedType(
                  typeof sample[key], flatParams[key]);
              } else {
                dest[key] = flatParams[key];
              }
            }
          }
        }
      }
    );
    return dest;
  }

  private static getConvertedType(type, data) {
    switch (type) {
      case 'boolean':
        if (data === 'true') {
          data = true;
        } else if (data === 'false') {
          data = false;
        } else {
          data = null;
        }
        break;
      case 'number':
        data = +data;
        break;
      case 'string':
        data = data.toString();
        break;
    }
    return data;
  }


  public static deepClone(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
      return objectpassed;
    }
// give temporary-storage the original obj's constructor
    let temporary_storage = objectpassed.constructor();
    for (var key in objectpassed) {
      temporary_storage[key] = this.deepClone(objectpassed[key]);
    }
    return temporary_storage;
  }


  public static circularDeepClone(obj) {
    var visitedNodes = [];
    var clonedCopy = [];

    function clone(item) {
      if (typeof item === 'object' && !Array.isArray(item)) {
        if (visitedNodes.indexOf(item) === -1) {
          visitedNodes.push(item);
          var cloneObject = {};
          clonedCopy.push(cloneObject);
          for (var i in item) {
            if (item.hasOwnProperty(i)) {
              cloneObject[i] = clone(item[i]);
            }
          }
          return cloneObject;
        } else {
          return clonedCopy[visitedNodes.indexOf(item)];
        }
      } else if (typeof item === 'object' && Array.isArray(item)) {
        if (visitedNodes.indexOf(item) === -1) {
          var cloneArray = [];
          visitedNodes.push(item);
          clonedCopy.push(cloneArray);
          for (var j = 0; j < item.length; j++) {
            cloneArray.push(clone(item[j]));
          }
          return cloneArray;
        } else {
          return clonedCopy[visitedNodes.indexOf(item)];
        }
      }

      return item; // not object, not array, therefore primitive
    }

    return clone(obj);
  }

// // Test deepClone
  // let employeeDetailsOriginal =
  //   {
  //     name: 'Manjula', age: 25, Profession: 'Software Engineer', eye: {
  //       eyeNumber: 9,
  //       color: 'Blue'
  //     }
  //   };
  // let employeeDetailsDuplicate = (Utils.deepClone(employeeDetailsOriginal));
  // employeeDetailsDuplicate.name = 'NameChanged';
  // employeeDetailsOriginal.eye.color = 'Black';
  // console.log('employeeDetailsOriginal', employeeDetailsOriginal);
  // console.log('employeeDetailsDuplicate', employeeDetailsDuplicate);

  public static overlayValues(source, dest) {
    Object.keys(source).forEach(key => {
        // alert('key:.... ' + key + '   object[key] = ' + object[key]);
        if (!isNullOrUndefined(source[key]) && source[key].toString() === '[object Object]') {
          this.overlayValues(source[key], dest[key]);
        } else {
          dest[key] = source[key];
        }
      }
    );
    return dest;
  }

  public static overlayValuesClearDestObjects(source, dest) {
    Object.keys(source).forEach(key => {
        // alert('key:.... ' + key + '   object[key] = ' + object[key]);
        if (!isNullOrUndefined(source[key]) && source[key].toString() === '[object Object]') {
          this.overlayValues(source[key], dest[key]);
        } else {
          dest[key] = source[key];
        }
      }
    );
    return dest;
  }

// یک آبجکت ساده یا مرکب (دارای تودرتویی) را می‌گیرد و یک آبجکت ساده بدون تودرتویی تحویل می‌دهد.
  public static FlatiFy(newObject, object) {
    Object.keys(object).forEach(key => {
        if (!isNullOrUndefined(object[key]) && object[key].toString() === '[object Object]') {
          this.FlatiFy(newObject, object[key]);
        } else {
          newObject[key] = object[key];
        }
      }
    );
    return newObject;
  }

  public static getObject2KeyValArray(value): PairKeyValue[] {
    let keys: PairKeyValue[] = [];
    for (let key in value) {
      keys.push(new PairKeyValue(key, value[key]));
    }
    return keys;
  }

  /**
   *
   * @param obj
   * @param desc
   * Example:
   var obj = {a: {b: {c: 0}}};
   var propPath = getPropPath();  // returns e.g. "a.b.c"
   var result = getDescendantProp(obj, propPath);
   console.log(result); // output: 0
   */
  public static getDescendantProp(obj, desc) {
    var arr = desc.split('.');
    while (arr.length) {
      obj = obj[arr.shift()];
    }
    return obj;
  }

  /**
   *
   * @param obj
   * @param desc
   * @param value
   *
   Example:
   var obj = {a: {b: {c: 0}}};
   var propPath = getPropPath();  // returns e.g. "a.b.c"
   var result = setDescendantProp(obj, propPath, 1);  // test.a.b.c will now be 1
   */
  public static setDescendantProp(obj, desc, value) {
    var arr = desc.split('.');
    while (arr.length > 1) {
      obj = obj[arr.shift()];
    }
    return obj[arr[0]] = value;
  }
}
