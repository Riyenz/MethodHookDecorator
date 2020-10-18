export const MethodHook = {
  /**
   * Calls the assigned method before the given methodName
   * @param {string} methodName name of the method that will be called after the assigned method
   */
  Before: function (methodName: string) {
    return function (
      target: any,
      _: string,
      descriptor: PropertyDescriptor,
    ) {
      const methodTarget = target[methodName];

      Object.defineProperty(target, methodName, {
        value: function (...args: any[]) {
          descriptor.value.apply(this, args);
          methodTarget.apply(this, args);
        }
      })

      return descriptor
    };
  },
  /**
   * Calls the assigned method after the given methodName
   * @param {string} methodName name of the method that will be called before the assigned method
   */
  After: function (methodName: string) {
    return function (
      target: any,
      _: string,
      descriptor: PropertyDescriptor,
    ) {
      const methodTarget = target[methodName];

      Object.defineProperty(target, methodName, {
        value: function (...args: any[]) {
          methodTarget.apply(this, args);
          descriptor.value.apply(this, args);
        }
      })

      return descriptor
    };
  },
};
