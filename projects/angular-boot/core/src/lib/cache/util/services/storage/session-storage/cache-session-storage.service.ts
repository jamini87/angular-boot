import {Injectable} from '@angular/core';
import {CacheStorageAbstract} from '../cache-storage-abstract.service';
import {CacheType} from '../../../enums/cache-type';
import {StorageValueInterface} from '../../../interfaces/storage-value.interface';

/**
 * Service for storing data in session storage
 */
@Injectable({
  providedIn: 'root'
})
export class CacheSessionStorage extends CacheStorageAbstract {

  public getItem(key: string) {
    let value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  public setItem(key: string, value: StorageValueInterface) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  public removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  public clear() {
    sessionStorage.clear();
  }

  public type() {
    return CacheType.SESSION_STORAGE;
  }

  public isEnabled() {
    try {
      const tmp = new Date().getTime();
      sessionStorage.setItem('test' + tmp, 'test');
      sessionStorage.removeItem('test' + tmp);
      return true;
    } catch (e) {
      return false;
    }
  }
}
