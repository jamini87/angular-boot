/**
 * @author Jafar Amini in March 2018.
 */
import template1 from './templates/template';
import {NotifyType} from './notify-type';
import {Animate} from '../animate';
export default{
  options: {
    icon: null,    // eg 'glyphicon glyphicon-warning-sign'
    title: null,   // eg 'توجه'
    message: null, // 'Your message'
    url: null,     // 'https://github.com/mouse0270/bootstrap-notify'
    target: null   // '_blank'
  },
  settings: {
    element: 'body',
    position: null,
    type: NotifyType.INFO,
    allow_dismiss: false,
    newest_on_top: false,
    showProgressbar: false,
    placement: {
      from: 'top',
      align: 'left'
    },
    offset: 35,
    spacing: 10,
    z_index: 1031,
    delay: 4000,
    timer: 1000,
    url_target: null, // eg '_blank'
    mouse_over: null,
    animate: {
      enter: Animate.Fading_Entrances.FadeInLeft,
      exit: Animate.Fading_Exits.FadeOutLeft
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    icon_type: 'class',
    template: template1['template1']
}
};
