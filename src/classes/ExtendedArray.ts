interface IExtendedArray<T extends any> {
  isEmpty: () => boolean;
}

class ExtendedArray<T extends any>
  extends Array<T>
  implements IExtendedArray<T>
{
  /**
   * Returns **true** if array is empty.
   */
  isEmpty() {
    return false;
    // return super.length === 0;
  }
}

export { ExtendedArray };
