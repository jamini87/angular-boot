/**
 * @author Jafar Amini in March 2018.
 */
export class BooleanMap {
  public static yesNo(value: boolean) {
    if (value === true) {
      return 'بله';
    } else if (value === false) {
      return 'خیر';
    }
  }
  public static activeDeactive(value: boolean) {
    if (value === true) {
      return 'فعال';
    } else if (value === false) {
      return 'غیرفعال';
    }
  }

  public static has_Not(value: boolean) {
    if (value === true) {
      return 'دارد';
    } else if (value === false) {
      return 'ندارد';
    }
  }

  public static approved_DisApproved(value: boolean) {
    if (value === true) {
      return 'تأیید شد';
    } else if (value === false) {
      return 'رد شد';
    }
  }

}
