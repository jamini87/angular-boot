/**
 * @author Jafar Amini in December 2018.
 */
import {Notify, NotifyConfig} from '../toolkit/notify';
import {ObjectUtil} from '../toolkit/object-util';
import {isNullOrUndefined} from "util";

export class DefaultNotify {
  static notifySuccess(message: string, title?: string, notifyConfig?: NotifyConfig) {
    const nc = new NotifyConfig(
      Notify.Type.SUCCESS,
      Notify.Placement.TOP_LEFT,
      Notify.TEMPLATES.Template2,
      message,
      title
    );
    if (!isNullOrUndefined(notifyConfig)) {
      ObjectUtil.overlayValues(notifyConfig, nc);
    }
    Notify.showNotify(nc);
  }

  static notifyDanger(message: string, title?: string, notifyConfig?: NotifyConfig) {
    const nc = new NotifyConfig(
      Notify.Type.DANGER,
      Notify.Placement.TOP_LEFT,
      Notify.TEMPLATES.Template2,
      message,
      title
    );
    if (!isNullOrUndefined(notifyConfig)) {
      ObjectUtil.overlayValues(notifyConfig, nc);
    }
    Notify.showNotify(nc);
  }

  static notifyInfo(message: string, title?: string, notifyConfig?: NotifyConfig) {
    const nc = new NotifyConfig(
      Notify.Type.INFO,
      Notify.Placement.TOP_LEFT,
      Notify.TEMPLATES.Template2,
      message,
      title
    );
    if (!isNullOrUndefined(notifyConfig)) {
      ObjectUtil.overlayValues(notifyConfig, nc);
    }
    Notify.showNotify(nc);
  }

  static notifyWarning(message: string, title?: string, notifyConfig?: NotifyConfig) {
    const nc = new NotifyConfig(
      Notify.Type.WARNING,
      Notify.Placement.TOP_LEFT,
      Notify.TEMPLATES.Template2,
      message,
      title
    );
    if (!isNullOrUndefined(notifyConfig)) {
      ObjectUtil.overlayValues(notifyConfig, nc);
    }
    Notify.showNotify(nc);
  }
}
