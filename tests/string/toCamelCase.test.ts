import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';

import { toCamelCase } from '../../src';

@TestSuite('To camel case convert function.')
export class ToCamelCaseTest {
  @Test('Convert')
  @TestCase('From snake case', 'most_common_thing_ever', 'mostCommonThingEver')
  @TestCase('From normal string', 'Hello, my name is Alex!', 'helloMyNameIsAlex')
  checkCase(original: string, expectedResult: string) {
    expect.toBeEqual(toCamelCase(original), expectedResult);
  }
}
