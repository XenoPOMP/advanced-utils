import { capitalize } from './capitalize';

/**
 * Converts string to camel case.
 *
 * @param target
 */
export const toCamelCase = (target: string): string => {
  const words = target.split(/[\W_]/gi).map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }

    return capitalize(word.toLowerCase());
  });

  return words.join('');
};
