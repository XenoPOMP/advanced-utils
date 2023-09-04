/**
 * This function calculates summary of numbers.
 * @param {...number[]} items   array of numbers (for example (1, 2, 3))
 * @return {number}             summary of numbers
 *
 * @example
 * const sum = summary(1, 2, 3); // 6
 */
export const summary = (...items: number[]): number => {
  return items.reduce((prev, next) => (prev += next), 0);
};
