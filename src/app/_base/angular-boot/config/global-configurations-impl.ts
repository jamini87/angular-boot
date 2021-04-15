import {GlobalConfigurations} from '../../../../../projects/angular-boot/core/src/lib/config';

export class GlobalConfigurationsImpl implements GlobalConfigurations {
  getRoutingNoArgument(): string {
    return '-';
  }

  successCreate(msg: { title?: string; text?: string }): any {
  }

  successEdit(msg: { title?: string; text?: string }): any {
  }
}

