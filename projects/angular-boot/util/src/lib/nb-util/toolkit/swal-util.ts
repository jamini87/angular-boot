/**
 * Edited by Jafar Amini in March 2018.
 */
import swal from 'sweetalert2';
import {isNullOrUndefined} from '../util-functions';
// declare var swal: any;

export class SwalUtil {
  public static successAdd(title?: string, text?: string) {
    swal({
      title:
        !isNullOrUndefined(title)
          ? title :
          'با موفقیت ثبت شد.',
      text:
        !isNullOrUndefined(text)
          ? text :
          '',
      type: 'success',
      confirmButtonColor: '#04383c',
    });
  }

  public static warningAdd(title?: string, text?: string) {
    swal({
      title:
        !isNullOrUndefined(title)
          ? title :
          'عملیات انجام نشد!',
      text:
        !isNullOrUndefined(text)
          ? text :
          'دوباره تلاش کنید.',
      type: 'error',
      confirmButtonColor: '#1EE8A8',
    });
  }

  public static successEdit(title?: string, text?: string) {
    swal({
      title:
        !isNullOrUndefined(title)
          ? title :
          'با موفقیت ویرایش شد.',
      text:
        !isNullOrUndefined(text)
          ? text :
          '',
      type: 'success',
      confirmButtonColor: '#04383c',
    });
  }

  public static warningEdit(title?: string, text?: string) {
    swal({
      title:
        !isNullOrUndefined(title)
          ? title :
          'عملیات انجام نشد!',
      text:
        !isNullOrUndefined(text)
          ? text :
          'دوباره تلاش کنید.',
      type: 'error',
      confirmButtonColor: '#1EE8A8',
    });
  }
}
