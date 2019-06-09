import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {languages} from './language.details';

@Pipe({name: 'findLanguageFromKey'})
@Injectable({providedIn: 'root'})
export class FindLanguageFromKeyPipe implements PipeTransform {
    transform(lang: string): string {
      return languages[lang].name;
        // return this.languages[lang].name;
    }
    isRTL(lang: string): boolean {
        return languages[lang].rtl;
    }
}
