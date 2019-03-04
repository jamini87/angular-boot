import {ReadMode} from "../../nb-helper/helper/helper";

export class FileUtil {
  public static readFile(file, done, readMod?: ReadMode) {

    if (!file) {
      return done(new Error('no file chosen'));
    }

    const reader = new FileReader();
    reader.onload = () => {
      done(null, reader.result);
    };
    switch (readMod) {
      case ReadMode.Text:
        reader.readAsText(file);
        break;
      case ReadMode.ArrayBuffer:
        reader.readAsArrayBuffer(file);
        break
      case ReadMode.BinaryString:
        reader.readAsBinaryString(file);
        break;
      case ReadMode.DataURL:
        reader.readAsDataURL(file);
        break;
      default:
        reader.readAsText(file);
    }
  }
}
