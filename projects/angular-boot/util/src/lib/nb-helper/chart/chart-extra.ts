/**
 * @author Jafar Amini
 */
export class ChartExtra<T> {
  // private type;
  show: boolean = false;
  query: T;

  constructor(type: (new () => T)) {
    // this.type = type;
    this.show = false;
    this.query = new type;
  }
}
