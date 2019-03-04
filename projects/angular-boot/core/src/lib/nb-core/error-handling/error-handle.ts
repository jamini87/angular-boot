/**
 * Created by Jafar Amini in March 2018.
 */
import swal from 'sweetalert2';
// declare var swal: any;
import {Notify, NotifyConfig, Toolkit2} from '@angular-boot/util';


export class ErrorHandle {
  public static handleDefault(error, _ServiceConfig) {
    console.error(error);
    switch (error.status) {
      case 0:
        Notify.showNotify(
          new NotifyConfig(
            Notify.Type.WARNING,
            Notify.Placement.TOP_LEFT,
            Notify.TEMPLATES.Template2,
            'خطا در برقراری ارتباط با سرور '
            ,
            'خطا'
          )
        );
        break;
      case 400:
        Notify.showNotify(
          new NotifyConfig(
            Notify.Type.WARNING,
            Notify.Placement.TOP_LEFT,
            Notify.TEMPLATES.Template2,
            'اطلاعات ورودی درست نیست'
            ,
            'خطا'
          )
        );
        break;
      case 403:
        Notify.showNotify(
          new NotifyConfig(
            Notify.Type.WARNING,
            Notify.Placement.TOP_LEFT,
            Notify.TEMPLATES.Template2,
            'درخواست غیرمجاز',
            'توجه'
          )
        );
        break;
      case 401:
        Notify.showNotify(
          new NotifyConfig(
            Notify.Type.WARNING,
            Notify.Placement.TOP_LEFT,
            Notify.TEMPLATES.Template2,
            'نام کاربری یا رمز اشتباه است. یا اکانت فعال نشده است'
            ,
            'توجه'
          )
        );
        _ServiceConfig.redirectToLoginPage();
        break;
      case 404:
        Notify.showNotify(
          new NotifyConfig(
            Notify.Type.WARNING,
            Notify.Placement.TOP_LEFT,
            Notify.TEMPLATES.Template2,
            'درخواست مورد نظر پیدا نشد',
            'توجه'
          )
        );

        break;
      default:
        const notifyConfig = new Toolkit2.NotifyConfig(
          Toolkit2.Notify.Type.DANGER,
          Toolkit2.Notify.Placement.TOP_LEFT,
          // null,
          Toolkit2.Notify.TEMPLATES.Template2,
          'خطایی رخ داد. کد خطا: '
          + error.status
          ,
          'توجه شود'
        );
        // notifyConfig.options.icon = 'fa fa-eye fa-2x';
        Toolkit2.Notify.showNotify(notifyConfig);
    }
  }

  public static alertMessage(messages: string) {

    swal({
      showCloseButton: true,
      confirmButtonColor: '#04383c',
      background: '#e4e4e4',
      type: 'error',
      title: 'خطا!',
      html:
        '<p>' + messages + '</p>'
      ,
      confirmButtonText: 'تایید'
    });
  }
}
