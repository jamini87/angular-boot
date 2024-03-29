/**
 * @author Jafar Amini in March 2018.
 */
import {ActionMode} from '../../nb-helper/appendix';
import {isNullOrUndefined} from '../util-functions';

export class ActionModeUtil {
  public static isEditOrAddMode(myMode_I: ActionMode){
    return !isNullOrUndefined(myMode_I)
      && (myMode_I === ActionMode.EDIT || myMode_I === ActionMode.ADD);
  }
  public static isEditOrViewMode(myMode_I: ActionMode) {
    return !isNullOrUndefined(myMode_I)
      && (myMode_I === ActionMode.EDIT || myMode_I === ActionMode.VIEW);
  }
  public static isAddOrViewMode(myMode_I: ActionMode){
    return !isNullOrUndefined(myMode_I)
      && (myMode_I === ActionMode.ADD || myMode_I === ActionMode.VIEW);
  }
  public static isAddMode(myMode_I: ActionMode){
    return !isNullOrUndefined(myMode_I) && (myMode_I === ActionMode.ADD);
  }
  public static isEditMode(myMode_I: ActionMode){
    return !isNullOrUndefined(myMode_I)
      && (myMode_I === ActionMode.EDIT);
  }
  public static isViewMode(myMode_I: ActionMode){
    return !isNullOrUndefined(myMode_I)
      && (myMode_I === ActionMode.VIEW);
  }
}
