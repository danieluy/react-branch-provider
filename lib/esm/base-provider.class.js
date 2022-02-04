import produce from "immer";
import React from "react";
var BaseProvider = /** @class */ (function () {
    function BaseProvider(state) {
        this._state = state;
        this.context = this.createContext(state);
    }
    Object.defineProperty(BaseProvider.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    BaseProvider.prototype.getContext = function () {
        return this.context;
    };
    BaseProvider.prototype.setUpdater = function (setFn) {
        this.update = setFn;
    };
    BaseProvider.prototype.setState = function (cb) {
        var nextState = produce(this._state, cb);
        this.update(nextState);
    };
    BaseProvider.prototype.createContext = function (defaultValue) {
        return React.createContext(defaultValue);
    };
    return BaseProvider;
}());
export { BaseProvider };
