/**
 * @author Jafar Amini in March 2018.
 */
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class DataService {

  private idValueSource = new BehaviorSubject<string>(null);
  currentIdValue = this.idValueSource.asObservable();

  changeIdValue(idValue: string) {
    this.idValueSource.next(idValue);
  }

  constructor() {
  }
}
