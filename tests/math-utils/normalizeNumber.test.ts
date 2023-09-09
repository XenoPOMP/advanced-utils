import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { normalizeNumber } from '../../src';

@TestSuite()
export class NormalizeNumberTest {
  @Test()
  @TestCase('Provide null and get 0', null, 0)
  @TestCase('Provide undefined and get 0', undefined, 0)
  @TestCase('Provide 12 and get 12', 12, 12)
  normalize(num: Parameters<typeof normalizeNumber>[0], expected: number) {
    const normalizedNumber = normalizeNumber(num);

    expect.toBeEqual(normalizedNumber, expected);
  }
}
