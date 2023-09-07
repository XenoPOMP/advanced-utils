import { isUndefined } from '../type-checks';

/**
 * This function can round number with certain precision.
 *
 * @param num
 * @param precision
 *
 * @example
 * roundNumber(1.212341, 2); // 1.21
 */
export const roundNumber = (num: number, precision: number = 0) => {
  let multipliedNum = num * Math.pow(10, precision);
  const nextDigit = parseInt(
    multipliedNum.toString().split(/\./gi).at(1)?.at(0) ?? '0'
  );

  if (nextDigit >= 5) {
    multipliedNum++;
  }

  return parseInt(`${multipliedNum}`) / Math.pow(10, precision);
};
