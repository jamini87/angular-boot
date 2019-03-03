import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IsoToJDayPipe} from './pipes/iso-to-jday.pipe';
import {IsoToJMinPipe} from './pipes/iso-to-j-min.pipe';
import {IsoToJSecPipe} from './pipes/iso-to-j-sec.pipe';
import {IsoToJalaliPipe} from './pipes/iso-to-jalali.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IsoToJDayPipe, IsoToJMinPipe, IsoToJSecPipe, IsoToJalaliPipe],
  exports: [
    IsoToJDayPipe,
    IsoToJMinPipe,
    IsoToJSecPipe,
    IsoToJalaliPipe
  ]
})
export class PipeMomentModule {
}
