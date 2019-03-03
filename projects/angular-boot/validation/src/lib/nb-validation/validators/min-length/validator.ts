// import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
//
// import { isPresent } from '../../util/validation-functions';
//
// export const minLength: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
//   if (isPresent(Validators.required(control))) {
//     return null;
//   }
//
//   const v: string = control.value;
//   if (v.length < this.nbvMinlength) {
//         return {'nbvMinlength': true};
//       } else {
//         return null;
//       }
// };
