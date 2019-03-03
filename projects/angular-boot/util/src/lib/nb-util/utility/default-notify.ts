/**
 * Created by Jafar Amini in December 2018.
 */
import {Notify, NotifyConfig} from '../toolkit/notify';

export class DefaultNotify {
  static notifySuccess(message: string, title?: string) {
    const notifyConfig = new NotifyConfig(
      Notify.Type.SUCCESS,
      Notify.Placement.TOP_LEFT,
      Notify.TEMPLATES.Template2,
      message
      ,
      title
    );
    Notify.showNotify(notifyConfig);

  }

  static notifyDanger(message: string, title?: string) {
    const notifyConfig = new NotifyConfig(
      Notify.Type.DANGER,
      Notify.Placement.TOP_LEFT,
      Notify.TEMPLATES.Template2,
      message
      ,
      title
    );
    Notify.showNotify(notifyConfig);
  }

  static notifyInfo(message: string, title?: string) {
    const notifyConfig = new NotifyConfig(
      Notify.Type.INFO,
      Notify.Placement.TOP_LEFT,
      Notify.TEMPLATES.Template2,
      message
      ,
      title
    );
    Notify.showNotify(notifyConfig);
  }

  static notifyWarning(message: string, title?: string) {
    const notifyConfig = new NotifyConfig(
      Notify.Type.WARNING,
      Notify.Placement.TOP_LEFT,
      Notify.TEMPLATES.Template2,
      message
      ,
      title
    );
    Notify.showNotify(notifyConfig);
  }
}
