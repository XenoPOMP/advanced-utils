export class ExtendedArray<T extends any = any> extends Array<T> {
  /** Clears array. */
  clear() {
    console.log(this);

    return this;
  }
}
