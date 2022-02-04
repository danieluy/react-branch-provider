var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
var BaseProvider = /** @class */ (function () {
    function BaseProvider(state) {
        this.state = state;
        this.methods = {};
        this.context = this.createContext(state);
    }
    BaseProvider.prototype.getState = function () {
        return this.state;
    };
    BaseProvider.prototype.getContext = function () {
        return this.context;
    };
    BaseProvider.prototype.setUpdater = function (setFn) {
        this.update = setFn;
    };
    BaseProvider.prototype.setMethods = function () {
        var _this = this;
        /**
         * Methods should only be setted once
         * Otherwise, that would break the dependencies
         * of any effect that uses one of them
         */
        if (Object.keys(this.methods).length > 0) {
            return;
        }
        var propNames = Object.getOwnPropertyNames(this.constructor.prototype).filter(function (propName) { return propName !== "constructor"; });
        propNames.forEach(function (propName) {
            var fn = _this.constructor.prototype[propName];
            _this.methods[propName] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return fn.call.apply(fn, __spreadArray([_this], args, false));
            };
        });
    };
    BaseProvider.prototype.getMethods = function () {
        return this.methods;
    };
    BaseProvider.prototype.setState = function (value) {
        this.update(value);
    };
    BaseProvider.prototype.createContext = function (defaultValue) {
        return React.createContext(defaultValue);
    };
    return BaseProvider;
}());
export { BaseProvider };
