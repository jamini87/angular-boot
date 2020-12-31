import {isNullOrUndefined} from '../util-functions';

export class CaseFormat {
  public static camelCaseToLowerHyphen( myStr ): string {
    if(isNullOrUndefined(myStr)){
      return myStr;
    } else {
      return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
    }
  }

}
