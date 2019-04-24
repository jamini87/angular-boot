/**
 * @author Jafar Amini in March 2018.
 */
import {NotifyType} from './notify-type';
import ConfigDefault from './notify-config-default';
import {NotifyPlacement} from './notify-placement';
import {Animate} from '../animate';
import {isNullOrUndefined} from 'util';
import template1 from './templates/template';
import {TEMPLATES} from './templates/template.enums';

export class NotifyConfig {
  settings?: NotifyConfigSettings;
  options?: NotifyConfigOptions;

  constructor(notifyType: NotifyType,
              notifyPlacement: NotifyPlacement,
              template: TEMPLATES,
              message: string,
              title?: string,
  ) {
    this.settings = ConfigDefault.settings;
    this.options = ConfigDefault.options;
    this.options.title = title;
    this.options.message = message;
    if (!isNullOrUndefined(template) && title !== '') {
      if (isNullOrUndefined(title) || title === '') {
        if (!this.settings.hasOwnProperty('template')) {
          this.settings['template'] = '';
        }
        this.settings.template = template1[template + '_without_title'];
      } else {
        this.settings.template = template1[template];
      }
    } else {
      delete this.settings.template;
    }
    this.settings.type = notifyType;
    this.settings.placement.from = notifyPlacement.from;
    this.settings.placement.align = notifyPlacement.align;
    switch (notifyType) {
      case NotifyType.INFO:
        this.options.icon = 'fa fa-info-circle';
        this.settings.animate.enter = Animate.Fading_Entrances.FadeInLeft;
        this.settings.animate.exit = Animate.Fading_Exits.FadeOutLeft;
        break;
      case NotifyType.WARNING:
        this.options.icon = 'fa fa-exclamation-triangle';
        this.settings.animate.enter = Animate.Bouncing_Entrances.BounceIn;
        this.settings.animate.exit = Animate.Bouncing_Exits.BounceOut;
        break;
      case NotifyType.SUCCESS:
        this.options.icon = 'fa fa-check-circle';
        this.settings.animate.enter = Animate.Fading_Entrances.FadeInLeft;
        this.settings.animate.exit = Animate.Fading_Exits.FadeOutLeft;
        break;
      case NotifyType.DANGER:
        this.options.icon = 'fa fa-exclamation-triangle';
        this.settings.animate.enter = Animate.Bouncing_Entrances.BounceIn;
        this.settings.animate.exit = Animate.Bouncing_Exits.BounceOut;
        break;
    }
  }

  // options: {
  //   icon: string;
  //   title: string;
  //   message: string;
  //   url: string;
  //   target: string;
  // };
  // settings: {
  //   element: string;
  //   position: string;
  //   type: NotifyType;
  //   allow_dismiss: boolean;
  //   newest_on_top: boolean;
  //   showProgressbar: boolean;
  //   placement: {
  //     from: string;
  //     align: string;
  //   };
  //   offset: number;
  //   spacing: number;
  //   z_index: number;
  //   delay: number;
  //   timer: number;
  //   url_target: string;
  //   mouse_over: any;
  //   animate: {
  //     enter: string,
  //     exit: string
  //   };
  //   onShow: any;
  //   onShown: any;
  //   onClose: any;
  //   onClosed: any;
  //   icon_type: string;
  //   template: string;
  // };
}

export class NotifyConfigSettings {
  element?: string;
  position?: null;
  type?: NotifyType;
  allow_dismiss?: boolean;
  newest_on_top?: boolean;
  showProgressbar?: boolean;
  placement?: NotifyPlacement;
  offset?: number;
  spacing?: number;
  z_index?: number;
  delay?: number;
  timer?: number;
  url_target?: string; // eg '_blank'
  mouse_over?: any;
  animate?: {
    enter: string,
    exit: string
  };
  onShow?: any;
  onShown?: any;
  onClose?: any;
  onClosed?: any;
  icon_type?: string;
  template?: string;
}

export class NotifyConfigOptions {
  icon?: string;    // eg 'glyphicon glyphicon-warning-sign'
  title?: string;   // eg 'توجه'
  message?: string; // 'Your message'
  url?: string;     // 'https://github.com/mouse0270/bootstrap-notify'
  target?: string;   // '_blank'
}
