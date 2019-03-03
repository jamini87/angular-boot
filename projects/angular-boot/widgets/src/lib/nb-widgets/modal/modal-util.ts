import {Toolkit2} from '@angular-boot/util';
import {isNullOrUndefined} from 'util';

declare var $: any;

export class ModalUtil {
  public static generateModalId(): string {
    return 'modal_' + Toolkit2.Common.create().uuidv4();
  }

  public static showModal(modalId: string, appendToBodyOnShow?: boolean) {
    // $('#' + modalId).modal('show');
    // if ($('#' + modalId).parent().get(0).tagName != 'BODY')
    //   $('.modal-backdrop').insertAfter($('#' + modalId));
    if (appendToBodyOnShow !== false) {
      $('#' + modalId).appendTo('body').modal('show');
    } else {
      $('#' + modalId).modal('show');
    }
  }

  public static hideModal(modalId: string, removeFromDom?: boolean) {
    $('#' + modalId).modal('hide');
    if (removeFromDom === true) {
      $('body>#' + modalId).remove();
      $('body>.modal-backdrop').remove();
    }
    // setTimeout(() => {
    //   $('#' + modalId).remove();
    // }, 1000);
  }
}
