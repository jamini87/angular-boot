import { FormControl } from '@angular/forms';

import { notEqualTo } from './validator';
import {ValidationSrcType} from '../../util/validation-src-type';
import {ValidationOptions} from '../../util/validation-options';

describe('NotEqualTo', () => {
  let notEqualControl: FormControl;
  let control: FormControl;
  const error = {nbvNotEqualTo: true};

  beforeEach(() => {
    notEqualControl = new FormControl();
    control = new FormControl();
  });
  const validationOptions = new ValidationOptions();
  validationOptions.validationSrcType = ValidationSrcType.FormControl;
  it('all control is empty should valid', () => {
    expect(notEqualTo(notEqualControl, validationOptions)(control)).toEqual(error);
  });

  it('control.value = "xxx" and notEqualControl.value is empty should valid', () => {
    control.setValue('xxx');
    expect(notEqualTo(notEqualControl, validationOptions)(control)).toBeNull();
  });

  it('control.value = "xxx" and notEqualControl.value = "yyy" should valid', () => {
    control.setValue('xxx');
    notEqualControl.setValue('yyy');
    expect(notEqualTo(notEqualControl, validationOptions)(control)).toBeNull();
  });

  it('control.value = "xxx" and notEqualControl.value = "xxx" should equal to "{notEqualTo: true}"', () => {
    control.setValue('xxx');
    notEqualControl.setValue('xxx');
    expect(notEqualTo(notEqualControl, validationOptions)(control)).toEqual(error);
  });

  it('control.value is empty and notEqualControl.value = "yyy" should valid', () => {
    control.setValue('');
    notEqualControl.setValue('yyy');
    expect(notEqualTo(notEqualControl, validationOptions)(control)).toBeNull();
  });

});
