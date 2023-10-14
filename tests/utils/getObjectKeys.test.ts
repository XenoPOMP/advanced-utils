import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import getObjectKeys from '../../src/utils/getObjectKeys';


@TestSuite('getObjectKeys function')
export class GetObjectKeysTest {
  @Test()
  @TestCase('Provide empty object.', {}, [])
  @TestCase('Provide object.', { hello: '' }, ['hello'])
  @TestCase('Provide object with nested objects.', { hello: '', world: '', sus: { yummy: '' } }, ['hello', 'world', 'sus'])
  getObjectKeysCheck(
    obj: object,
    expected: string[]
  ) {
    expect.arraysToBeEqual(getObjectKeys(obj), expected)
  }
}
