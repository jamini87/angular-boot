/**
 * Created by Jafar Amini in March 2018.
 */
export abstract class ValidationConfig {
  abstract getValidationAlertElement(vClass): HTMLElement;
  // {
  //   const myAlert: HTMLElement = document.createElement('div');
  //   myAlert.classList.add('alert');
  //   myAlert.classList.add('alert-danger');
  //   myAlert.classList.add(vClass);
  //   return myAlert;
  // }
}
