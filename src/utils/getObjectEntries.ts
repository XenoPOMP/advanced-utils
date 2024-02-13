type ObjectEntries<Obj extends object> = Array<[keyof Obj, Obj[keyof Obj]]>;

/**
 * Form object`s entries array with strong types.
 * @param obj
 */
export const getObjectEntries = <Obj extends object>(
  obj: Obj
): ObjectEntries<Obj> => {
  return Object.entries(obj) as ObjectEntries<Obj>;
};
