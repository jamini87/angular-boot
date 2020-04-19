import {isUndefined} from '../../../nb-util';

export class LabelObject {
  label: string;

  constructor(label?: string) {
    if (!isUndefined(label)) {
      this.label = label;
    }
  }
}
