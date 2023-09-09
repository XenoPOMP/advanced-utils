import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { isNullOrUndefined } from '../../src';

@TestSuite('isNullOrUndefined function')
export class IsNullOrUndefinedTest {
  @Test('Check for null or undefined')
  @TestCase('Provide null', null, true)
  @TestCase('Provide undefined', undefined, true)
  @TestCase('Provide number', 1, false)
  @TestCase('Provide string', 'hello world!', false)
  @TestCase('Provide boolean', true, false)
  @TestCase('Provide object', {}, false)
  @TestCase('Provide array', [], false)
  checkForNullOrUndefined(value: Parameters<typeof isNullOrUndefined>[0], expectedResult: ReturnType<typeof isNullOrUndefined>) {
    expect.toBeEqual(isNullOrUndefined(value), expectedResult);
  }
}
