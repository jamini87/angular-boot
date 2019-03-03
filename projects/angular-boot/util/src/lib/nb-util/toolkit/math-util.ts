/**
 * Created by Jafar Amini in March 2018.
 */
export class MathUtil {
  public static toRadians(degree) {
    return degree * (Math.PI / 180);
  }

  public static toDegrees(radian) {
    return radian * (180 / Math.PI);
  }
}
