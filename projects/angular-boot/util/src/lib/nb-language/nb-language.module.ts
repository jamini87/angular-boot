import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FindLanguageFromKeyPipe} from './find-language-from-key.pipe';

@NgModule({
  declarations: [FindLanguageFromKeyPipe],
  imports: [
    CommonModule
  ],
  exports: [
    FindLanguageFromKeyPipe
  ]
})
export class NbLanguageModule {
}
