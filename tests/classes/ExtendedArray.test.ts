import { expect } from 'testyts/build/lib/assertion/expect';
import { Test, XTest } from 'testyts/build/lib/decorators/test.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { ExtendedArray } from '../../src';

@TestSuite('Extended array class')
export class ExtendedArrayTest {
  @Test('Check correct type definition')
  checkType() {
    const checkingVariable = new ExtendedArray(1, 2, 3);

    expect.arraysToBeEqual(checkingVariable, [1, 2, 3]);
  }

  @Test('Empty method works')
  checkEmptyMethod() {
    const firstArray = new ExtendedArray(1, 2, 3);
    const secondArray = new ExtendedArray(0);

    expect.toBeFalse(firstArray.isEmpty(), 'First array is filled. Must return false.')
    expect.toBeTrue(secondArray.isEmpty(), 'Second array is empty. Must return true.')
  }

  @XTest('Clear method test')
  clearTest() {
    const checkingVariable = new ExtendedArray(1, 2, 3);
    expect.arraysToBeEqual(checkingVariable, [1, 2, 3]);

    // checkingVariable.clear();
    expect.arraysToBeEqual(checkingVariable, new Array(0));
  }
}
