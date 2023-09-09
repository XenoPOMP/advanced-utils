import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { capitalize } from '../../src';

@TestSuite('String capitalize function')
export class CapitalizeTest {
  @Test('Capitalize uncapitalized string')
  capitalizeUncapitalized() {
    const targetString = 'normal';
    const capitalizedString = capitalize(targetString);

    expect.toBeEqual(capitalizedString, 'Normal');
  }

  @Test('Capitalize capitalized string')
  capitalizeCapitalized() {
    const targetString = 'Normal';
    const capitalizedString = capitalize(targetString);

    expect.toBeEqual(capitalizedString, 'Normal');
  }
}
