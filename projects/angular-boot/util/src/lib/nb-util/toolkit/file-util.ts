import {ReadMode} from '../../nb-helper/helper/helper/read-mode.enum';
import {isNullOrUndefined} from '../util-functions';

export class FileUtil {

  public static prepareUploadOne(formData, event, multiparKey?: string) {
    let myMultiparKey = '';
    if (isNullOrUndefined(multiparKey)) {
      myMultiparKey = 'file';
    } else {
      myMultiparKey = multiparKey;
    }
    const x = event.target.files[0];
    formData.append(myMultiparKey, x);
    formData.append('count', '1');
  }

  public static prepareUploadMulti(formData, event, multiparKey?: string) {
    let myMultiparKey = '';
    if (isNullOrUndefined(multiparKey)) {
      myMultiparKey = 'files';
    } else {
      myMultiparKey = multiparKey;
    }
    for (let i = 0; i < event.target.files.length; i++) {
      formData.append(myMultiparKey, event.target.files[i]);
    }
    formData.append('count', event.target.files.length);
  }

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
        break;
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
