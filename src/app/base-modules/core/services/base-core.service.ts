import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseCoreService {

  constructor() {
  }

  isDocRtl() {
    console.log('In isDocRtl...');
    if (document.querySelector('html').getAttribute('dir') === 'rtl') {
      return true;
    }
  }
}
