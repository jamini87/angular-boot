import { FormControl } from '@angular/forms';

import { dateISO_8601 } from './validator';

describe('DateISO', () => {
  const error = {nbvDateISO: true};

  it('"2013-11-12" should be dateISO', () => {
    const control = new FormControl('2013-11-12');
    expect(dateISO_8601(control)).toBeNull();
  });

  it('"2013-13-12" should not be dateISO', () => {
    const control = new FormControl('2013-13-12');
    expect(dateISO_8601(control)).toEqual(error);
  });
});
