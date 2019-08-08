declare var $: any;
export class DomUtil {
  public static typeInElement(el, newText) {
    const start = el.prop('selectionStart');
    const end = el.prop('selectionEnd');
    const text = el.val();
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    el.val(before + newText + after);
    el[0].selectionStart = el[0].selectionEnd = start + newText.length;
    el.focus();
  }


  public static insertIntoElement(selector: string, resText, textToInsert, options?: { addSpaceAfter: boolean }) {
    $(selector).val(resText);
    if (options.addSpaceAfter === true) {
      DomUtil.typeInElement($(selector), textToInsert + ' ');
    } else {
      DomUtil.typeInElement($(selector), textToInsert);
    }
    resText = $(selector).val();
  }
}
