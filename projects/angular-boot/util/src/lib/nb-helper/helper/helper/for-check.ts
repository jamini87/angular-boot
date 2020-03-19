export class ForCheck<T> {
  checked = false;
  data: T;

  constructor(type: (new () => T)) {
    this.checked = false;
    this.data = new type;
  }
}
