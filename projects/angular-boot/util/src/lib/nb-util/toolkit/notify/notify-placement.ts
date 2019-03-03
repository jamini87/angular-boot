/**
 * Created by Jafar Amini in March 2018.
 */
export class NotifyPlacement {
  public static Placement = {
    TOP_LEFT:      new NotifyPlacement('top', 'left'),
    TOP_CENTER:    new NotifyPlacement('top', 'center'),
    TOP_RIGHT:     new NotifyPlacement('top', 'right'),
    BOTTOM_LEFT:   new NotifyPlacement('bottom', 'left'),
    BOTTOM_CENTER: new NotifyPlacement('bottom', 'center'),
    BOTTOM_RIGHT:  new NotifyPlacement('bottom', 'right')
  }
  from: string;
  align: string;
  constructor(from?, align?) {
    this.from = from;
    this.align = align;
  }
}
