/**
 * Created by Jafar Amini in March 2018.
 */

export class Config {
  // public static getFakeUrl() {
  //   // return this._fakeUrl;
  //   return '/api/';
  // }
  private static _fakeUrl = '/api/';
  public static getFakeUrl() {
    return Config._fakeUrl;
  }
  public static setFakeUrl(fakeUrl: string) {
    Config._fakeUrl = fakeUrl;
  }
}
