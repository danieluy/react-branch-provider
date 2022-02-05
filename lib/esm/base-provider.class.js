import produce from "immer";
import React from "react";
var BranchProviderBase = /** @class */ (function () {
    function BranchProviderBase(state) {
        this._state = state;
        this._context = this.createContext(state);
    }
    Object.defineProperty(BranchProviderBase.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProviderBase.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProviderBase.prototype, "updater", {
        set: function (setFn) {
            this._updater = setFn;
        },
        enumerable: false,
        configurable: true
    });
    BranchProviderBase.prototype.setState = function (cb) {
        var nextState = produce(this._state, cb);
        this._updater(nextState);
    };
    BranchProviderBase.prototype.createContext = function (defaultValue) {
        return React.createContext(defaultValue);
    };
    return BranchProviderBase;
}());
export { BranchProviderBase };
