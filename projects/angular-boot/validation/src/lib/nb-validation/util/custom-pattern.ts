export class CustomPattern {
  static onlyEnglishLettersWithSpecificLength = class {
    public static getPattern(length: number) {
      return '[a-z]{' + length + '}';
    }
    public static getPatternMsgHtml(length: any) {
      return 'مقدار وارد شده باید حروف انگلیسی و ' + length + ' حرف باشد';
    }
  };
}
