/**
 * This function works the same way as **Object.keys**,
 * but returns type-safe array of keys of Obj.
 *
 * @param obj
 */
const getObjectKeys = <T extends object>(obj: T): Array<keyof T> => {
  return Object.keys(obj).map(key => key as keyof typeof obj);
};

export default getObjectKeys;
