export class DeleteModel<T> {
  id: string;
  index: number;
  title: string;
  loading = false;
  data?: T;
}
