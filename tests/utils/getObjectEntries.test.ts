import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { getObjectEntries } from '../../src';

@TestSuite('getObjectEntries func')
export class GetObjectEntriesTest {
  @Test()
  @TestCase('Provide empty object.', {}, [])
  @TestCase('Provide object.', { hello: 'world', foo: 'bar' }, [['hello', 'world'], ['foo', 'bar']])
  check(obj: object, expected: Array<[PropertyKey, any]>) {
    const realResult = getObjectEntries(obj);

    expect.toBeEqual(realResult.length, expected.length);

    realResult.forEach((entry, index) => {
      expect.arraysToBeEqual(entry, expected[index])
    })
  }
}
