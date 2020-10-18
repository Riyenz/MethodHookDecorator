/*!
 * @riyenz/method-hook-decorator v1.0.1
 * (c) undefined
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MethodHook = {
    /**
     * Calls the assigned method before the given methodName
     * @param {string} methodName name of the method that will be called after the assigned method
     */
    Before: function (methodName) {
        return function (target, _, descriptor) {
            var methodTarget = target[methodName];
            Object.defineProperty(target, methodName, {
                value: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    descriptor.value.apply(this, args);
                    methodTarget.apply(this, args);
                }
            });
            return descriptor;
        };
    },
    /**
     * Calls the assigned method after the given methodName
     * @param {string} methodName name of the method that will be called before the assigned method
     */
    After: function (methodName) {
        return function (target, _, descriptor) {
            var methodTarget = target[methodName];
            Object.defineProperty(target, methodName, {
                value: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    methodTarget.apply(this, args);
                    descriptor.value.apply(this, args);
                }
            });
            return descriptor;
        };
    },
};

exports.MethodHook = MethodHook;
//# sourceMappingURL=index.js.map
