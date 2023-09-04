/**
 * Returns true if **value** is null.
 *
 * @param value
 *
 * @example
 * const doSomething = (value: string | null) => {
 *   if (isNull(value)) {
 *     return;
 *   }
 *
 *   const convertedValue = value;
 *
 *   type ConvertedValueType = typeof convertedValue; // string. Type narrowing works.
 * };
 */
export const isNull = (value: any): value is null => {
  return value === null;
};
