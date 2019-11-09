export class DeleteModel<T = any> {
  id: string;
  index: number;
  title: string;
  loading = false;
  data?: T;
}
