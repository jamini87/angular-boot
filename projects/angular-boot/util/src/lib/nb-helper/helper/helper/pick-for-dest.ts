export class PickForDest<T> {
  index: number;
  id: any;
  data: T;

  constructor(data: T, index: number, id?: any) {
    this.data = data;
    this.index = index;
    this.id = id;
  }
}
