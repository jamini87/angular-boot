import {GlobalConfigurations} from '@angular-boot/core';

export class GlobalConfigurationsImpl implements GlobalConfigurations {
  getRoutingNoArgument(): string {
    return '-';
  }

  successCreate(msg: { title?: string; text?: string }): any {
  }

  successEdit(msg: { title?: string; text?: string }): any {
  }
}

