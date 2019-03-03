// import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
//
// import { isPresent } from '../../util/validation-functions';
//
// export const pattern = (control: AbstractControl, nbvPattern: string):
//   {[key: string]: boolean} => {
//   if (isPresent(Validators.required(control))) {
//     return null;
//   }
//
//   const v: string = control.value;
//   /* tslint:disable */
//   return /^/ + this.nbvPattern+ /$/.test(v) ? null : {'nbvPattern': true};
//   /* tslint:enable */
// };
