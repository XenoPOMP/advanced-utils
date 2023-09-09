import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { summary } from '../../src';

@TestSuite('Summary function')
export class SummaryTest {
  @Test('Provide empty array')
  provideEmptyArray() {
    const realSum = summary();

    expect.toBeEqual(realSum, 0);
  }

  @Test('Any argument array length')
  @TestCase('Provide [1]', 1, 1)
  @TestCase('Provide [1,2]', 3, 1, 2)
  @TestCase('Provide [1,2,3]', 6, 1, 2, 3)
  checkArgumentArrayLength(expectedResult: number, ...items: number[]) {
    expect.toBeEqual(summary(...items), expectedResult);
  }
}
