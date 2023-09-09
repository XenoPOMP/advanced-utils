import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { isUndefined } from '../../src';

@TestSuite('isUndefined function')
export class IsUndefinedTest {
  @Test('Check for undefined')
  @TestCase('Provide null', null, false)
  @TestCase('Provide undefined', undefined, true)
  @TestCase('Provide number', 1, false)
  @TestCase('Provide string', 'hello world!', false)
  @TestCase('Provide boolean', true, false)
  @TestCase('Provide object', {}, false)
  @TestCase('Provide array', [], false)
  checkForUndefined(value: Parameters<typeof isUndefined>[0], expectedResult: ReturnType<typeof isUndefined>) {
    expect.toBeEqual(isUndefined(value), expectedResult);
  }
}
