import {Toolkit2} from '@angular-boot/util';

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
      if ($('body>div#' + modalId).length > 0) {
        $('#' + modalId).modal('show');
      } else {
        $('#' + modalId).appendTo('body').modal('show'); // removes Original
      }
      // $('#' + modalId).clone(false, true).appendTo('body').modal('show'); // preserve original but not works scripts
      // //OR
      // $('body').append($('#' + modalId).clone()).modal('show'); // preserve original but not works scripts
    } else {
      $('#' + modalId).modal('show');
    }
  }

  public static hideModal(modalId: string, removeFromDom?: boolean) {
    $('#' + modalId).modal('hide');
    if (removeFromDom === true) {
      ModalUtil.removeModalFromDom(modalId);
    }
    // setTimeout(() => {
    //   $('#' + modalId).remove();
    // }, 1000);
  }

  public static removeModalFromDom(modalId: string) {
    $('body>#' + modalId).remove();
    $('body>.modal-backdrop').remove();
  }
}
