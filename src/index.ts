export const MethodHook = {
  Before: function (fnName: string) {
    return function (
      target: any,
      _: string,
      descriptor: PropertyDescriptor,
    ) {
      const methodTarget = target[fnName];

      Object.defineProperty(target, fnName, {
        value: function (...args: any[]) {
          descriptor.value.apply(this, args);
          methodTarget.apply(this, args);
        }
      })

      return descriptor
    };
  },
  After: function (fnName: string) {
    return function (
      target: any,
      _: string,
      descriptor: PropertyDescriptor,
    ) {
      const methodTarget = target[fnName];

      Object.defineProperty(target, fnName, {
        value: function (...args: any[]) {
          methodTarget.apply(this, args);
          descriptor.value.apply(this, args);
        }
      })

      return descriptor
    };
  },
};
