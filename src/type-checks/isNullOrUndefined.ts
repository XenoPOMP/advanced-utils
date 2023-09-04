import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

/**
 * Returns true if value is **null** or **undefined**.
 *
 * @param value
 *
 * @example
 * const valOne = 'hello world!';
 * isNullOrUndefined(valOne); // false
 *
 * let valTwo;
 * isNullOrUndefined(valOne); // true
 *
 * const valThree: string | null = null;
 * isNullOrUndefined(valThree); // true
 */
export const isNullOrUndefined = (value: any): value is undefined | null => {
  return isUndefined(value) || isNull(value);
};
