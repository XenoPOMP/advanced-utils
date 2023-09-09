import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';

import { roundNumber } from '../../src';

@TestSuite('Round number function')
export class RoundNumberTest {
  @Test()
  @TestCase('1.2 with 1 precision is 1.2', 1.2, 1, 1.2)
  @TestCase('1.21 with 1 precision is 1.2', 1.21, 1, 1.2)
  @TestCase('1.22 with 1 precision is 1.2', 1.22, 1, 1.2)
  @TestCase('1.23 with 1 precision is 1.2', 1.23, 1, 1.2)
  @TestCase('1.24 with 1 precision is 1.2', 1.24, 1, 1.2)
  @TestCase('1.25 with 1 precision is 1.3', 1.25, 1, 1.3)
  @TestCase('1.26 with 1 precision is 1.3', 1.26, 1, 1.3)
  @TestCase('1.27 with 1 precision is 1.3', 1.27, 1, 1.3)
  @TestCase('1.28 with 1 precision is 1.3', 1.28, 1, 1.3)
  @TestCase('1.29 with 1 precision is 1.3', 1.29, 1, 1.3)
  nextDigitCheck(targetNum: number, precision: number, result: number) {
    const roundedNumber = roundNumber(targetNum, precision);

    expect.toBeEqual(roundedNumber, result)
  }
}
