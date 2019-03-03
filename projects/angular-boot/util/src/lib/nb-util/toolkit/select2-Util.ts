/**
 * Created by Jafar Amini in March 2018.
 */
declare var $: any;
export class Select2Util {
  public static changeSelectedList(referenceList, selectedList, value: string[]) {
    selectedList = [];
    if (value !== null) {
      for (const item of value) {
        for (const refItem of referenceList) {
          if (refItem.id === item) {
            selectedList.push(refItem.id);

          }
        }
      }
    }
    return selectedList;
  }

  public static resetSelectedList(selector){
    $(selector).val([]);
    $(selector).trigger('change');
  }
}
