// /**
//  * @author Jafar Amini
//  */
// import { Injectable } from '@angular/core';
// import {CacheType} from '@angular-boot/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class LanguageUtilService {
//
//   constructor() { }
//   public updateLanguage(cacheService, translateService, that, t?: any) {
//     cacheService.getItem('LOCALE', CacheType.LOCAL_STORAGE)
//       // .pipe(takeUntilDestroyed(that))
//       .subscribe((lang: string) => {
//         translateService.use(lang);
//       });
//   }
// }
