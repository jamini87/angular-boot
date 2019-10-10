/**
 * @author Jafar Amini in March 2018.
 */
import {ValidationConfig} from '@angular-boot/validation';

export class ValidationConfigImpl extends ValidationConfig {
  getValidationAlertElement(vClass): HTMLElement {
    const myAlert: HTMLElement = document.createElement('div');
    myAlert.classList.add('alert');
    myAlert.classList.add('alert-warning');
    myAlert.classList.add(vClass);
    return myAlert;
  }
}
