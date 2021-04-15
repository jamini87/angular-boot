import {isUndefined} from '../../../../../projects/angular-boot/util/src/lib/nb-util';

export class TableColumn {
  name: string;
  label: string;
  show = true;
  finalLabel: (val?) => any;
  props?: any;

  constructor(init: Partial<TableColumn>) {
    this.name = !isUndefined(init.name) ? init.name : this.name;
    this.label = !isUndefined(init.label) ? init.label : this.label;
    this.show = !isUndefined(init.show) ? init.show : this.show;
    if (!isUndefined(init.finalLabel)) {
      this.finalLabel = init.finalLabel;
    } else {
      this.finalLabel = (val) => {
        return val;
      };
    }
  }
}
