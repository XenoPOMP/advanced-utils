import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestCase } from 'testyts/build/lib/decorators/testCase.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';
import { pullPattern } from '../../src';

@TestSuite('pullPattern function')
export class PullPatternTest {
  @Test()
  @TestCase('Disable pattern wrapping.', 'Hello, it`s glebers2004, the marvelous hero.', '\\b\\w*\\b', 'Hello', {
    wrap: false,
    flags: 'gi'
  })
  @TestCase('Change flags.', 'Hello, it`s glebers2004, the marvelous hero.', 'Glebers\\d*', undefined, {
    flags: 'g'
  })
  @TestCase('Check default flags.', 'Hello, it`s glebers2004, the marvelous hero.', 'glebers\\d*', 'glebers2004')
  @TestCase('Without options.', 'Hello, it`s glebers2004, the marvelous hero.', 'glebers\\d*', 'glebers2004')
  pullPatternTesting(originalString: string, pattern: string, expected: ReturnType<typeof pullPattern>, options?: Parameters<typeof pullPattern>[2]) {
    expect.toBeEqual(pullPattern(originalString, pattern, options), expected)
  }
}
