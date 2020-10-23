import {BehaviorSubject} from 'rxjs';

export class ObjectDataService<T> {
  private model = new BehaviorSubject<T>(null);
  currentModel = this.model.asObservable();

  changeModel(value: T) {
    this.model.next(value);
  }
}
