/**
 * Make first string of word uppercase.
 *
 * @param target
 */
export const capitalize = (target: string): string => {
  return target.charAt(0).toUpperCase() + target.slice(1);
};
