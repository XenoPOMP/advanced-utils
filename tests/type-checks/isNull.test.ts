import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { isNull } from '../../src';

@TestSuite('isNull function')
export class IsNullTest {
  @Test('Check for null')
  @TestCase('Provide null', null, true)
  @TestCase('Provide undefined', undefined, false)
  @TestCase('Provide number', 1, false)
  @TestCase('Provide string', 'hello world!', false)
  @TestCase('Provide boolean', true, false)
  @TestCase('Provide object', {}, false)
  @TestCase('Provide array', [], false)
  checkForNull(value: Parameters<typeof isNull>[0], expectedResult: ReturnType<typeof isNull>) {
    expect.toBeEqual(isNull(value), expectedResult);
  }
}
