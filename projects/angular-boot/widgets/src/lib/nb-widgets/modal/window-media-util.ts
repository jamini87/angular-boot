export class WindowMediaUtil {
  public static isXl() {
    if (WindowMediaUtil.matchXl()) {
      return true;
    }
    return false;
  }

  public static isLg() {
    if (!WindowMediaUtil.matchXl() && WindowMediaUtil.matchLg()) {
      return true;
    }
    return false;
  }

  public static isMd() {
    if (!WindowMediaUtil.matchXl() && !WindowMediaUtil.matchLg() && WindowMediaUtil.matchMd()) {
      return true;
    }
    return false;
  }

  public static isSm() {
    if (!WindowMediaUtil.matchXl() && !WindowMediaUtil.matchLg() && !WindowMediaUtil.matchMd() && WindowMediaUtil.matchSm()) {
      return true;
    }
    return false;
  }

  public static isXs() {
    if (!WindowMediaUtil.matchXl() && !WindowMediaUtil.matchLg() && !WindowMediaUtil.matchMd() && !WindowMediaUtil.matchSm() && WindowMediaUtil.matchXs()) {
      return true;
    }
    return false;
  }

  public static matchXl() {
    if (window.matchMedia('(min-width: 1200px)').matches) {
      return true;
    }
    return false;
  }

  public static matchLg() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      return true;
    }
    return false;
  }

  public static matchMd() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      return true;
    }
    return false;
  }

  public static matchSm() {
    if (window.matchMedia('(min-width: 576px)').matches) {
      return true;
    }
    return false;
  }

  public static matchXs() {
    if (window.matchMedia('(min-width: 0px)').matches) {
      return true;
    }
    return false;
  }
}
