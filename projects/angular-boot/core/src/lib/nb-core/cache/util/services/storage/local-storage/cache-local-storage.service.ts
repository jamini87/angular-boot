import {Injectable} from '@angular/core';
import {CacheStorageAbstract} from '../cache-storage-abstract.service';
import {CacheType} from '../../../enums/cache-type';
import {StorageValueInterface} from '../../../interfaces/storage-value.interface';

/**
 * Service for storing data in local storage
 */
@Injectable({
  providedIn: 'root'
})
export class CacheLocalStorage extends CacheStorageAbstract {

  public getItem(key: string) {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  public setItem(key: string, value: StorageValueInterface) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }

  public type() {
    return CacheType.LOCAL_STORAGE;
  }

  public isEnabled() {
    try {
      const tmp = new Date().getTime();
      localStorage.setItem('test' + tmp, 'test');
      localStorage.removeItem('test' + tmp);
      return true;
    } catch (e) {
      return false;
    }
  }
}
