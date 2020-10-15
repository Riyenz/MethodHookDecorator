/*!
 * method-hook-decorator v1.0.0
 * (c) Rienz Ivan Otiong
 * Released under the MIT License.
 */

var MethodHook = {
    Before: function (fnName) {
        return function (target, _, descriptor) {
            var methodTarget = target[fnName];
            Object.defineProperty(target, fnName, {
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
    After: function (fnName) {
        return function (target, _, descriptor) {
            var methodTarget = target[fnName];
            Object.defineProperty(target, fnName, {
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

export { MethodHook };
//# sourceMappingURL=index.esm.js.map
