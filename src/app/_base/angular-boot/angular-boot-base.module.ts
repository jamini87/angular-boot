import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalConfigurations, ServiceConfig} from '@angular-boot/core';
import {ServiceConfigImpl} from './config/service-config-impl';
import {GlobalConfigurationsImpl} from './config/global-configurations-impl';
import {ValidationConfigImpl} from './config/validation-config-impl';
import {ValidationConfig, ValidationMessage} from '@angular-boot/validation';
import {CustomValidationMessageImpl} from './overrides/custom-validation-message-impl';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: ServiceConfig,
      useClass: ServiceConfigImpl // <--- Defining the swappable implementation.
    },
    {
      provide: ValidationConfig,
      useClass: ValidationConfigImpl
    },
    {
      provide: ValidationMessage,
      useClass: CustomValidationMessageImpl
    },
    {
      provide: GlobalConfigurations,
      useClass: GlobalConfigurationsImpl
    }
  ]
})
export class AngularBootBaseModule {
}
