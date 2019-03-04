/**
 * Created by Jafar Amini in March 2018.
 */
import {ActionMode} from '@angular-boot/util';

export class SectionObject{
  // carouselSelector: string;
  // slideNumber: number;
  // actionMode: ActionMode;
  // id: any = null;
  // index: number = null;
  constructor(public carouselSelector?: string,
              public slideNumber?: number,
              public actionMode?: ActionMode,
              public id?: any,
              public index?: number){}
}

