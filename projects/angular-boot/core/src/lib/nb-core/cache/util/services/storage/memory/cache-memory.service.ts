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
export class CacheMemoryStorage extends CacheStorageAbstract {

    private _data: {[key: string]: any} = {};

    public getItem(key: string) {
        return this._data[key] ? this._data[key] : null;
    }

    public setItem(key: string, value: StorageValueInterface) {
        this._data[key] = value;
        return true;
    }

    public removeItem(key: string) {
        delete this._data[key];
    }

    public clear() {
        this._data = [];
    }

    public type() {
        return CacheType.MEMORY;
    }

    public isEnabled() {
        return true;
    }
}
