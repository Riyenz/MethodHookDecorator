export declare const MethodHook: {
    /**
     * Calls the assigned method before the given methodName
     * @param {string} methodName name of the method that will be called after the assigned method
     */
    Before: (methodName: string) => (target: any, _: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
    /**
     * Calls the assigned method after the given methodName
     * @param {string} methodName name of the method that will be called before the assigned method
     */
    After: (methodName: string) => (target: any, _: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
};
//# sourceMappingURL=index.d.ts.map