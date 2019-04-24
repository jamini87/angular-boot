import {Injectable} from '@angular/core';
import {CacheSessionStorage} from './util/services/storage/session-storage/cache-session-storage.service';
import {CacheStorageAbstract} from './util/services/storage/cache-storage-abstract.service';
import {CacheLocalStorage} from './util/services/storage/local-storage/cache-local-storage.service';
import {CacheMemoryStorage} from './util/services/storage/memory/cache-memory.service';
import {CacheOptionsInterface} from './util/interfaces/cache-options.interface';
import {CacheType} from './util/enums/cache-type';
import {StorageValueInterface} from './util/interfaces/storage-value.interface';
import {StoredItem} from './helper/stored-item';
import {BehaviorSubject, Observable} from 'rxjs';
import {isNullOrUndefined} from 'util';

// const CACHE_PREFIX = 'CacheService';
const CACHE_PREFIX = '';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CacheService {


  /**
   * Cache prefix
   */
  private _prefix: string = CACHE_PREFIX;

  /**
   * Default cache options
   * CacheOptionsInterface
   */
  private _defaultOptions: CacheOptionsInterface = {
    expires: Number.MAX_VALUE,
    maxAge: Number.MAX_VALUE
  };
  private _defaultStorageType: CacheType.MEMORY;


  localStorageStoredItemList: StoredItem[] = [];
  sessionStorageStoredItemList: StoredItem[] = [];
  memoryStoredItemList: StoredItem[] = [];

  constructor(private localStorage: CacheLocalStorage,
              private sessionStorage: CacheSessionStorage,
              private memoryStorage: CacheMemoryStorage) {
  }


  // Start
  setItem(key: string, value: any, storageType: CacheType, options?: CacheOptionsInterface) {
    this.set(key, value, storageType, options);
    this.setToStoredList(key, value, storageType, true);
  }

  getItem(key: string, storageType: CacheType): Observable<any> {
    const val = this.get(key, storageType);
    if (val !== null) {
      if (isNullOrUndefined(this.getRelatedList(storageType).find(e => e.key === key))) {
        this.setToStoredList(key, val, storageType, true);
      }
      return this.getRelatedList(storageType).find(e => e.key === key).currentValue;
    }
    this.set(key, null, storageType);
    this.setToStoredList(key, null, storageType, false);
    return this.getRelatedList(storageType).find(e => e.key === key).currentValue;
  }

  existsItem(key: string, storageType: CacheType): Observable<boolean> {

    const val = this.get(key, storageType);
    if (val !== null) {
      if (isNullOrUndefined(this.getRelatedList(storageType).find(e => e.key === key))) {
        this.setToStoredList(key, val, storageType, true);
      }
      return this.getRelatedList(storageType).find(e => e.key === key).currentExists;
    }
    if (this.getRelatedList(storageType).find(e => e.key === key) === undefined) {
      return new BehaviorSubject(false);
    }
    return this.getRelatedList(storageType).find(e => e.key === key).currentExists;
  }

  removeItem(key: string, storageType: CacheType) {
    return this.remove(key, storageType);
  }

  // End

  private setToStoredList(key: string, value: any, storageType: CacheType, exists) {
    this.getRelatedList(storageType).push(new StoredItem(key));
    this.getRelatedList(storageType).find(e => e.key === key).changeValue(value);
    this.getRelatedList(storageType).find(e => e.key === key).changExists(exists);
  }

  private getRelatedList(storageType: CacheType): StoredItem[] {
    switch (storageType) {
      case CacheType.LOCAL_STORAGE:
        return this.localStorageStoredItemList;
        break;
      case CacheType.SESSION_STORAGE:
        return this.sessionStorageStoredItemList;
        break;
      case CacheType.MEMORY:
        return this.memoryStoredItemList;
        break;
    }
  }

  /**
   * Get data from cache
   * key
   * {any}
   */
  public get(key: string, storageType: CacheType): any {
    const storageValue = this.getMyValidatedStorage(storageType).getItem(this._toStorageKey(key));
    let value: any = null;
    if (storageValue) {
      if (this._validateStorageValue(storageValue)) {
        value = storageValue.value;
      } else {
        this.remove(key, storageType);
      }
    }
    return value;
  }

  public set(key: string, value: any, storageType: CacheType, options?: CacheOptionsInterface) {
    const storageKey = this._toStorageKey(key);
    options = options ? options : this._defaultOptions;
    if (this.getMyValidatedStorage(storageType)
      .setItem(storageKey, this._toStorageValue(value, options))) {
      if (!this._isSystemKey(key) && options.tag) {
        this._saveTag(options.tag, storageKey, storageType);
      }
      return true;
    }
    return false;
  }


  /**
   * Check if value exists
   * key
   * {boolean}
   */
  public exists(key: string, storageType: CacheType): boolean {
    return !!this.get(key, storageType);
  }

  /**
   * Remove item from cache
   * key
   */
  public remove(key: string, storageType: CacheType) {
    this.getMyValidatedStorage(storageType).removeItem(this._toStorageKey(key));
    this._removeFromTag(this._toStorageKey(key), storageType);
    this.removeFromStoredList(key, storageType);
  }

  /**
   * Remove key from tags keys list
   */
  private _removeFromTag(key: string, storageType: CacheType) {
    const tags = this.get(this._tagsStorageKey(), storageType) || {};
    let index: number;
    for (let tag in tags) {
      index = tags[tag].indexOf(key);
      if (index !== -1) {
        tags[tag].splice(index, 1);
        this.set(this._tagsStorageKey(), tags, storageType);
        break;
      }
    }
  }

  /**
   * Remove all from cache
   */
  public removeAll(storageType: CacheType) {
    this.getMyValidatedStorage(storageType).clear();
  }


  /**
   * Get all tag data
   */
  public getTagData(tag: string, storageType: CacheType) {
    let tags = this.get(this._tagsStorageKey(), storageType) || {};
    let result: { [key: string]: any } = {};
    if (tags[tag]) {
      tags[tag].forEach((key: string) => {
        let data = this.get(this._fromStorageKey(key), storageType);
        if (data) {
          result[this._fromStorageKey(key)] = data;
        }
      });
    }
    return result;
  }


  /**
   * Remove all by tag
   */
  public removeTag(tag: string, storageType: CacheType) {

    storageType = storageType ? storageType : this._defaultStorageType;
    let tags = this.get(this._tagsStorageKey(), storageType) || {};
    if (tags[tag]) {
      tags[tag].forEach((key: string) => {
        this.getMyValidatedStorage(storageType).removeItem(key);
      });
      delete tags[tag];
      this.set(this._tagsStorageKey(), tags, storageType);
    }
  }


  /**
   * Set global cache key prefix
   */
  public setGlobalPrefix(prefix: string) {
    this._prefix = prefix;
  }

  private _toStorageKey(key: string) {
    return this._getCachePrefix() + key;
  }

  private _fromStorageKey(key: string) {
    return key.replace(this._getCachePrefix(), '');
  }

  private _getCachePrefix() {
    return this._prefix;
  }

  private getMyValidatedStorage(storageType: CacheType) {
    switch (storageType) {
      case CacheType.MEMORY:
        return this._validateStorage(this.memoryStorage);
        // return this.memoryStorage;
        break;
      case CacheType.LOCAL_STORAGE:
        return this._validateStorage(this.localStorage);
        // return this.localStorage;
        break;
      case CacheType.SESSION_STORAGE:
        return this._validateStorage(this.sessionStorage);
        // return this.sessionStorage;
        break;
    }
  }

  /**
   * Validate cache storage
   */
  private _validateStorage(cacheStorage: CacheStorageAbstract) {
    if (!cacheStorage.isEnabled()) {
      return this.memoryStorage;
    }
    return cacheStorage;
  }

  /**
   * Validate storage value
   */
  private _validateStorageValue(value: StorageValueInterface) {
    return !!value.options.expires && value.options.expires > Date.now();
  }

  /**
   * Prepare value to set to storage
   */
  private _toStorageValue(value: any, options: CacheOptionsInterface): StorageValueInterface {
    return {
      value: value,
      options: this._toStorageOptions(options)
    };
  }

  /**
   * Prepare options to set to storage
   */
  private _toStorageOptions(options: CacheOptionsInterface): CacheOptionsInterface {
    const storageOptions: CacheOptionsInterface = {};
    storageOptions.expires = options.expires ? options.expires :
      (options.maxAge ? Date.now() + (options.maxAge * 1000) : this._defaultOptions.expires);
    storageOptions.maxAge = options.maxAge ? options.maxAge : this._defaultOptions.maxAge;
    return storageOptions;
  }

  /**
   * Save tag to list of tags
   */
  private _saveTag(tag: string, key: string, storageType: CacheType) {
    const tags = this.get(this._tagsStorageKey(), storageType) || {};
    if (!tags[tag]) {
      tags[tag] = [key];
    } else {
      tags[tag].push(key);
    }
    this.set(this._tagsStorageKey(), tags, storageType);
  }

  private _tagsStorageKey() {
    // return 'CacheService_tags';
    return '';
  }

  /**
   * check if its system cache key
   */
  private _isSystemKey(key: string) {
    return [this._tagsStorageKey()].indexOf(key) !== -1;
  }

  private removeFromStoredList(key: string, storageType: CacheType) {
    this.getRelatedList(storageType).find(e => e.key === key).changeValue(null);
    this.getRelatedList(storageType).find(e => e.key === key).changExists(false);
    this.getRelatedList(storageType).filter(e => {
      return e.key !== key;
    });
  }
}
