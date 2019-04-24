/**
 * @author Jafar Amini in March 2018.
 */
import {NotifyType} from './notify-type';
import {NotifyPlacement} from './notify-placement';
import {NotifyConfig} from './notify-config';
import {TEMPLATES} from './templates/template.enums';

declare const $: any;

export class Notify {
  // public static Direction = {
  //   TOP_LEFT: new NotifyDirection('top', 'left'),
  //   TOP_CENTER: new NotifyDirection('top', 'center'),
  //   TOP_RIGHT: new NotifyDirection('top', 'right'),
  //   BOTTOM_LEFT: new NotifyDirection('bottom', 'left'),
  //   BOTTOM_CENTER: new NotifyDirection('bottom', 'center'),
  //   BOTTOM_RIGHT: new NotifyDirection('bottom', 'right')
  // }

  public static Placement = NotifyPlacement.Placement;
  public static Type = NotifyType;
  public static TEMPLATES = TEMPLATES;

  public static showNotify(notifyConfig: NotifyConfig) {
    // $.notify(notifyConfig.options, notifyConfig.settings);
    $.notify(
      notifyConfig.options,
      notifyConfig.settings
      );
  }
}
