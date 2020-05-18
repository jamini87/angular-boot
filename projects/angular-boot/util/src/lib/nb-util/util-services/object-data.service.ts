import {ReplaySubject} from 'rxjs';

export class ObjectDataService<T> {
  private model = new ReplaySubject<T>(1);
  currentModel = this.model.asObservable();

  changeModel(value: T) {
    this.model.next(value);
  }
}
