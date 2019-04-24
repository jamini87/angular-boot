export class ArrayUtil {
  public static putAtIndex(arr, item, index) {
    arr.splice(index, 0, item).join();
  }
}
