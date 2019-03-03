/**
 * Edited by Jafar Amini in March 2018.
 */
import {isNullOrUndefined} from 'util';
import {ValidationConfig} from './validation-config';

export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

export function isDate(obj: any): boolean {
  return !/Invalid|NaN/.test(new Date(obj).toString());
}

export function parseDate(obj: any): string {
  try {
    if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
      return obj.year + '-' + obj.month + '-' + obj.day;
    }
  } catch (e) {}
  return obj;
}

// -----------------------------
export function deleteElementByClassName(className) {
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

// -----------------------------


// -----------------------------
export function addValidationEl(dest, vClassSuffix, innerHtml, _ValidationConfig: ValidationConfig) {
  deleteElementByClassName(dest + vClassSuffix);
  document.getElementById(dest).appendChild(
    getMyValidationElement(dest, vClassSuffix, innerHtml, _ValidationConfig));
}
export function delValidationEl(dest, vClassSuffix) {
  deleteElementByClassName(dest + vClassSuffix);
}
export function getMyValidationElement(dest, vClassSuffix, innerHtml, _ValidationConfig: ValidationConfig) {
  const myEl = _ValidationConfig.getValidationAlertElement(dest + vClassSuffix);
  myEl.innerHTML = innerHtml;
  return myEl;
}
// -----------------------------

// export function getValidationAlertElement(vClass): HTMLElement {
//   const myAlert: HTMLElement = document.createElement('div');
//   myAlert.classList.add('alert');
//   myAlert.classList.add('alert-danger');
//   myAlert.classList.add(vClass);
//   return myAlert;
// }








// -----------------------------
// export function addValidationElComplex(dest, vClassSuffix, value, valueTitle) {
//   deleteElementByClassName(dest + vClassSuffix);
//   document.getElementById(dest).appendChild(getMyValidationElementComplex(dest, vClassSuffix, value, valueTitle));
// }
// export function getMyValidationElementComplex(dest, vClassSuffix, value, valueTitle) {
//   const myEl = getValidationAlertElement(dest + vClassSuffix);
//   if (!isNullOrUndefined(valueTitle)) {
//     myEl.innerHTML = new ValidationMessage().getEqual(valueTitle);
//   } else {
//     myEl.innerHTML = new ValidationMessage().getEqual(value);
//   }
//   return myEl;
// }
// -----------------------------

// -----------------------------
export function manageDelValidationAlert(dest, vClassSuffix) {
  if (!isNullOrUndefined(dest)) {
    delValidationEl(dest, vClassSuffix);
  }
}
export function manageAddValidationAlert(dest, vClassSuffix, innerHTML, _ValidationConfig: ValidationConfig) {
  if (!isNullOrUndefined(dest)) {
    addValidationEl(dest, vClassSuffix, innerHTML, _ValidationConfig);
  }
}
// -----------------------------
