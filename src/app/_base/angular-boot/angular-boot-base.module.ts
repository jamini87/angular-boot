import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CacheService} from '../../../../projects/angular-boot/core/src/lib/cache';
import {GlobalConfigurations, ServiceConfig} from '../../../../projects/angular-boot/core/src/lib/config';
import {ServiceConfigImpl} from './config/service-config-impl';
import {
  ValidationConfig,
  ValidationMessage
} from '../../../../projects/angular-boot/validation/src/lib/util';
import {ValidationConfigImpl} from './config/validation-config-impl';
import {CustomValidationMessageImpl} from './overrides/custom-validation-message-impl';
import {GlobalConfigurationsImpl} from './config/global-configurations-impl';
import {CanDeactivateGuard} from '../../../../projects/angular-boot/common/src/lib/routing';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CacheService,
    {
      provide: ServiceConfig,
      useClass: ServiceConfigImpl, // <--- Defining the swappable implementation.
      deps: [Injector]
    },
    // {
    //   provide: AuthService,
    //   useClass: ServiceConfigImpl // <--- Defining the swappable implementation.
    // }, {
    //   provide: CacheService,
    //   useClass: ServiceConfigImpl // <--- Defining the swappable implementation.
    // },
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
    },
    CanDeactivateGuard
  ]
})
export class AngularBootBaseModule {
}
