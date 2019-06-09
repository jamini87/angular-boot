import {Injectable, RendererFactory2, Renderer2} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, ActivatedRouteSnapshot} from '@angular/router';


import {FindLanguageFromKeyPipe} from './find-language-from-key.pipe';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class LanguageHelper {
  renderer: Renderer2 = null;

  constructor(
    private translateService: TranslateService,
    // tslint:disable-next-line: no-unused-variable
    private rootRenderer: RendererFactory2,
    private findLanguageFromKeyPipe: FindLanguageFromKeyPipe,
    private titleService: Title,
    private router: Router
  ) {
    this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
    this.init();
  }

  switchLanguage(languageKey: string) {
    this.translateService.use(languageKey);
    // this.accessToLabelsFromTypescript();
  }

  setDefaultLang(lang) {
    this.translateService.setDefaultLang(lang);
  }

  // /**
  //  * Sample that shows we can access to labels value in current language
  //  */
  // accessToLabelsFromTypescript() {
  //   const intro = this.translateService.instant('Intro');
  //   console.log(intro);
  // }

  setLanguageList(languageCodes, set) {
    this.getAll(languageCodes).then((langs) => {
      set(langs);
    });
  }

  getAll(LANGUAGES): Promise<any> {
    return Promise.resolve(LANGUAGES);
  }

  /**
   * Update the window title using params in the following
   * order:
   * 1. titleKey parameter
   * 2. $state.$current.data.pageTitle (current state page title)
   * 3. 'global.title'
   */
  updateTitle(titleKey?: string) {
    if (!titleKey) {
      titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
    }

    this.translateService.get(titleKey).subscribe((title) => {
      this.titleService.setTitle(title);
    });
  }

  private init() {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.renderer.setAttribute(document.querySelector('html'), 'lang', this.translateService.currentLang);
      this.updateTitle();
      this.updatePageDirection();
    });
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title: string = (routeSnapshot.data && routeSnapshot.data.pageTitle) ?
      routeSnapshot.data.pageTitle : 'myapp5App';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  private updatePageDirection() {
    this.renderer.setAttribute(document.querySelector('html'), 'dir'
      , this.findLanguageFromKeyPipe.isRTL(this.translateService.currentLang) ? 'rtl' : 'ltr');
  }
}
