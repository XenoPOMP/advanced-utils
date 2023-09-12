import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { ExtendedArray } from '../../src/classes/ExtendedArray';

@TestSuite('Extended array class')
export class ExtendedArrayTest {
  @Test('Check correct type definition')
  checkType() {
    const checkingVariable = new ExtendedArray(1, 2, 3);

    expect.arraysToBeEqual(checkingVariable, [1, 2, 3]);
  }

  @Test('Clear method test')
  clearTest() {
    const checkingVariable = new ExtendedArray(1, 2, 3);
    expect.arraysToBeEqual(checkingVariable, [1, 2, 3]);

    checkingVariable.clear();
    expect.arraysToBeEqual(checkingVariable, new Array(0));
  }
}
